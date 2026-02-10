"use client";
import { useAuth } from "@/auth/hooks/use-auth";
import { Button } from "@/components/ui/buttons";
import { RHFInput } from "@/components/ui/input";
import { auth } from "@/firebase";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { Form } from "@/components/ui/form";
import { ROUTES } from "@/constants/routes";
import { checkLoginExists, saveLogin } from "@/services/user";
import { toast } from "@/utils/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { RegisterFormData, registerSchema } from "../schemas";
import { authCookie } from "../utils/auth-cookie";
import { waitForRole } from "../utils/wait-for-role";

export function RegisterForm() {
  const { setUser, setRole } = useAuth();
  const router = useRouter();

  const methods = useForm<RegisterFormData>({
    mode: "onSubmit",
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const { login } = await checkLoginExists(null, data.login);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email.trim(),
        data.password.trim(),
      );
      const user = userCredential.user;
      const idToken = await user.getIdToken();
      await authCookie(idToken);
      const res = await authCookie(idToken);
      const result = await res.json();
      if (result.status !== "ok")
        throw new Error("Помилка при установці сесії");
      const userRole = await waitForRole(user);
      await saveLogin(user.uid, login);
      await updateProfile(user, {
        displayName: data.login,
      });

      setUser(user);
      setRole(userRole);

      toast("Ви успішно зареєструвались!");
      setTimeout(() => {
        router.replace(ROUTES.DASHBOARD.ROOT);
      }, 400);
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log(error.code);
        if (error.code === "auth/email-already-in-use") {
          toast("Такий email вже зареєстрований", "error");
        }
      } else {
        console.log(error);
      }
    }
  });
  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <div className="sm:w-md w-full min-w-2xs  flex flex-col gap-y-5">
        <RHFInput name="email" placeholder="email" />
        <RHFInput name="login" placeholder="Логін" />
        <RHFInput name="password" placeholder="Пароль" type="password" />

        <Button
          text="Зарейструватися"
          type="submit"
          variant="secondary"
          className="!py-4"
          loading={isSubmitting}
        />
      </div>
    </Form>
  );
}

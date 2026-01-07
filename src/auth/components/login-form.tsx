"use client";
import { useAuth } from "@/auth/hooks/use-auth";
import { Button } from "@/components/ui/buttons";
import { Form } from "@/components/ui/form";
import { RHFInput } from "@/components/ui/input";
import { ROUTES } from "@/constants/routes";
import { auth } from "@/firebase";
import { toast } from "@/utils/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { getIdTokenResult, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "../schemas";

export function LoginForm() {
  const methods = useForm<LoginFormData>({
    mode: "onSubmit",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const { setUser, setRole } = useAuth();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email.trim(),
        data.password.trim()
      );
      const user = userCredential.user;
      const tokenResult = await getIdTokenResult(user, true); // true = форс обновление
      const role = tokenResult.claims.role as "admin" | "user" | null;
      setUser(user);
      setRole(role);

      router.replace(ROUTES.DASHBOARD.ROOT);
      toast("Ви успішно зайшли!");
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log(error.code);
        if (error.code === "auth/invalid-credential") {
          toast("Невірний пароль або email", "error");
        }
      } else {
        console.log(error);
        toast("Помилка", "error");
      }
    }
  });

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <div className="sm:w-md w-full min-w-2xs  flex flex-col gap-y-5">
        <RHFInput name="email" placeholder="email" />
        <RHFInput name="password" placeholder="Пароль" type="password" />

        <Button
          text="Увійти"
          type="submit"
          variant="secondary"
          className="!py-4"
          loading={isSubmitting}
        />
      </div>
    </Form>
  );
}

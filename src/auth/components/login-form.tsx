"use client";
import { useAuth } from "@/auth/hooks/use-auth";
import { Button } from "@/components/ui/buttons";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/constants/routes";
import { auth } from "@/firebase";
import { useToast } from "@/hooks/use-toast";
import { validateForm } from "@/utils/validation";
import { FirebaseError } from "firebase/app";
import { getIdTokenResult, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { AuthForm } from "./auth-form";

export function LoginForm() {
  const [data, setData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const { setUser, setRole } = useAuth();
  const router = useRouter();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string | null;
    password?: string | null;
  }>({ email: null, password: null });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formErrors = validateForm(data);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    try {
      setLoading(true);
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
      setData({ email: "", password: "" });
      setErrors({ password: null, email: null });
      router.replace(ROUTES.DASHBOARD.ROOT);
      showToast("Ви успішно зайшли");
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log(error.code);
        if (error.code === "auth/invalid-credential") {
          setErrors({
            email: "Не вірний email або пароль!",
            password: "Не вірний email або пароль!",
          });
        }
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <AuthForm handleSubmit={handleSubmit}>
      <Input
        name="email"
        className="w-full"
        value={data.email}
        onChange={(e) =>
          setData((prev) => ({ ...prev, email: e.target.value }))
        }
        error={errors.email}
      />
      <Input
        name="password"
        type="password"
        className="w-full"
        error={errors.password}
        value={data.password}
        onChange={(e) =>
          setData((prev) => ({ ...prev, password: e.target.value }))
        }
      />
      <Button
        text="Увійти"
        type="submit"
        variant="secondary"
        className="!py-4"
        loading={loading}
      />
    </AuthForm>
  );
}

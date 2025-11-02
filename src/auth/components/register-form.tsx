"use client";

import { useAuth } from "@/auth/hooks/use-auth";
import { Button } from "@/components/ui/buttons";
import { Input } from "@/components/ui/input";
import { auth } from "@/firebase";
import { useToast } from "@/hooks/use-toast";
import { validateForm } from "@/utils/validation";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { ROUTES } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { waitForRole } from "../utils/wait-for-role";
import { AuthForm } from "./auth-form";

export function RegisterForm() {
  const { setUser, setRole } = useAuth();
  const router = useRouter();
  const [data, setData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

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

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email.trim(),
        data.password.trim()
      );
      const user = userCredential.user;
      const userRole = await waitForRole(user);

      setUser(user);
      setRole(userRole);
      setData({ email: "", password: "" });
      setErrors({ password: null, email: null });

      showToast("Ви успішно зареєструвались");
      router.replace(ROUTES.DASHBOARD.ROOT);
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log(error.code);
        if (error.code === "auth/email-already-in-use") {
          setErrors({
            email: "Такий email вже зареєстрований",
            password: null,
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
        text="Зарейструватися"
        type="submit"
        variant="secondary"
        className="!py-4"
        loading={loading}
      />
    </AuthForm>
  );
}

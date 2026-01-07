"use client";
import { Button } from "@/components/ui/buttons";
import { Form } from "@/components/ui/form";
import { RHFInput } from "@/components/ui/input";
import { auth } from "@/firebase";
import {
  ProfilePasswordForm,
  profilePasswordSchema,
} from "@/sections/dashboard/profile/schema";

import { toast } from "@/utils/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import { useForm } from "react-hook-form";

export function ProfilePassword() {
  const methods = useForm<ProfilePasswordForm>({
    mode: "onSubmit",
    resolver: zodResolver(profilePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    const user = auth.currentUser;

    try {
      if (user?.email) {
        const credential = EmailAuthProvider.credential(
          user.email,
          data.currentPassword
        );
        await reauthenticateWithCredential(user, credential);
        updatePassword(user, data.newPassword);
      }
      toast("Пароль успішно змінено!");
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log(error.code);
        if (error.code === "auth/invalid-credential") {
          toast("Невірний пароль!", "error");
        }
      } else {
        console.log(error);
        toast("Помилка", "error");
      }
    }
  });

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <div className="max-w-xl   flex flex-col gap-y-5 mt-6">
        <RHFInput
          name="currentPassword"
          placeholder="Поточний пароль"
          type="password"
        />
        <RHFInput
          name="newPassword"
          placeholder="Новий пароль"
          type="password"
        />
        <RHFInput
          name="confirmPassword"
          placeholder="Повторіть пароль"
          type="password"
        />

        <div className="max-w-2xs">
          <Button
            text="Зберегти"
            type="submit"
            variant="primary"
            className="!py-4"
            loading={isSubmitting}
          />
        </div>
      </div>
    </Form>
  );
}

import { schemaHelper } from "@/utils/schemaHelper";
import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().trim(),
  surname: z.string().trim(),
  login: z.string().min(3, "Логін мінімум 3 символи"),
  email: z.email({ message: "Електронна адреса має бути дійсною!" }).trim(),
  phone: z
    .string()
    .regex(
      /^\+380 \(\d{2}\) \d{3}-\d{2}-\d{2}$/,
      "Номер має бути у форматі +380 (XX) XXX-XX-XX"
    ),
  avatar: z.union([z.instanceof(File), z.string(), z.null()]),
});

export type ProfileFormData = z.infer<typeof profileSchema>;

export const profilePasswordSchema = z
  .object({
    currentPassword: schemaHelper.password(),
    newPassword: schemaHelper.password(),
    confirmPassword: schemaHelper.password(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Пароли не співпадають",
    path: ["confirmPassword"],
  });

export type ProfilePasswordForm = z.infer<typeof profilePasswordSchema>;

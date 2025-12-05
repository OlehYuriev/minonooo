import { schemaHelper } from "@/utils/schemaHelper";
import z from "zod";

export const loginSchema = z.object({
  password: schemaHelper.password(),
  email: z.email({ message: "Електронна адреса має бути дійсною!" }).trim(),
});
export type LoginFormData = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  password: schemaHelper.password(),
  login: z.string().min(3, "Логін мінімум 3 символи"),
  email: z.email({ message: "Електронна адреса має бути дійсною!" }).trim(),
});
export type RegisterFormData = z.infer<typeof registerSchema>;

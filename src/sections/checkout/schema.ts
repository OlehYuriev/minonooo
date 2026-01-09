import { z } from "zod";

export const checkoutSchema = z
  .object({
    deliveryType: z.enum(["pickup", "post"], {
      message: "Виберіть спосіб доставки",
    }),
    city: z
      .object({
        label: z.string(),
        value: z.string(),
      })
      .nullable(),

    paymentType: z.enum(["card", "cash"], {
      message: "Виберіть спосіб оплати",
    }),
    name: z.string().trim().min(2, "ім'я обов'язкове!"),
    surname: z.string().trim().min(2, "Прізвище обов'язкове!"),
    email: z.email({ message: "Електронна адреса має бути дійсною!" }).trim(),
    phone: z
      .string()
      .regex(
        /^\+380 \(\d{2}\) \d{3}-\d{2}-\d{2}$/,
        "Номер має бути у форматі +380 (XX) XXX-XX-XX"
      ),
  })
  .refine((data) => data.deliveryType === "post" || data.city, {
    message: "Виберіть місто доставки",
    path: ["city"],
  });

export type checkoutSchemaType = z.infer<typeof checkoutSchema>;

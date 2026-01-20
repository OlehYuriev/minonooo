import { z } from "zod";

export const checkoutSchema = z
  .object({
    deliveryType: z.enum(
      ["pickup", "post", "Самовивіз", "Достаавка Новою Поштою"],
      {
        message: "Виберіть спосіб доставки",
      }
    ),
    city: z
      .object({
        label: z.string(),
        value: z.string(),
      })
      .nullable(),
    department: z
      .object({
        label: z.string(),
        value: z.string(),
        schedule: z.array(
          z.object({
            days: z.string(),
            time: z.string(),
          })
        ),
      })
      .nullable(),

    paymentType: z.enum(["card", "cash", "Карта", "Готівка"], {
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
  .refine((data) => !(data.deliveryType === "post" && data.city === null), {
    message: "Виберіть місто доставки",
    path: ["city"],
  })
  .refine(
    (data) => !(data.deliveryType === "post" && data.department === null),
    {
      message: "Виберіть відділення",
      path: ["department"],
    }
  );

export type checkoutSchemaType = z.infer<typeof checkoutSchema>;

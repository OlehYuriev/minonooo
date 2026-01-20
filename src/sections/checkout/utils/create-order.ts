import { CartItem } from "@/type/product";
import { checkoutSchemaType } from "../schema";

type CheckoutFormData = Omit<checkoutSchemaType, "city" | "department"> &
  Partial<Pick<checkoutSchemaType, "city" | "department">>;

export function formatOrderData(data: checkoutSchemaType): CheckoutFormData {
  const formData: CheckoutFormData = {
    name: data.name,
    surname: data.surname,
    email: data.email,
    phone: data.phone,
    paymentType: data.paymentType === "card" ? "Карта" : "Готівка",
    deliveryType:
      data.deliveryType === "pickup" ? "Самовивіз" : "Достаавка Новою Поштою",
    ...(data.deliveryType === "post" && {
      city: data.city,
      department: data.department,
    }),
  };
  return formData;
}

/* -------------------------------------------------- */
type TOrder = {
  discountPrice: string;
  formData: CheckoutFormData;
  itemsForServer: Omit<CartItem, "variants">[];
  uid: string | undefined;
  paymentType: string;
};

export async function createOrder({
  discountPrice,
  uid,
  paymentType,
  formData,
  itemsForServer,
}: TOrder): Promise<string> {
  const res = await fetch("/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      amount: Number(discountPrice),
      userId: uid || "anon",
      status: paymentType === "card" ? "pending" : "paid",
      contacts: formData,
      items: itemsForServer,
    }),
  });

  const { orderId } = await res.json();
  return orderId;
}

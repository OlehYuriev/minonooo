"use client";
import { Button } from "@/components/ui/buttons";
import { Form } from "@/components/ui/form";
import { RHFInput, RHFPhoneInput } from "@/components/ui/input";
import { RHFRadioGroup } from "@/components/ui/input/RHFRadioGroup";
import { checkoutSchema, checkoutSchemaType } from "@/sections/checkout/schema";

import { fetchUserProfile } from "@/services/user";
import { clearCart, useCart } from "@/store/use-basket-store";
import { CartItem } from "@/type/product";
import { pay } from "@/utils/liqpay.ts";
import { toast } from "@/utils/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "firebase/auth";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import { DeliverySection } from "./delivery-section";
import { createOrder, formatOrderData } from "./utils/create-order";

type Props = {
  user: User | null;
  discountPrice: string;
  loading: boolean;
  setLoadingProfile: Dispatch<SetStateAction<boolean>>;
};
export default function CheckoutForm({
  user,
  discountPrice,
  loading,
  setLoadingProfile,
}: Props) {
  const cart = useCart();

  const methods = useForm<checkoutSchemaType>({
    mode: "onSubmit",
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      deliveryType: "pickup",
      city: null,
      department: null,
      paymentType: "cash",
    },
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    const loadProfile = async () => {
      if (!user && !loading) {
        setLoadingProfile(false);
        return;
      }

      if (user && !loading) {
        const profileData = await fetchUserProfile(user.uid);

        reset({
          name: profileData?.name || "",
          surname: profileData?.surname || "",
          email: profileData?.email || user.email || "",
          phone: profileData?.phone || "",
        });

        setLoadingProfile(false);
      }
    };

    loadProfile();
  }, [user, reset, loading, setLoadingProfile]);

  const onSubmit = handleSubmit(async (data) => {
    const formData = formatOrderData(data);

    const itemsForServer: Omit<CartItem, "variants">[] = cart.map(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
      ({ variants, ...rest }) => rest
    );

    try {
      const orderId = await createOrder({
        discountPrice,
        uid: user?.uid,
        paymentType: data.paymentType,
        formData,
        itemsForServer,
      });
      if (data.paymentType === "card") {
        await pay(Number(discountPrice), orderId);
      } else {
        toast("Заказ оформлено!");
        clearCart();
      }
    } catch (error) {
      console.error(error);
      toast("Помилка", "error");
    }
  });

  return (
    <>
      <Form methods={methods} onSubmit={onSubmit}>
        <h3 className=" text-lg mb-9">Спосіб доставки</h3>
        <DeliverySection />
        <h3 className="my-9 text-lg">Спосіб оплати</h3>
        <RHFRadioGroup
          name="paymentType"
          options={[
            { value: "card", label: "Картка" },
            { value: "cash", label: "Готівка при полученні" },
          ]}
        />

        <div className="flex flex-col gap-y-5 mt-6">
          <RHFInput name="name" placeholder="Ім'я" />
          <RHFInput name="surname" placeholder="Прізвище" />
          <RHFPhoneInput name="phone" />
          <RHFInput name="email" placeholder="Email" />

          <div className="max-w-2xs">
            <Button
              text="Оформити замовлення"
              type="submit"
              variant="secondary"
              className="!py-4"
              disabled={cart.length === 0}
              loading={isSubmitting}
            />
          </div>
        </div>
      </Form>
    </>
  );
}

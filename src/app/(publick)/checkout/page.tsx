"use client";
import { useAuth } from "@/auth/hooks/use-auth";
import { Button } from "@/components/ui/buttons";
import { Form } from "@/components/ui/form";
import { RHFInput, RHFPhoneInput } from "@/components/ui/input";
import { RHFAutocomplete } from "@/components/ui/input/RHFAutocomplete";
import { RHFRadioGroup } from "@/components/ui/input/RHFRadioGroup";
import { Loader } from "@/components/ui/loader";
import { PageContainer } from "@/layout/page-container";
import { checkoutSchema, checkoutSchemaType } from "@/sections/checkout/schema";

import { fetchUserProfile } from "@/services/user";
import { toast } from "@/utils/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function CheckoutPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

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
      paymentType: "cash",
    },
  });

  const {
    reset,
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting },
  } = methods;
  const deliveryType = watch("deliveryType");
  const city = watch("city");
  const [cityOptions, setCityOptions] = useState<
    { value: string; label: string }[]
  >([]);
  useEffect(() => {
    async function getNovaPoshta() {
      const data = {
        apiKey: "b150f3a9d495cb47a3879d15b8ba1d10",
        modelName: "AddressGeneral",
        calledMethod: "searchSettlements",
        methodProperties: {
          CityName: city?.label, // текст для поиска
          Limit: "20", // максимальное количество результатов
          Page: "1", // страница
        },
      };

      try {
        const response = await fetch("https://api.novaposhta.ua/v2.0/json/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log(result);
        const cityOptions = result.data[0].Addresses.map((item: any) => ({
          value: item.Ref, // уникальний код міста
          label: item.Present, // назва міста
        }));
        console.log(cityOptions);
        setCityOptions(cityOptions);

        return result.data;

        // массив городов/населённых пунктов
      } catch (error) {
        console.error(error);
        return [];
      }
    }
    getNovaPoshta();
    console.log(city);
  }, [city]);
  useEffect(() => {
    if (!user) return;

    const loadProfile = async () => {
      const profileData = await fetchUserProfile(user.uid);

      reset({
        name: profileData?.name || "",
        surname: profileData?.surname || "",
        email: profileData?.email || user?.email || "",
        phone: profileData?.phone || "",
      });
      setLoading(false);
    };

    loadProfile();
  }, [user, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      toast("Профіль успішно оновлено!");
    } catch (error) {
      console.error(error);
      toast("Помилка", "error");
    }
  });

  return (
    <>
      {loading && <Loader />}
      <PageContainer>
        <h1 className="text-3xl font-medium mt-17">Оформлення замовлення</h1>

        <Form methods={methods} onSubmit={onSubmit}>
          <h3 className="my-9 text-lg">Спосіб доставки</h3>
          <RHFRadioGroup
            name="deliveryType"
            options={[
              { value: "pickup", label: "Самовивіз" },
              { value: "post", label: "Доставка поштою" },
            ]}
          />

          <h3 className="my-9 text-lg">Спосіб оплати</h3>
          <RHFRadioGroup
            name="paymentType"
            options={[
              { value: "card", label: "Картка" },
              { value: "cash", label: "Готівка при полученні" },
            ]}
          />

          <div className="max-w-xl  flex flex-col gap-y-5 mt-6">
            {deliveryType === "post" && (
              <RHFAutocomplete
                name="city"
                options={cityOptions}
                placeholder="Місто"
              />
            )}

            <RHFInput name="name" placeholder="Ім'я" />
            <RHFInput name="surname" placeholder="Прізвище" />
            <RHFPhoneInput name="phone" />
            <RHFInput name="email" placeholder="Email" />

            <div className="max-w-2xs">
              <Button
                text="Оформити замовлення"
                type="submit"
                variant="primary"
                className="!py-4"
                loading={isSubmitting}
              />
            </div>
          </div>
        </Form>
      </PageContainer>
    </>
  );
}

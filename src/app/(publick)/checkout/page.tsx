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
import { fetchNp, fetchNpCities } from "@/sections/checkout/utils";

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
      department: null,
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
  const cities = watch("city");
  const department = watch("department");

  useEffect(() => {
    if (deliveryType === "pickup") {
      setValue("city", null);
    }
    if (cities === null) {
      setValue("department", null);
    }
  }, [cities, deliveryType, setValue]);

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
      console.log(data);
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
                fetchOptions={fetchNpCities}
                placeholder="Місто"
              />
            )}
            {deliveryType === "post" && cities?.value && (
              <div>
                <RHFAutocomplete
                  name="department"
                  fetchOptions={fetchNp}
                  placeholder="Відділення"
                  extraParams={{ CityRef: cities?.value }}
                />
                <div className="mt-2 flex flex-col gap-1">
                  {department?.schedule.length &&
                    department?.schedule.map(({ days, time }, index) => (
                      <span key={time + index} className=" text-xs">
                        {days}: <strong>{time}</strong>
                      </span>
                    ))}
                </div>
              </div>
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

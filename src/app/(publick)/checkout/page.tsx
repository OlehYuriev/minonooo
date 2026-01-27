"use client";
import { useAuth } from "@/auth/hooks/use-auth";
import { Loader } from "@/components/ui/loader";
import { PageContainer } from "@/layout/page-container";
import { CheckoutDetails } from "@/sections/checkout/checkout-details";
import CheckoutForm from "@/sections/checkout/checkout-form";

import { useTotalPrice } from "@/store/use-basket-store";
import { useState } from "react";

export default function CheckoutPage() {
  const totalPrice = useTotalPrice();
  const { user, loading } = useAuth();
  const [loadingProfile, setLoadingProfile] = useState(true);
  const discountPrice =
    totalPrice >= 2000 ? (totalPrice * 0.9).toFixed(2) : totalPrice.toFixed(2);

  return (
    <>
      {loadingProfile && <Loader />}
      <PageContainer>
        <h1 className="text-3xl font-medium mt-17">Оформлення замовлення</h1>
        <div className="flex sm:flex-row flex-col gap-5 my-9">
          <div className="basis-1/2 flex items-center flex-col gap-4 sm:order-2">
            <CheckoutDetails
              totalPrice={totalPrice}
              discountPrice={discountPrice}
            />
          </div>
          <div className="basis-1/2 sm:order-1">
            <CheckoutForm
              discountPrice={discountPrice}
              user={user}
              loading={loading}
              setLoadingProfile={setLoadingProfile}
            />
          </div>
        </div>
      </PageContainer>
    </>
  );
}

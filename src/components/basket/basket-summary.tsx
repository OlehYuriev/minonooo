import { ROUTES } from "@/constants/routes";
import { getTotalPriceProducts } from "@/store/use-basket-store";
import Link from "next/link";
import { Button } from "../ui/buttons";

export const BasketSummary = function BasketSummary() {
  const totalPrice = getTotalPriceProducts();
  return (
    <div>
      <span className="text-lg">
        Вартість товару(ів): <strong> {totalPrice.toFixed(2)} грн</strong>
      </span>
      <Link href={ROUTES.CHECKOUT}>
        <Button
          text="Оформити замовлення"
          className="mt-5"
          variant="secondary"
        />
      </Link>
    </div>
  );
};

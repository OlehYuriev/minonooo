import { getTotalPriceProducts } from "@/store/use-basket-store";
import { Button } from "../ui/buttons";

export const BasketSummary = function BasketSummary() {
  const totalPrice = getTotalPriceProducts();
  return (
    <div>
      <span className="text-lg">
        Вартість товару(ів): <strong> {totalPrice.toFixed(2)} грн</strong>
      </span>
      <Button text="Оформити замовлення" className="mt-5" variant="secondary" />
    </div>
  );
};

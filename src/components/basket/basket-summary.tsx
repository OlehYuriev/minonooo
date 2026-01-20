import { ROUTES } from "@/constants/routes";
import { useCart, useTotalPrice } from "@/store/use-basket-store";
import { useRouter } from "next/navigation";
import { Button } from "../ui/buttons";
type Props = {
  close: () => void;
};
export const BasketSummary = function BasketSummary({ close }: Props) {
  const totalPrice = useTotalPrice();
  const cart = useCart();
  const router = useRouter();
  const handleCheckout = () => {
    close();
    router.push(ROUTES.CHECKOUT);
  };
  return (
    <div>
      <span className="text-lg">
        Вартість товару(ів): <strong> {totalPrice.toFixed(2)} грн</strong>
      </span>

      <Button
        text="Оформити замовлення"
        onClick={handleCheckout}
        className="mt-5"
        variant="secondary"
        disabled={!cart.length}
      />
    </div>
  );
};

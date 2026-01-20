import { InfoBox } from "@/components/ui/info-box";

type Props = {
  totalPrice: number;
  discountPrice: string;
};

export function CheckoutDetails({ totalPrice, discountPrice }: Props) {
  return (
    <>
      <div className="flex justify-between max-w-lg w-full">
        <span>Загальна вартість</span>
        <span>{totalPrice.toFixed(2)} грн</span>
      </div>
      <div className="flex justify-between max-w-lg w-full">
        <span>Знижка</span>
        <span>{totalPrice >= 1000 ? "10" : "0"}%</span>
      </div>
      <div className="flex justify-between max-w-lg w-full border-y py-7 font-bold">
        <span>Разом</span>
        <span>{discountPrice} грн</span>
      </div>

      <InfoBox text="Знижка 10% нараховується якщо вартість товару 2000 грн або більше" />
      <InfoBox text="Увага! Це тестовий платіж. Реальне списання коштів не відбувається." />
    </>
  );
}

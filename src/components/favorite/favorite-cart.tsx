"use client";
import {
  addQuantityProduct,
  decreaseQuantityProduct,
  removeFromCartProduct,
} from "@/store/use-basket-store";

import { CartItem } from "@/type/product";
import Image from "next/image";
import { memo, useCallback } from "react";
type Props = {
  item: CartItem;
};
export const FavoriteCart = memo(function FavoriteCart({ item }: Props) {
  const handleIncreaseQuantity = useCallback(() => {
    addQuantityProduct(item.id, item.selectedSize);
  }, [item.id, item.selectedSize]);

  const handleDecreaseQuantity = useCallback(() => {
    if (item.quantity > 1) {
      decreaseQuantityProduct(item.id, item.selectedSize);
    }
  }, [item.id, item.quantity, item.selectedSize]);

  const handleRemoveFromCart = useCallback(() => {
    console.log(item.id, item.selectedSize);
    removeFromCartProduct(item.id, item.selectedSize);
  }, [item.id, item.selectedSize]);
  return (
    <div className=" flex gap-x-5 " key={item.id}>
      <div>
        <Image
          src={item.image}
          alt={item.description}
          width={140}
          height={205}
          className="object-cover w-36 h-52"
        />
      </div>
      <div className="max-w-3xs flex flex-col justify-between">
        <h4 className="leading-[114%]">{item.name}</h4>
        <p className="font-medium">{item.totalPrice} грн</p>
        <div className="flex items-center  gap-x-1 ">
          <p>Розмір:</p>
          <strong> {item?.selectedSize}</strong>
        </div>
        <div className="flex items-center justify-between gap-x-5 ">
          <p>Кількість</p>
          <div className="flex gap-x-2 items-center">
            <button
              type="button"
              onClick={handleDecreaseQuantity}
              className="font-medium text-3xl  h-8 w-8 rounded
						 bg-[var(--backgroundGrey)] active:scale-95 relative"
            >
              <span className="-translate-2/4 absolute top-2/4 left-2/4">
                -
              </span>
            </button>
            <span className="font-medium">{item.quantity}</span>
            <button
              type="button"
              onClick={handleIncreaseQuantity}
              className="font-medium text-3xl  h-8 w-8 rounded
						 bg-[var(--backgroundGrey)] active:scale-95 relative"
            >
              <span className="-translate-2/4 absolute top-2/4 left-2/4">
                +
              </span>
            </button>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="flex items-center justify-between gap-x-2 "
            onClick={handleRemoveFromCart}
          >
            <Image
              src="/delete.svg"
              alt="Видалити"
              width={16}
              height={16}
              className="object-cover"
            />
            <span className="underline text-[#6f6f6f] text-sm">Видалити</span>
          </button>
        </div>
      </div>
    </div>
  );
});

"use client";
import { ROUTES } from "@/constants/routes";
import { useCartItem } from "@/store/use-basket-store";

import { IProduct } from "@/type/product";
import Image from "next/image";
import Link from "next/link";
import { memo, useState } from "react";
import { FavoriteToggle } from "../favorites-toggle";
import { BasketIcon } from "../icons";
import { IconToggleButton } from "../ui/buttons";
import { ModalCard } from "./modal-card";

interface CardProps {
  product: IProduct;
}
export const Card = memo(function Card({ product }: CardProps) {
  const itemInCart = useCartItem(product.id);

  const basket = !!itemInCart;
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  return (
    <>
      <ModalCard open={open} setOpen={setOpen} product={product} />
      <div className="w-full h-full flex flex-col relative">
        <div className="absolute top-3 right-3 flex items-center space-x-2 z-2">
          <FavoriteToggle product={product} />
          <IconToggleButton
            title="Кошик"
            active={basket}
            onClick={handleOpenModal}
          >
            <BasketIcon className="w-5" fill={basket ? "white" : "#2D2D2D"} />
          </IconToggleButton>
        </div>

        <div className="relative flex-1 w-full">
          <Link href={ROUTES.PRODUCT(product.id)}>
            <Image
              src={product.image}
              alt={product.description}
              fill
              sizes="100%"
              className="object-cover"
              priority
            />
          </Link>
        </div>

        <div className="flex flex-col mt-5">
          <h2>{product.name}</h2>
          <p>{product.price} грн.</p>
          <div className="flex gap-x-1.5 mt-1">
            {product.variants.map((variant, index) => (
              <span
                key={variant.colorName + index}
                className={`w-[1.2rem] h-[1.2rem] rounded-4xl border border-neutral-300`}
                style={{ backgroundColor: variant.colorCode }}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
});

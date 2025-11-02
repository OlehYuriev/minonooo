import { addToCartProduct } from "@/store/use-basket-store";
import { IProduct } from "@/type/product";
import { Dispatch, SetStateAction, useCallback, useState } from "react";

import { Button, ColorButton } from "../ui/buttons";
import { OverlayPanel } from "../ui/overlay-panel";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  product: IProduct;
};

export function ModalCard({ open, setOpen, product }: Props) {
  const [sizeProduct, setSizeProduct] = useState<string>("");
  const [colorProduct, setColorProduct] = useState({
    colorName: product?.variants[0]?.colorName,
    colorCode: product?.variants[0]?.colorCode,
  });
  const hendleSize = (size: string) => {
    setSizeProduct(size);
  };
  const hendleColor = useCallback((color: string, colorCode: string) => {
    setColorProduct({ colorName: color, colorCode: colorCode });
    setSizeProduct("");
  }, []);

  const handleAdd = () => {
    if (!sizeProduct || !colorProduct) return;
    addToCartProduct({
      ...product,
      quantity: 1,
      totalPrice: product.price,
      selectedSize: sizeProduct,
      selectedColor: colorProduct.colorName,
      colorCode: colorProduct.colorCode,
    });
    setOpen(false);
    setColorProduct({
      colorName: product?.variants[0]?.colorName,
      colorCode: product?.variants[0]?.colorCode,
    });
    setSizeProduct("");
  };
  return (
    <OverlayPanel open={open} setOpen={setOpen} type="modal">
      <div>
        <h3 className="text-2xl mb-3">Оберіть розмір і колір:</h3>

        <div className="flex flex-col gap-y-5">
          <p>Колір: {colorProduct.colorName}</p>
          <div className="flex  gap-x-2">
            {product?.variants?.map((variant) => (
              <ColorButton
                key={variant.colorName}
                variant={variant}
                hendleColor={hendleColor}
                colorName={colorProduct.colorName}
              />
            ))}
          </div>
          <div className="flex flex-col gap-y-2 min-h-[7.875rem]">
            {product?.variants?.map((variant) => {
              if (variant.colorName === colorProduct.colorName) {
                return variant?.sizes?.map((size) => (
                  <button
                    type="button"
                    key={size}
                    onClick={() => hendleSize(size)}
                    className={`border-1 rounded-2xl w-full hover:bg-[var(--foreground)]
										 hover:text-white transition-all ${
                       sizeProduct === size
                         ? "bg-[var(--foreground)] text-white"
                         : ""
                     }`}
                  >
                    {size}
                  </button>
                ));
              }
            })}
          </div>
          <Button
            text="Додати в кошик"
            className="!py-2 "
            variant="secondary"
            onClick={handleAdd}
          />
        </div>
      </div>
    </OverlayPanel>
  );
}

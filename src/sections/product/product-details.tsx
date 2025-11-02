"use client";
import { FavoriteToggle } from "@/components/favorites-toggle";
import { Button, ColorButton } from "@/components/ui/buttons";
import { Select } from "@/components/ui/select";
import { addToCartProduct } from "@/store/use-basket-store";
import { IProduct, TColorProduct } from "@/type/product";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
type Props = {
  product: IProduct | undefined;
  colorProduct: TColorProduct;
  setColorProduct: Dispatch<SetStateAction<TColorProduct>>;
};
export function ProductDetails({
  product,
  colorProduct,
  setColorProduct,
}: Props) {
  const hendleColor = useCallback(
    (color: string, colorCode: string) => {
      setColorProduct({ colorName: color, colorCode: colorCode });
    },
    [setColorProduct]
  );

  const options = useMemo(() => {
    return (
      product?.variants?.find(
        (variant) => variant.colorName === colorProduct.colorName
      )?.sizes ?? []
    );
  }, [product?.variants, colorProduct.colorName]);

  const [selectedSize, setSelectedSize] = useState(options[0]);

  useEffect(() => {
    setSelectedSize(options[0]);
  }, [options]);

  const handleAdd = () => {
    if (!selectedSize || !colorProduct || !product?.price) return;
    addToCartProduct({
      ...product,
      quantity: 1,
      totalPrice: product?.price,
      selectedSize: selectedSize,
      selectedColor: colorProduct.colorName,
      colorCode: colorProduct.colorCode,
    });
  };

  return (
    <div className="w-full flex flex-col gap-y-2">
      <h1 className="font-medium text-2xl">{product?.name}</h1>
      <p className="font-medium text-lg">
        Ціна: <strong>{product?.price}</strong> грн
      </p>
      <p className=" text-justify ">{product?.description}</p>
      <div className="mb-2">
        <p>
          Колір: <strong>{colorProduct.colorName}</strong>{" "}
        </p>
        <div className="flex m-1  gap-x-2">
          {product?.variants?.map((variant) => (
            <ColorButton
              key={variant.colorName}
              variant={variant}
              hendleColor={hendleColor}
              colorName={colorProduct.colorName}
            />
          ))}
        </div>
      </div>

      <Select
        options={options}
        value={selectedSize}
        setValue={setSelectedSize}
      />
      <div className="flex items-center gap-x-2 mt-2">
        <Button
          text="Додати в кошик"
          className="!py-2 "
          variant="secondary"
          onClick={handleAdd}
        />
        <div>
          <FavoriteToggle product={product} />
        </div>
      </div>
    </div>
  );
}

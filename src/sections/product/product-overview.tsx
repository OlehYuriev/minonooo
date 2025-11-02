"use client";

import { IProduct, TColorProduct } from "@/type/product";
import { useState } from "react";
import { ProductDetails } from "./product-details";
import ProductSlider from "./product-slider";
type Props = {
  product: IProduct | undefined;
};
export function ProductOverview({ product }: Props) {
  const [colorProduct, setColorProduct] = useState<TColorProduct>({
    colorName: product?.variants[0]?.colorName || "",
    colorCode: product?.variants[0]?.colorCode || "",
  });

  return (
    <div className="flex mt-25 gap-x-18  gap-y-10  md:flex-row flex-col">
      <div className="md:w-[55%]">
        <ProductSlider product={product} colorProduct={colorProduct} />
      </div>
      <ProductDetails
        product={product}
        colorProduct={colorProduct}
        setColorProduct={setColorProduct}
      />
    </div>
  );
}

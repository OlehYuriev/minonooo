"use client";
import { useProductStore } from "@/store/product-store";
import { IProduct } from "@/type/product";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
  initialProducts: IProduct[];
};
export function ProductProvider({ children, initialProducts }: Props) {
  const { products, setProducts } = useProductStore();

  useEffect(() => {
    if (products.length === 0) {
      setProducts(initialProducts);
    }
  }, [initialProducts, products, setProducts]);

  return <>{children}</>;
}

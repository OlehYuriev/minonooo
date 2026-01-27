"use client";
import { Loader } from "@/components/ui/loader";
import { useClearCart } from "@/hooks/use-clear-cart";
import CatalogContent from "@/sections/catalog/catalog-content";
import { useProductStore } from "@/store/product-store";

export default function CatalogPage() {
  const { products } = useProductStore();
  useClearCart();
  if (products.length === 0) return <Loader />;
  return <CatalogContent products={products} />;
}

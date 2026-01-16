"use client";
import { ProductSwiper } from "@/sections/home/product-swiper";
import { useProductStore } from "@/store/product-store";

export function ProductSlider() {
  const { products } = useProductStore();
  //   const randomProducts = await getRandomProductsAction(4);
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  const randomProducts = shuffled.slice(0, 4);

  return <ProductSwiper randomProducts={randomProducts} />;
}

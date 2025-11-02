import { ProductSwiper } from "@/sections/home/product-swiper";
import { getRandomProductsAction } from "@/server-action/get-random-products";

export async function ProductSlider() {
  const randomProducts = await getRandomProductsAction(4);

  return <ProductSwiper randomProducts={randomProducts} />;
}

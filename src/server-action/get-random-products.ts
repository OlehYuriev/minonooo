"use server";

import { getProductsServer } from "@/services/products";
import { IProduct } from "@/type/product";

export async function getRandomProductsAction(
  count: number
): Promise<IProduct[]> {
  const products = await getProductsServer();
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

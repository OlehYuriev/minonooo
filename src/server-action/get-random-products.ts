"use server";

import { products } from "@/data/product";
import { IProduct } from "@/type/product";

export async function getRandomProductsAction(
  count: number
): Promise<IProduct[]> {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

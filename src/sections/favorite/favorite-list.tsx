"use client";
import { Card } from "@/components/card";
import { useFavoriteCart } from "@/store/use-favorite-store";

export function FavoriteList() {
  const favoriteCarts = useFavoriteCart();
  return (
    <div className="grid gap-4 min-[380px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {favoriteCarts.map((product) => (
        <div key={product.id} className="aspect-[4/6] ">
          <Card product={product} />
        </div>
      ))}
    </div>
  );
}

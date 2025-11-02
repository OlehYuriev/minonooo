"use client";
import { FavoriteList } from "@/sections/favorite";
import { removeAllFromFavoriteCart } from "@/store/use-favorite-store";

export default function WishlistPage() {
  function removeAllDavoriteCards() {
    removeAllFromFavoriteCart();
  }
  return (
    <>
      <section className="max-w-screen mx-auto px-5 margin-top-minus-header">
        <div className="flex items-center justify-between pt-5">
          <h1 className=" text-3xl font-medium">Список бажань</h1>
          <button
            type="button"
            className="text-lg hover:opacity-50 transition-all duration-500 ease-in-out"
            onClick={removeAllDavoriteCards}
          >
            Видалити усі
          </button>
        </div>
        <div className="mt-5">
          <FavoriteList />
        </div>
      </section>
    </>
  );
}

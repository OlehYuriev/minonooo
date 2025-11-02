import { IProduct } from "@/type/product";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  favoriteCart: IProduct[];
};
type Action = {
  addToFavoriteCart: (product: IProduct) => void;
  removeFromFavoriteCart: (id: number) => void;
  removeAllFromFavoriteCart: () => void;
};

const initialState: State = {
  favoriteCart: [],
};

const useFavoriteStore = create<State & Action>()(
  persist<State & Action>(
    (set, get) => ({
      ...initialState,
      addToFavoriteCart: (product: IProduct) => {
        const cart = get().favoriteCart;

        const itemInCart = cart.find((item) => item.id === product.id);
        if (!itemInCart) {
          set({
            favoriteCart: [
              ...cart,
              {
                ...product,
              },
            ],
          });
        } else {
          get().removeFromFavoriteCart(product.id);
        }
      },

      removeFromFavoriteCart(id: number) {
        const cart = get().favoriteCart;

        const updatedCart = cart.filter((item) => !(item.id === id));
        set({ favoriteCart: updatedCart });
      },
      removeAllFromFavoriteCart() {
        set({ favoriteCart: [] });
      },
    }),

    {
      name: "favoriteCarts",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useFavoriteCart = () =>
  useFavoriteStore((state) => state.favoriteCart);

export const useFavoriteCartItem = (productId: number) =>
  useFavoriteStore((state) =>
    state.favoriteCart.find((item) => item.id === productId)
  );

export const addToFavoriteCart = (product: IProduct) =>
  useFavoriteStore.getState().addToFavoriteCart(product);
export const removeAllFromFavoriteCart = () =>
  useFavoriteStore.getState().removeAllFromFavoriteCart();

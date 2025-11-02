import { CartItem } from "@/type/product";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  cart: CartItem[];
};
type Action = {
  addToCart: (product: CartItem) => void;
  addQuantity: (id: number, size: string, color: string) => void;
  decreaseQuantity: (id: number, size: string, color: string) => void;
  removeFromCart: (id: number, size: string, color: string) => void;
  getTotalPrice: () => number;
};

const initialState: State = {
  cart: [],
};

const useBasketStore = create<State & Action>()(
  persist<State & Action>(
    (set, get) => ({
      ...initialState,
      addToCart: (product: CartItem) => {
        const cart = get().cart;
        const itemInCart = cart.find(
          (item) =>
            item.id === product.id &&
            item.selectedSize === product.selectedSize &&
            item.selectedColor === product.selectedColor
        );
        if (itemInCart) {
          const updatedCart = cart.map((item) => {
            if (
              item.id === product.id &&
              item.selectedSize === product.selectedSize
            ) {
              const newQuantity = item.quantity + 1;
              return {
                ...item,
                quantity: newQuantity,
                totalPrice: newQuantity * item.price,
              };
            }
            return item;
          });
          set({ cart: updatedCart });
        } else {
          set({
            cart: [
              ...cart,
              {
                ...product,
                quantity: 1,
                totalPrice: product.quantity * product.price,
              },
            ],
          });
        }
      },
      addQuantity: (id: number, size: string, color: string) => {
        const cart = get().cart;

        const updatedCart = cart.map((item) =>
          item.id === id &&
          item.selectedSize === size &&
          item.selectedColor === color
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * item.price,
              }
            : item
        );

        set({ cart: updatedCart });
      },
      decreaseQuantity(id: number, size: string, color: string) {
        const cart = get().cart;
        const updatedCart = cart.map((item) =>
          item.id === id &&
          item.selectedSize === size &&
          item.selectedColor === color
            ? {
                ...item,
                quantity: item.quantity - 1,
                totalPrice: (item.quantity - 1) * item.price,
              }
            : item
        );
        set({ cart: updatedCart });
      },
      removeFromCart(id: number, size: string, color: string) {
        const cart = get().cart;

        const updatedCart = cart.filter(
          (item) =>
            !(
              item.id === id &&
              item.selectedSize === size &&
              item.selectedColor === color
            )
        );
        set({ cart: updatedCart });
      },
      getTotalPrice: () => {
        const cart = get().cart;
        return cart.reduce((acc, item) => acc + item.totalPrice, 0);
      },
    }),

    {
      name: "basket",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useCart = () => useBasketStore((state) => state.cart);

export const useCartItem = (productId: number) =>
  useBasketStore((state) => state.cart.find((item) => item.id === productId));

export const addToCartProduct = (product: CartItem) =>
  useBasketStore.getState().addToCart(product);
export const addQuantityProduct = (id: number, size: string, color: string) =>
  useBasketStore.getState().addQuantity(id, size, color);

export const decreaseQuantityProduct = (
  id: number,
  size: string,
  color: string
) => useBasketStore.getState().decreaseQuantity(id, size, color);

export const removeFromCartProduct = (
  id: number,
  size: string,
  color: string
) => useBasketStore.getState().removeFromCart(id, size, color);

export const getTotalPriceProducts = () =>
  useBasketStore.getState().getTotalPrice();

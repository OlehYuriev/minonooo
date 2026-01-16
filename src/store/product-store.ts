import { IProduct } from "@/type/product";
import { create } from "zustand";

interface ProductStore {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));

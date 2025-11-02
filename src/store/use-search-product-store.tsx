import { create } from "zustand";

interface ProductStore {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useSearchProductStore = create<ProductStore>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
}));

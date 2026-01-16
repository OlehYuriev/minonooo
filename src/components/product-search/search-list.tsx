import { useFuseSearch } from "@/hooks/use-fuse-search";
import { useProductStore } from "@/store/product-store";
import { IProduct } from "@/type/product";
type Props = {
  open: boolean;
  closeList: () => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
};
export function SearchList({
  open,
  closeList,
  setSearchQuery,
  searchQuery,
}: Props) {
  const { products } = useProductStore();
  const filteredSearchProducts = useFuseSearch<IProduct>(
    products,
    ["name"],
    searchQuery
  );
  return (
    <ul className="absolute top-[108%] left-0 right-0 bg-gray-300 ">
      {open &&
        filteredSearchProducts &&
        filteredSearchProducts.map((product) => (
          <li key={product.id}>
            <button
              type="button"
              className="w-full p-1 text-sm hover:bg-gray-400 hover:text-white 
				  transition-all duration-100 ease-in-out text-left"
              onClick={() => {
                setSearchQuery(product.name);
                closeList();
              }}
            >
              {product.name}
            </button>
          </li>
        ))}
    </ul>
  );
}

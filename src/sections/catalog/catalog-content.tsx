"use client";
import { Button } from "@/components/ui/buttons";
import { useFuseSearch } from "@/hooks/use-fuse-search";
import { PageContainer } from "@/layout/page-container";
import { CatalogFilter, GridProducts, SortButton } from "@/sections/catalog";

import { useSearchProductStore } from "@/store/use-search-product-store";
import { IProduct } from "@/type/product";
import { useMemo, useState } from "react";

const PRODUCTS_PER_PAGE = 5;
export default function CatalogContent({ products }: { products: IProduct[] }) {
  const searchQuery = useSearchProductStore((state) => state.searchQuery);
  const [visibleProducts, setVisibleProducts] = useState<IProduct[]>(
    products.slice(0, PRODUCTS_PER_PAGE)
  );

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [openFilter, setOpenFilter] = useState(false);
  const [sizes, setSizes] = useState<string[]>([]);

  const filteredSearchProducts = useFuseSearch<IProduct>(
    products,
    ["name"],
    searchQuery,
    undefined,
    products
  );

  const filteredProducts = useMemo(() => {
    return filteredSearchProducts?.filter((product) => {
      if (sizes.length === 0) return true;
      const allSizes = product.variants.flatMap((variant) => variant.sizes);
      return allSizes.some((size) => sizes.includes(size));
    });
  }, [filteredSearchProducts, sizes]);

  const handleLoadMore = () => {
    setVisibleProducts((prev) => {
      const nextProducts =
        filteredProducts?.slice(prev.length, prev.length + PRODUCTS_PER_PAGE) ||
        [];
      return [...prev, ...nextProducts];
    });
  };

  const handleOpenFilter = () => {
    setOpenFilter((prev) => !prev);
  };

  return (
    <>
      <PageContainer>
        <div className="flex items-center justify-between pt-5">
          <h1 className=" text-3xl font-medium">Каталог</h1>
          <SortButton
            setSortOrder={setSortOrder}
            sortOrder={sortOrder}
            handleOpenFilter={handleOpenFilter}
          />
        </div>
        <div className="mt-5 grid gap-y-6 gap-x-1.5  sm:gap-x-14  sm:gap-y-20 grid-cols-2 sm:px-18 md:px-27">
          <GridProducts
            filteredProducts={visibleProducts ?? []}
            sortOrder={sortOrder}
          />
        </div>
        {filteredProducts &&
          filteredProducts.length > visibleProducts.length && (
            <div className="mx-auto mt-10 max-w-72">
              <Button
                text="Показати ще"
                className="border-1 border-[#cecece] mt-5"
                onClick={handleLoadMore}
              />
            </div>
          )}
      </PageContainer>
      <CatalogFilter
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
        handleOpenFilter={handleOpenFilter}
        sizes={sizes}
        setSizes={setSizes}
      />
    </>
  );
}

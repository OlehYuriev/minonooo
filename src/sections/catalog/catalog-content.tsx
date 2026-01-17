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
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [openFilter, setOpenFilter] = useState(false);
  const [sizes, setSizes] = useState<string[]>([]);

  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
  }, [products, sortOrder]);

  const filteredSearchProducts = useFuseSearch<IProduct>(
    sortedProducts,
    ["name"],
    searchQuery,
    undefined,
    sortedProducts
  );

  const filteredProducts = useMemo(() => {
    return filteredSearchProducts?.filter((product) => {
      if (sizes.length === 0) return true;
      const allSizes = product.variants.flatMap((variant) => variant.sizes);
      return allSizes.some((size) => sizes.includes(size));
    });
  }, [filteredSearchProducts, sizes]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PRODUCTS_PER_PAGE);
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
            filteredProducts={filteredProducts ?? []}
            visibleCount={visibleCount}
          />
        </div>
        {filteredProducts && filteredProducts.length > visibleCount && (
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

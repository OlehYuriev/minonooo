import { ProductSlider } from "@/components/product-slider";
import { products } from "@/data/product";
import { PageContainer } from "@/layout/page-container";

import { ProductOverview } from "@/sections/product";
import { use } from "react";

export default function ProductItem({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = products.find((item) => item.id === Number(id));

  return (
    <PageContainer>
      <ProductOverview product={product} />
      <div className="mt-20">
        <h2 className="text-2xl mb-7">Вам також може сподобатись</h2>
        <ProductSlider />
      </div>
    </PageContainer>
  );
}

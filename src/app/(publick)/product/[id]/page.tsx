import { ProductSlider } from "@/components/product-slider";
import { PageContainer } from "@/layout/page-container";

import { ProductOverview } from "@/sections/product";
import { getProductServer } from "@/services/products";

export default async function ProductItem({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductServer(id);
  if (!product) return <h1>Продукт не знайдено</h1>;
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

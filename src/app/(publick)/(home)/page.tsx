import { ProductSlider } from "@/components/product-slider";
import { HomeSlider } from "@/sections/home";

export default function Home() {
  console.log("LIQPAY KEY:", process.env.NEXT_PUBLIC_LIQPAY_PUBLICK_KEY);
  return (
    <>
      <HomeSlider />

      <div className="max-w-screen mx-auto px-5">
        <section className="mt-28">
          <h2 className="mb-7 text-2xl">New collection</h2>
          <ProductSlider />
        </section>
      </div>
    </>
  );
}

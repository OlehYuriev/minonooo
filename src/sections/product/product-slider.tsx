"use client";
import Image from "next/image";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
// Import Swiper styles
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
// import required modules
import { ButtonSlider } from "@/components/ui/buttons";
import { IProduct, TColorProduct } from "@/type/product";
import {
  EffectFade,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";

type Props = {
  product: IProduct | undefined;
  colorProduct: TColorProduct;
};
export default function ProductSlider({ product, colorProduct }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const handleSlideChange = (swiper: SwiperClass) => {
    setCurrentIndex(swiper.realIndex);
    console.log(swiper.realIndex);
  };
  const productSlider = product?.variants?.find(
    (variant) => variant.colorName === colorProduct.colorName
  )?.image;
  return (
    <>
      <div className="flex gap-x-2.5">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          direction="vertical"
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="sm:!block !hidden w-[70px] flex-shrink-0  h-[40vw] max-h-[590px]"
        >
          {productSlider &&
            productSlider.map((image, index) => (
              <SwiperSlide
                key={image + index}
                className={`cursor-pointer f-full h-[90px] ${
                  index === currentIndex ? "border-2 border-[#6f6f6f] " : ""
                }`}
              >
                <Image
                  src={image}
                  alt={product.name || "фото"}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="90px"
                />
              </SwiperSlide>
            ))}
        </Swiper>
        <Swiper
          spaceBetween={10}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              pagination: {
                clickable: true,
                dynamicBullets: true,
              },
            },
            640: {
              pagination: false,
            },
          }}
          thumbs={{ swiper: thumbsSwiper }}
          effect="fade"
          modules={[FreeMode, Navigation, Thumbs, Pagination, EffectFade]}
          onSlideChange={handleSlideChange}
          className="relative w-full h-[590px] md:h-[40vw] max-h-[590px]"
        >
          {productSlider &&
            productSlider.map((image, index) => (
              <SwiperSlide key={image + index}>
                <Image
                  src={image}
                  alt={product.name || "фото"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </SwiperSlide>
            ))}
          <ButtonSlider next={"custom-next"} prev={"custom-prev"} />
        </Swiper>
      </div>
    </>
  );
}

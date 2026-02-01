"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
// Import Swiper styles
import type { Swiper as SwiperType } from "swiper";
import "swiper/css/effect-fade";
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
  const mainSwiperRef = useRef<SwiperType | null>(null);
  const handleSlideChange = (swiper: SwiperClass) => {
    setCurrentIndex(swiper.realIndex);
  };
  const productSlider = product?.variants?.find(
    (variant) => variant.colorName === colorProduct.colorName,
  )?.image;

  useEffect(() => {
    setCurrentIndex(0);
    if (thumbsSwiper && mainSwiperRef.current) {
      thumbsSwiper.slideTo(0, 0);
      mainSwiperRef.current.slideTo(0, 0);
      mainSwiperRef.current.update();
      thumbsSwiper.update();
    }
  }, [colorProduct.colorName, thumbsSwiper]);
  return (
    <>
      <div className="flex gap-x-2.5">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
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
          onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
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
        >
          {productSlider &&
            productSlider.map((image, index) => (
              <SwiperSlide
                key={image + index}
                className="flex justify-center items-center"
              >
                <Image
                  src={image}
                  alt={product.name || "фото"}
                  width={1200}
                  height={1200}
                  className="w-full max-h-[590px] h-auto object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 50vw"
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

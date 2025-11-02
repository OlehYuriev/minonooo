"use client";
import { Card } from "@/components/card";
import { IProduct } from "@/type/product";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  randomProducts: IProduct[];
};

export function ProductSwiper({ randomProducts }: Props) {
  const [hasProducts, setHasProducts] = useState(false);
  useEffect(() => {
    if (randomProducts.length > 0) {
      setHasProducts(true);
    } else {
      setHasProducts(false);
    }
  }, [randomProducts.length]);
  return (
    <Swiper
      slidesPerView="auto"
      breakpoints={{
        320: { slidesPerView: "auto" },
        1024: { slidesPerView: 4 },
      }}
      spaceBetween={30}
      freeMode={true}
      modules={[FreeMode]}
      className=""
    >
      {hasProducts ? (
        randomProducts.map((product) => (
          <SwiperSlide
            className="max-[1023px]:!w-[16.8rem] !h-[26rem]"
            key={product.id}
          >
            <Card product={product} />
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide className="max-[1023px]:!w-[16.8rem] !h-[26rem]"></SwiperSlide>
      )}
    </Swiper>
  );
}

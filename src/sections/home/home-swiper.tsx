"use client";
import { ButtonSlider } from "@/components/ui/buttons";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function HomeSwiper() {
  const slides = [
    {
      id: 1,
      card_1:
        "https://res.cloudinary.com/dx0qnlp6l/image/upload/f_auto,q_auto,dpr_auto,w_600/v1769943269/slide1_yu3bnl.jpg",
      card_2:
        "https://res.cloudinary.com/dx0qnlp6l/image/upload/f_auto,q_auto,dpr_auto,w_600/v1769975309/slide2_youvpe.jpg",
    },
    {
      id: 2,
      card_1:
        "https://res.cloudinary.com/dx0qnlp6l/image/upload/f_auto,q_auto,dpr_auto,w_600/v1769975430/slide3_cgwjvc.jpg",
      card_2:
        "https://res.cloudinary.com/dx0qnlp6l/image/upload/f_auto,q_auto,dpr_auto,w_600/v1769975503/slide4_oe0rdf.jpg",
    },
    {
      id: 3,
      card_1:
        "https://res.cloudinary.com/dx0qnlp6l/image/upload/f_auto,q_auto,dpr_auto,w_600/v1769975750/slide5_ggiqms.jpg",
      card_2:
        "https://res.cloudinary.com/dx0qnlp6l/image/upload/f_auto,q_auto,dpr_auto,w_600/v1769975309/slide2_youvpe.jpg",
    },
  ];
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      pagination={{
        clickable: true,
        bulletActiveClass: "swiper-pagination-bullet-active",
      }}
      spaceBetween={50}
      slidesPerView={1}
      className="h-full"
    >
      {slides.map((slide) => (
        <SwiperSlide
          className="flex justify-center items-center h-full relative"
          key={slide.id}
        >
          <div
            className="relative md:-translate-y-2/4 md:left-[5%] md:top-1/2 md:w-[23%]  w-full
				h-full md:h-auto 
			  md:aspect-[474/709] perspective-[1000px] z-1"
          >
            <div
              className="absolute w-full h-full rounded-xl  z-10
                  shadow-[0_20px_30px_-5px_rgba(0,0,0,0.6),0_10px_60px_-10px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.04)]"
            >
              <Image
                src={slide.card_1}
                alt="Товар"
                fill
                sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw,25vw"
                className="object-cover rounded-xl"
                priority
              />

              {/* Полупрозрачный градиент сверху для эффекта фокуса (по желанию) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
            </div>
          </div>
          <div
            className="absolute  -translate-y-2/4 top-1/2  left-[26%] w-[19.5%]  
			 aspect-[474/709] perspective-[1000px] z-0 md:block hidden"
          >
            <div
              className="absolute w-full h-full rounded-xl  z-10
                  shadow-[0_20px_30px_-5px_rgba(0,0,0,0.6),0_10px_60px_-10px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.04)]"
            >
              <Image
                src={slide.card_2}
                alt="Товар"
                fill
                sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw,25vw"
                className="object-cover rounded-xl"
                priority
              />

              {/* Полупрозрачный градиент сверху для эффекта фокуса (по желанию) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <ButtonSlider next={"custom-next"} prev={"custom-prev"} />
    </Swiper>
  );
}

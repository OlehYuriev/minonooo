import { Button } from "@/components/ui/buttons";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { HomeSwiper } from "./home-swiper";

export function HpmeSlider() {
  return (
    <section className="mt-14 md:bg-[url('/sea.png')] bg-cover bg-center bg-fixed relative screen-minus-header">
      <div
        className="w-96 absolute md:right-1/12  right-1/2  translate-x-1/2 md:translate-x-0 
		-translate-y-1/2 top-1/2 z-2 pointer-events-none"
      >
        <h1 className="text-6xl font-second font-medium uppercase   text-center  md:text-white ">
          with love, to you
        </h1>
        <div className="mt-6 max-w-[18.75rem] mx-auto pointer-events-auto">
          <Link href={ROUTES.CATALOG}>
            <Button text=" Перейти в каталог" className="bg-white" />
          </Link>
        </div>
      </div>
      <HomeSwiper />
    </section>
  );
}

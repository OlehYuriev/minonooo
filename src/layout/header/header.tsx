import { ProductSearch } from "@/components/product-search";
import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "../../components/ui/navigation";
import { BurgerMenu } from "./burger-menu";
import { HeaderButtons } from "./header-buttons";

export function Header() {
  return (
    <header className="py-3 px-5 fixed top-0 left-0 right-0 z-10   bg-white">
      <div className="flex items-center justify-between max-w-[1215px] mx-auto ">
        <div className="sm:block hidden z-10">
          <Navigation />
        </div>
        <BurgerMenu />
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
          <Link href={ROUTES.HOME} className="text-2xl font-bold text-gray-800">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={45}
              height={45}
              className="rounded-4xl w-[3rem] h-[3rem]"
              priority
            />
          </Link>
        </div>

        <div className="flex items-center space-x-16">
          <div className="min-[920px]:block hidden">
            <ProductSearch />
          </div>
          <HeaderButtons />
        </div>
      </div>
    </header>
  );
}

import styles from "@/components/ui/navigation/style.module.css";
import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { FooterNav } from "./footer-nav";
export function Footer() {
  return (
    <footer className="border-t border-[#dadada] mt-28 py-10 ">
      <div className="flex items-center sm:flex-row flex-col  max-w-[1215px] mx-auto gap-x-30">
        <div className="w-1/6 flex justify-center order-2 sm:order-1 mt-9 sm:mt-0">
          <Link href={ROUTES.HOME} className="text-2xl font-bold text-gray-800">
            <Image
              src="https://res.cloudinary.com/dx0qnlp6l/image/upload/f_auto,q_auto,w_48,h_48,c_fill/v1769981031/logo_dvcds7.jpg"
              alt="Logo"
              width={72}
              height={72}
              className="rounded-4xl w-18 h-18 "
              priority
            />
          </Link>
        </div>

        <div className="flex gap-y-9  gap-x-36 sm:order-2 order-1 sm:flex-row flex-col items-center sm:items-start">
          <FooterNav />
          <div>
            <h4 className="text-lg font-medium mb-6">Слідкуйте за нами</h4>
            <ul className="flex justify-center ">
              <li>
                <a
                  href="https://www.instagram.com/mim.onoo?igsh=cmF5cDZmcjAzd3Bt"
                  target="_blank"
                  className={`${styles.underlineAnim}`}
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

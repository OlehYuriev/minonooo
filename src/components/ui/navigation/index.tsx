"use client";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.css";

type Props = {
  flexCol?: boolean;
};
export function Navigation({ flexCol = false }: Props) {
  const pathname = usePathname();

  const links = [
    {
      name: "Головна",
      path: ROUTES.HOME,
    },
    {
      name: "Каталог",
      path: ROUTES.CATALOG,
    },
  ];
  return (
    <nav>
      <ul
        className={`flex space-x-6  space-y-6    flex-col ${
          flexCol ? "sm:flex-col sm:space-y-3" : "sm:flex-row sm:space-y-0"
        }`}
      >
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              className={`${
                pathname === link.path ? `${styles.active}` : ""
              } hover:text-gray-900 ${styles.underlineAnim} `}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

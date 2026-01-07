"use client";
import { useAuth } from "@/auth/hooks/use-auth";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.css";

type Props = {
  flexCol?: boolean;
};
const menuItems = [
  { title: "Основна інформація", href: ROUTES.DASHBOARD.ROOT },
  { title: "Профиль", href: "/profile" },
  { title: "Настройки", href: "/settings" },
];

export function Navigation({ flexCol = false }: Props) {
  const { user } = useAuth();
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
        className={`flex  gap-4    flex-col ${
          flexCol ? "sm:flex-col " : "sm:flex-row "
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
        {user && (
          <div className={` sm:hidden flex gap-4    flex-col `}>
            {menuItems.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className={`${
                    pathname === link.href ? `${styles.active}` : ""
                  } hover:text-gray-900 ${styles.underlineAnim} `}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </div>
        )}
      </ul>
    </nav>
  );
}

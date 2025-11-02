"use client";

import { useLogout } from "@/auth/hooks/use-logout";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
const menuItems = [
  { title: "Основна інформація", href: ROUTES.DASHBOARD.ROOT },
  { title: "Профиль", href: "/profile" },
  { title: "Настройки", href: "/settings" },
];
export function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const logout = useLogout();
  const handleLogout = async () => {
    await logout();

    router.replace(ROUTES.LOGIN);
  };
  return (
    <nav className="flex flex-col gap-3 ">
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${
            pathname === item.href ? `` : "opacity-40"
          } hover:opacity-100  transition-all `}
        >
          {item.title}
        </Link>
      ))}

      <button
        onClick={handleLogout}
        className="opacity-40 hover:opacity-100  transition-all inline-flex"
      >
        Вихід
      </button>
    </nav>
  );
}

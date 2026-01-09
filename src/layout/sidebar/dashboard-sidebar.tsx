"use client";

import { useLogout } from "@/auth/hooks/use-logout";
import { AUTH_MENU } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DashboardSidebar() {
  const pathname = usePathname();
  const logout = useLogout();

  return (
    <nav className="flex flex-col gap-3 ">
      {AUTH_MENU.map((item) => (
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
        onClick={logout}
        className="opacity-40 hover:opacity-100  transition-all inline-flex"
      >
        Вихід
      </button>
    </nav>
  );
}

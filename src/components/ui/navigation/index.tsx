"use client";
import { useAuth } from "@/auth/hooks/use-auth";
import { AUTH_MENU, LINKS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import styles from "./style.module.css";

type Props = {
  flexCol?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

export function Navigation({ flexCol = false, setOpen }: Props) {
  const { user } = useAuth();
  const pathname = usePathname();
  const handleLinkClick = () => {
    if (setOpen) {
      setOpen(false);
    }
  };
  return (
    <nav>
      <ul
        className={`flex  gap-4    flex-col ${
          flexCol ? "sm:flex-col " : "sm:flex-row "
        }`}
      >
        {LINKS.map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              onClick={handleLinkClick}
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
            {AUTH_MENU.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
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

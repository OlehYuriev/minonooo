"use client";
import { ROUTES } from "@/constants/routes";
import { User } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";

import { HeaderButton } from "./header-button";

type Props = {
  user: User | null;
  avatarUrl: string | null;
};
export default function HeaderAccount({ user, avatarUrl }: Props) {
  return (
    <Link
      href={user ? ROUTES.DASHBOARD.ROOT : ROUTES.LOGIN}
      className="h-8 w-8"
    >
      {avatarUrl ? (
        <Image
          src={avatarUrl}
          alt="Avatar"
          width={32}
          height={32}
          className="rounded-full w-[2rem] h-[2rem] object-cover"
          priority
        />
      ) : user ? (
        <div className="flex items-center justify-center w-[2rem] h-[2rem] rounded-full bg-gray-300 text-lg font-bold text-white">
          {user.displayName
            ? user.displayName.charAt(0).toUpperCase()
            : user.email?.charAt(0).toUpperCase()}
        </div>
      ) : (
        <HeaderButton src="/account.svg" alt="Логін" label="Логін" />
      )}
    </Link>
  );
}

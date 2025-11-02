import { ROUTES } from "@/constants/routes";
import { User } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { HeaderButton } from "./header-button";

type Props = {
  user: User | null;
};
export function HeaderAccount({ user }: Props) {
  return (
    <Link
      href={user ? ROUTES.DASHBOARD.ROOT : ROUTES.LOGIN}
      className="h-8 w-8"
    >
      {user ? (
        user.photoURL ? (
          <Image
            src={user.photoURL}
            alt="Avatar"
            width={32}
            height={32}
            className="rounded-full w-[2rem] h-[2rem] object-cover"
            priority
          />
        ) : (
          <div className="flex items-center justify-center w-[2rem] h-[2rem] rounded-full bg-gray-300 text-lg font-bold text-white">
            {user.displayName
              ? user.displayName.charAt(0).toUpperCase()
              : user.email?.charAt(0).toUpperCase()}
          </div>
        )
      ) : (
        <HeaderButton src="/account.svg" alt="Логін" label="Логін" />
      )}
    </Link>
  );
}

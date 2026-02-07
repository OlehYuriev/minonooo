"use client";

import { auth } from "@/firebase";
import { setAvatarUrlApi } from "@/services/user";

import { ROUTES } from "@/constants/routes";
import { deleteClientCookie } from "@/utils/cookie";
import { DecodedIdToken } from "firebase-admin/auth";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useRef, useState } from "react";
import { authCookie } from "../utils/auth-cookie";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  role: "admin" | "user" | null;
  setUser: (u: User | null) => void;
  setRole: (r: "admin" | "user" | null) => void;
  avatarUrl: string | null;
  setAvatarUrl: (u: string | null) => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  role: null,
  setUser: () => {},
  setRole: () => {},
  avatarUrl: null,
  setAvatarUrl: () => {},
});

type AuthProviderProps = {
  children: React.ReactNode;
  initialAvatarUrl?: string;
  initialUser: DecodedIdToken | null;
};
export function AuthProvider({
  children,
  initialAvatarUrl,
  initialUser,
}: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<"admin" | "user" | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(
    initialUser?.picture || null,
  );
  const router = useRouter();
  const didLogoutRef = useRef(false);

  useEffect(() => {
    if (!initialUser && !didLogoutRef.current) {
      didLogoutRef.current = true;

      async function logout() {
        try {
          await signOut(auth);
          await setAvatarUrlApi(null);
          deleteClientCookie("avatarUrl");
          setUser(null);
          setRole(null);
          router.replace(ROUTES.LOGIN);
        } catch (error) {
          console.error("Помилка при виході:", error);
        }
      }

      logout();
    }
  }, [initialUser, router]);

  useEffect(() => {
    if (!initialUser) return;
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        setLoading(true);
        if (user) {
          setUser(user);

          const avatarUrl = user.photoURL || null;

          await setAvatarUrlApi(avatarUrl);
          setAvatarUrl(avatarUrl);

          const idToken = await user.getIdToken();

          await authCookie(idToken);
          const tokenResult = await user.getIdTokenResult();
          setRole(tokenResult.claims.role as "admin" | "user");
        } else {
          setUser(null);

          await setAvatarUrlApi(null);
          setAvatarUrl(null);
          setRole(null);
        }
      } catch (error) {
        console.error("Помилка при виході:", error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [initialUser]);

  return (
    <AuthContext.Provider
      value={{ user, loading, role, setUser, setRole, avatarUrl, setAvatarUrl }}
    >
      {children}
    </AuthContext.Provider>
  );
}

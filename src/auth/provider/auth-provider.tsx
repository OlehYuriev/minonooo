"use client";

import { auth } from "@/firebase";
import { DecodedIdToken } from "firebase-admin/auth";
import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
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
  initialUser: DecodedIdToken | null;
};
export function AuthProvider({ children, initialUser }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<"admin" | "user" | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(
    initialUser?.picture || null,
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!initialUser) return;
      try {
        setLoading(true);
        if (!user) {
          setUser(null);
          setRole(null);
          setAvatarUrl(null);
          return;
        }
        if (user) {
          setUser(user);

          const avatarUrl = user.photoURL || null;

          setAvatarUrl(avatarUrl);

          const tokenResult = await user.getIdTokenResult();
          setRole(tokenResult.claims.role as "admin" | "user");
        } else {
          setUser(null);
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

  useEffect(() => {
    if (!user) return;

    const refreshServerSession = async () => {
      try {
        const idToken = await user.getIdToken(true); // force refresh
        await authCookie(idToken);
      } catch (error) {
        console.error("Помилка при оновленні сесії", error);
      }
    };

    refreshServerSession();
  }, [user]);
  return (
    <AuthContext.Provider
      value={{ user, loading, role, setUser, setRole, avatarUrl, setAvatarUrl }}
    >
      {children}
    </AuthContext.Provider>
  );
}

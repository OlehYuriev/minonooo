"use client";

import { auth } from "@/firebase";
import { setAvatarUrlApi } from "@/services/user";

import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

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
};
export function AuthProvider({
  children,
  initialAvatarUrl,
}: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<"admin" | "user" | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(
    initialAvatarUrl || null
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        setUser(user);
        const avatarUrl = user.photoURL;

        await setAvatarUrlApi(avatarUrl);
        setAvatarUrl(avatarUrl);
        const tokenResult = await user.getIdTokenResult();
        setRole(tokenResult.claims.role as "admin" | "user");
      } else {
        setUser(null);

        await setAvatarUrlApi(null);
        setAvatarUrl(null);
        setRole(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider
      value={{ user, loading, role, setUser, setRole, avatarUrl, setAvatarUrl }}
    >
      {children}
    </AuthContext.Provider>
  );
}

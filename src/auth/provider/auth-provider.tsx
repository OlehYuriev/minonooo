"use client";

import { auth } from "@/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  role: "admin" | "user" | null;
  setUser: (u: User | null) => void;
  setRole: (r: "admin" | "user" | null) => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  role: null,
  setUser: () => {},
  setRole: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<"admin" | "user" | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        setUser(user);

        const tokenResult = await user.getIdTokenResult(true);
        setRole(tokenResult.claims.role as "admin" | "user");
        console.log("sdsds11111", tokenResult.claims.role);
      } else {
        setUser(null);
        setRole(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider value={{ user, loading, role, setUser, setRole }}>
      {children}
    </AuthContext.Provider>
  );
}

import { useAuth } from "@/auth/hooks/use-auth";
import { ROUTES } from "@/constants/routes";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";

export function useLogout() {
  const { setUser, setRole, setAvatarUrl } = useAuth();

  const logout = async () => {
    try {
      await signOut(auth);
      const res = await fetch("/api/logout", { method: "POST" });
      const result = await res.json();
      console.log(result);
      if (!result.ok) {
        throw new Error("Помилка при видаленні сесії");
      }

      setUser(null);
      setRole(null);
      setAvatarUrl(null);

      window.location.replace(ROUTES.LOGIN);
    } catch (error) {
      console.error("Помилка при виході:", error);
    }
  };

  return logout;
}

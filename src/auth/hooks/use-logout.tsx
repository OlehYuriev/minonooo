import { useAuth } from "@/auth/hooks/use-auth";
import { ROUTES } from "@/constants/routes";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export function useLogout() {
  const { setUser, setRole, setAvatarUrl } = useAuth();
  const router = useRouter();
  const logout = async () => {
    try {
      await signOut(auth);
      await fetch("/api/logout", { method: "POST" });
      setUser(null);
      setRole(null);
      setAvatarUrl(null);
      router.replace(ROUTES.LOGIN);
    } catch (error) {
      console.error("Помилка при виході:", error);
    }
  };

  return logout;
}

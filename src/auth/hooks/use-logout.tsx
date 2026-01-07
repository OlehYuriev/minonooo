import { useAuth } from "@/auth/hooks/use-auth";
import { ROUTES } from "@/constants/routes";
import { auth } from "@/firebase";
import { setAvatarUrlApi } from "@/services/user";
import { deleteClientCookie } from "@/utils/cookie";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export function useLogout() {
  const { setUser, setRole } = useAuth();
  const router = useRouter();
  const logout = async () => {
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
  };

  return logout;
}

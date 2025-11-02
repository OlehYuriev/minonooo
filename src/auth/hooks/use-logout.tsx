import { useAuth } from "@/auth/hooks/use-auth";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";

export function useLogout() {
  const { setUser, setRole } = useAuth();

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setRole(null);
    } catch (error) {
      console.error("Помилка при виході:", error);
    }
  };

  return logout;
}

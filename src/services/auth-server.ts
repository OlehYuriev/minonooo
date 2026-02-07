import { adminAuth } from "@/firebase-admin";
import { cookies } from "next/headers";

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;

  if (!session) return null;

  try {
    const decoded = await adminAuth.verifySessionCookie(
      session,
      true, // проверка отзыва
    );

    return decoded; // uid, email, role и т.д.
  } catch {
    return null;
  }
}

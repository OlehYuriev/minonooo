import { User } from "firebase/auth";

export async function waitForRole(
  user: User,
  retries = 10,
  interval = 1000
): Promise<"admin" | "user" | null> {
  for (let i = 0; i < retries; i++) {
    const tokenResult = await user.getIdTokenResult(true); // force refresh
    if (tokenResult.claims.role) {
      return tokenResult.claims.role as "admin" | "user";
    }
    await new Promise((resolve) => setTimeout(resolve, interval));
  }
  return null; // если не успели получить
}

import { checkLoginExists, saveLogin } from "@/services/user";

export async function updateLoginIfNeeded(uid: string, login: string) {
  const { userId, login: newLogin } = await checkLoginExists(uid, login);

  if (userId) {
    await saveLogin(userId, newLogin);
  }
}

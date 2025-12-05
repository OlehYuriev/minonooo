import { db } from "@/firebase";
import { toast } from "@/utils/toast";
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";

export async function checkLoginExists(userId: string | null, login: string) {
  const q = query(collection(db, "usernames"));
  const querySnapshot = await getDocs(q);

  for (const docSnap of querySnapshot.docs) {
    const existingLogin = docSnap.data().login;

    if (docSnap.id !== userId && existingLogin === login) {
      toast("Такий логін вже використовується!", "error");
      throw new Error("Такий логін вже використовується");
    }
  }

  return { userId, login };
}

export async function saveLogin(userId: string, login: string) {
  await setDoc(doc(db, "usernames", userId), { login });
}

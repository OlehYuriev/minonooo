import { db, storage } from "@/firebase";
import { toast } from "@/utils/toast";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

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

/* ---------------------------------------------------------------------------------------- */

export async function saveLogin(userId: string, login: string) {
  await setDoc(doc(db, "usernames", userId), { login });
}

/* ---------------------------------------------------------------------------------------- */

export async function fetchUserProfile(uid: string) {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
}

/* ---------------------------------------------------------------------------------------- */

export async function uploadAvatar(userId: string, file: File) {
  if (!file) return null;

  const storageRef = ref(storage, `avatars/${userId}/${file.name}`);

  // загружаем файл
  await uploadBytes(storageRef, file);

  // получаем публичный URL
  const url = await getDownloadURL(storageRef);

  // сразу можно сохранить в Firestore
  const userDocRef = doc(db, "users", userId);
  await setDoc(userDocRef, { avatar: url }, { merge: true });

  return url;
}

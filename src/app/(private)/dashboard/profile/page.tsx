"use client";

import { useAuth } from "@/auth/hooks/use-auth";
import { Button } from "@/components/ui/buttons";
import { Input } from "@/components/ui/input";
import { db } from "@/firebase";
import { useToast } from "@/hooks/use-toast";
import { updateProfile } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
interface IProfile {
  login: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
}
interface IErrorProfile {
  login?: string | null;
  name?: string | null;
  surname?: string | null;
  email?: string | null;
  phone?: string | null;
}
async function fetchUserProfile(uid: string) {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data(); // вернёт объект {login, name, surname, phone, email}
  } else {
    return null; // документ не найден
  }
}

async function saveLogin(userId: string, login: string) {
  const usernamesRef = collection(db, "usernames");
  const q = query(usernamesRef, where("login", "==", login));
  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    throw new Error("Такий логін вже використовується");
  }

  // Сохраняем логин
  await setDoc(doc(db, "usernames", userId), { login });
}
export default function Profile() {
  const { user } = useAuth();
  useEffect(() => {
    console.log(user);
    async function loadProfile() {
      if (user) {
        const profile = await fetchUserProfile(user.uid);
        console.log("sdss", profile);

        setData({
          email: profile?.email || user.email || "",
          login: profile?.login || user.displayName || "",
          name: profile?.name || "",
          surname: profile?.surname || "",
          phone: profile?.phone || "",
        });
      }
    }
    loadProfile();
  }, [user]);
  const [data, setData] = useState<IProfile>({
    email: "",
    login: "",
    name: "",
    phone: "",
    surname: "",
  });

  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<IErrorProfile>({
    email: null,
    login: null,
    name: null,
    phone: null,
    surname: null,
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!user) return;

      // обновляем Firestore
      await saveLogin(user.uid, data.login);
      const docRef = doc(db, "users", user.uid);
      await setDoc(docRef, data, { merge: true });

      // можно также обновить displayName в Firebase Auth
      await updateProfile(user, { displayName: data.login });

      showToast("Профіль успішно оновлено");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <h1 className=" text-3xl font-medium mt-12">Основна інформація</h1>
      <form
        className="max-w-xl  flex flex-col gap-y-5 mt-6"
        onSubmit={handleSubmit}
      >
        <Input
          name="name"
          className="w-full"
          value={data.name}
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
          error={errors.name}
          placeholder="Ім'я"
        />{" "}
        <Input
          name="surname"
          className="w-full"
          value={data.surname}
          onChange={(e) =>
            setData((prev) => ({ ...prev, surname: e.target.value }))
          }
          error={errors.surname}
          placeholder="Прізвище"
        />
        <Input
          name="login"
          className="w-full"
          value={data.login}
          onChange={(e) =>
            setData((prev) => ({ ...prev, login: e.target.value }))
          }
          error={errors.login}
          placeholder="Логін"
        />
        <Input
          name="phone"
          className="w-full"
          value={data.phone}
          onChange={(e) =>
            setData((prev) => ({ ...prev, phone: e.target.value }))
          }
          error={errors.phone}
          placeholder="Номер телефону"
        />
        <Input
          name="email"
          className="w-full"
          value={data.email}
          onChange={(e) =>
            setData((prev) => ({ ...prev, email: e.target.value }))
          }
          error={errors.email}
          placeholder="Email"
        />
        <div className="max-w-2xs">
          <Button
            text="Зберегти"
            type="submit"
            variant="primary"
            className="!py-4"
            loading={loading}
          />
        </div>
      </form>
    </>
  );
}

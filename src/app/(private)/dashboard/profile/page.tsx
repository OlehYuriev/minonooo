"use client";
import { useAuth } from "@/auth/hooks/use-auth";
import { Button } from "@/components/ui/buttons";
import { Form } from "@/components/ui/form";
import { RHFInput, RHFPhoneInput } from "@/components/ui/input";
import { RHFAvatarInput } from "@/components/ui/input/RHFAvatarInput";
import { auth, db, storage } from "@/firebase";
import { checkLoginExists, saveLogin } from "@/services/user";
import { toast } from "@/utils/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().trim(),
  surname: z.string().trim(),
  login: z.string().min(3, "Логін мінімум 3 символи"),
  email: z.email({ message: "Електронна адреса має бути дійсною!" }).trim(),
  phone: z
    .string()
    .regex(
      /^\+380 \(\d{2}\) \d{3}-\d{2}-\d{2}$/,
      "Номер має бути у форматі +380 (XX) XXX-XX-XX"
    ),
  avatar: z.union([z.instanceof(File), z.string(), z.null()]),
});
export type ProfileFormData = z.infer<typeof profileSchema>;
async function fetchUserProfile(uid: string) {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data(); // вернёт объект {login, name, surname, phone, email}
  } else {
    return null; // документ не найден
  }
}

async function uploadAvatar(userId: string, file: File) {
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
export default function Profile() {
  const { user, setUser } = useAuth();
  const methods = useForm<ProfileFormData>({
    mode: "onSubmit",
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      surname: "",
      login: "",
      email: "",
      phone: "",
      avatar: "",
    },
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    console.log(user);
    if (!user) return;

    const loadProfile = async () => {
      const profileData = await fetchUserProfile(user.uid);

      reset({
        name: profileData?.name || "",
        surname: profileData?.surname || "",
        login: user.displayName || profileData?.login || "",
        email: profileData?.email || user?.email || "",
        phone: profileData?.phone || "",
        avatar: profileData?.avatar || "",
      });
    };

    loadProfile();
  }, [user, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (!user) return;

      const { userId, login } = await checkLoginExists(user.uid, data.login);
      if (userId) await saveLogin(userId, login);

      let avatarUrl = data.avatar;
      if (data.avatar instanceof File) {
        avatarUrl = await uploadAvatar(user.uid, data.avatar);
      }

      const docRef = doc(db, "users", user.uid);
      await setDoc(docRef, { ...data, avatar: avatarUrl }, { merge: true });

      await updateProfile(user, {
        displayName: data.login,
        photoURL: typeof avatarUrl === "string" ? avatarUrl : null,
      });
      await user.reload();
      const refreshedUser = auth.currentUser;
      if (refreshedUser) {
        setUser({ ...refreshedUser });
      }
      toast("Профіль успішно оновлено!");
    } catch (error) {
      console.error(error);
      toast("Помилка", "error");
    }
  });
  async function deleteAvatar(userId: string) {
    if (!userId) return;
    try {
      const avatarRef = ref(storage, `avatars/${userId}/`);
      const list = await listAll(avatarRef);
      const promises = list.items.map((fileRef) => deleteObject(fileRef));

      await Promise.all(promises);
      console.log("Аватар успішно видалено");
    } catch (error) {
      console.error("Ошибка при удалении аватара:", error);
    }
  }
  return (
    <>
      <h1 className=" text-3xl font-medium mt-12">Основна інформація</h1>
      <Form methods={methods} onSubmit={onSubmit}>
        <div className="max-w-xl   flex flex-col gap-y-5 mt-6">
          <RHFAvatarInput
            name="avatar"
            onRemove={() => {
              if (user?.uid) deleteAvatar(user.uid);
            }}
          />
          <RHFInput name="name" placeholder="Ім'я" />
          <RHFInput name="surname" placeholder="Прізвище" />
          <RHFInput name="login" placeholder="Логін" />
          <RHFPhoneInput name="phone" />
          <RHFInput name="email" placeholder="Email" />

          <div className="max-w-2xs">
            <Button
              text="Зберегти"
              type="submit"
              variant="primary"
              className="!py-4"
              loading={isSubmitting}
            />
          </div>
        </div>
      </Form>
    </>
  );
}

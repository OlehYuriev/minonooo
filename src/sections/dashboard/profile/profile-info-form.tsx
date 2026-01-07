"use client";
import { useAuth } from "@/auth/hooks/use-auth";
import { Button } from "@/components/ui/buttons";
import { Form } from "@/components/ui/form";
import { RHFInput, RHFPhoneInput } from "@/components/ui/input";
import { RHFAvatarInput } from "@/components/ui/input/RHFAvatarInput";
import { Loader } from "@/components/ui/loader";
import { auth, db, storage } from "@/firebase";
import {
  ProfileFormData,
  profileSchema,
} from "@/sections/dashboard/profile/schema";

import {
  fetchUserProfile,
  setAvatarUrlApi,
  uploadAvatar,
} from "@/services/user";
import { deleteClientCookie } from "@/utils/cookie";
import { toast } from "@/utils/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { deleteObject, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { updateLoginIfNeeded } from "./utils";

export function ProfileInfoForm() {
  const { user, setUser, setAvatarUrl } = useAuth();
  const [loading, setLoading] = useState(true);
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
        avatar: profileData?.avatar || null,
      });
      setLoading(false);
    };

    loadProfile();
  }, [user, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (!user || !auth.currentUser) return;

      await updateLoginIfNeeded(user.uid, data.login);

      let avatarUrl = data.avatar;

      if (data.avatar instanceof File) {
        avatarUrl = await uploadAvatar(user.uid, data.avatar);
      }

      if (typeof avatarUrl === "string") {
        await setAvatarUrlApi(avatarUrl);
      }

      setAvatarUrl(typeof avatarUrl === "string" ? avatarUrl : null);
      const docRef = doc(db, "users", user.uid);
      await setDoc(docRef, { ...data, avatar: avatarUrl }, { merge: true });

      await updateProfile(auth.currentUser, {
        displayName: data.login,
        photoURL: typeof avatarUrl === "string" ? avatarUrl : "",
      });
      await auth.currentUser.reload();

      setUser({ ...auth.currentUser });

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

      await setAvatarUrlApi(null);
      deleteClientCookie("avatarUrl");
      setAvatarUrl(null);
      console.log("Аватар успішно видалено");
    } catch (error) {
      console.error("Ошибка при удалении аватара:", error);
    }
  }

  return (
    <>
      {loading && <Loader />}
      <Form methods={methods} onSubmit={onSubmit}>
        <div className="max-w-xl  flex flex-col gap-y-5 mt-6">
          <RHFAvatarInput
            name="avatar"
            onRemove={async () => {
              if (user?.uid) await deleteAvatar(user.uid);
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

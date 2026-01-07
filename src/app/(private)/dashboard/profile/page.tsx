import { ProfileInfoForm } from "@/sections/dashboard/profile/profile-info-form";
import { ProfilePassword } from "@/sections/dashboard/profile/profile-password";

export default function Profile() {
  return (
    <>
      <h1 className=" text-3xl font-medium mt-12">Основна інформація</h1>
      <ProfileInfoForm />
      <h2 className=" text-3xl font-medium mt-12">Змінити пароль</h2>
      <ProfilePassword />
    </>
  );
}

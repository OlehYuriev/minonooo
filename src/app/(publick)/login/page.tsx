import { LoginForm } from "@/auth/components";
import { AuthLayout } from "@/auth/components/auth-layout";
import { AuthRedirectLink } from "@/auth/components/auth-redirect-link";
import { ROUTES } from "@/constants/routes";

export default function LoginPage() {
  return (
    <>
      <AuthLayout title=" Увійдіть у свій акаунт">
        <LoginForm />
        <AuthRedirectLink link={ROUTES.REGISTER} title="Зарейструватися" />
      </AuthLayout>
    </>
  );
}

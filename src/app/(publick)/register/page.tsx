import { RegisterForm } from "@/auth/components";
import { AuthLayout } from "@/auth/components/auth-layout";
import { AuthRedirectLink } from "@/auth/components/auth-redirect-link";
import { ROUTES } from "@/constants/routes";

export default function RegisterPage() {
  return (
    <AuthLayout title="Реєстрація">
      <RegisterForm />
      <AuthRedirectLink link={ROUTES.LOGIN} title="   Увійти" />
    </AuthLayout>
  );
}

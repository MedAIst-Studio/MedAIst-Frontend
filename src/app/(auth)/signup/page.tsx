"use client";

import {useRouter} from "next/navigation";
import {useState} from "react";

import {
  AuthLayout,
  handleSocialLogin,
  setAuthTokens,
  SignupForm,
  type SignupFormData,
} from "@/features/auth";
import {AuthAPI} from "@/features/auth/api";

export default function SignupPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async (data: SignupFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const {error, success} = await AuthAPI.signup(data);

      if (success) {
        const {
          error: loginError,
          success: loginSuccess,
          data: loginData,
        } = await AuthAPI.login({
          email: data.email,
          password: data.password,
        });

        if (loginError) {
          setError(loginError.message);

          return;
        }

        if (loginSuccess && loginData) {
          setAuthTokens(loginData.accessToken, loginData.refreshToken);

          router.push("/onboarding");
        }
      } else if (error) {
        setError(error.message);
      }
    } catch {
      setError("Hesap oluşturulurken bir hata oluştu. Lütfen tekrar deneyiniz.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      footerLink={{
        text: "Giriş yapın",
        href: "/login",
      }}
      footerText="Zaten hesabınız var mı?"
      subtitle="MedAIst ile öğrenme yolculuğunuza başlayın"
      title="Hesap Oluşturun"
    >
      <SignupForm
        error={error || undefined}
        isLoading={isLoading}
        onSocialLogin={handleSocialLogin}
        onSubmit={handleSignup}
      />
    </AuthLayout>
  );
}

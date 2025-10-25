"use client";

import {useRouter, useSearchParams} from "next/navigation";
import {useState} from "react";

import {AuthLayout, LoginForm, type LoginFormData, setAuthTokens} from "@/features/auth";
import {AuthAPI} from "@/features/auth/api";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (_data: LoginFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const {data, error, success} = await AuthAPI.login(_data);

      if (success && data) {
        setAuthTokens(data.accessToken, data.refreshToken);

        const callbackUrl = searchParams.get("callbackUrl") || "/files";

        router.push(callbackUrl);
      } else if (error) {
        setError(error.message);
      }
    } catch {
      setError("Giriş yapılırken bir hata oluştu. Lütfen tekrar deneyiniz.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (_provider: "google" | "facebook") => {
    setError(null);
    // TODO: Implement social login
  };

  return (
    <AuthLayout
      footerLink={{
        text: "Hesap oluşturun",
        href: "/signup",
      }}
      footerText="Henüz hesabınız yok mu?"
      subtitle="MedAIst platformuna hoş geldiniz"
      title="Hesabınıza Giriş Yapın"
    >
      <LoginForm
        error={error || undefined}
        isLoading={isLoading}
        onSocialLogin={handleSocialLogin}
        onSubmit={handleLogin}
      />
    </AuthLayout>
  );
}

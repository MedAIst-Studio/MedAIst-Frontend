"use client";

import {useState} from "react";

import {AuthLayout, LoginForm, type LoginFormData} from "@/features/auth";
import {AuthAPI} from "@/features/auth/api";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (_data: LoginFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const {data, error, success} = await AuthAPI.login(_data);

      if (success) {
        // Handle successful login to onboarding or chat ui
        console.log("Login successful");
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

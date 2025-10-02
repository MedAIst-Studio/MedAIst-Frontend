"use client";

import {useState} from "react";

import {AuthLayout, SignupForm, type SignupFormData} from "@/features/auth";
import {AuthAPI} from "@/features/auth/api";

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async (data: SignupFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const {error, success} = await AuthAPI.signup(data);

      if (success) {
        // Handle successful signup to verification or chat ui
      } else if (error) {
        setError(error.message);
      }
    } catch {
      setError("Hesap oluşturulurken bir hata oluştu. Lütfen tekrar deneyiniz.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: "google" | "facebook") => {
    setError(null);
    // TODO: Implement social login
    // eslint-disable-next-line no-console
    console.log(`${provider} signup clicked`);
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

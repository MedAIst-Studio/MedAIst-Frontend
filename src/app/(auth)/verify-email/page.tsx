"use client";

import {useSearchParams} from "next/navigation";
import {useState} from "react";

import {AuthLayout, VerifyEmailForm, type VerifyEmailFormData} from "@/features/auth";
import {AuthAPI} from "@/features/auth/api";

export default function VerifyEmailPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const handleVerifyEmail = async (data: VerifyEmailFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const {error} = await AuthAPI.verifyEmail(data.code);

      if (error) {
        setError(error.message);
      } else {
        setIsSuccess(true);
      }
    } catch {
      setError("Doğrulama kodu hatalı. Lütfen kontrol edip tekrar deneyiniz.");
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
      footerText="Zaten doğrulandı mı?"
      subtitle="E-posta adresinizi doğrulayarak hesabınızı aktifleştirin"
      title="E-posta Doğrulama"
    >
      <VerifyEmailForm
        email={email || undefined}
        error={error || undefined}
        isLoading={isLoading}
        isSuccess={isSuccess}
        onSubmit={handleVerifyEmail}
      />
    </AuthLayout>
  );
}

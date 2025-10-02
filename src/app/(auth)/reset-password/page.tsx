"use client";

import {useRouter, useSearchParams} from "next/navigation";
import {useState} from "react";

import {AuthLayout, ResetPasswordForm, type ResetPasswordFormData} from "@/features/auth";

export default function ResetPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const handleResetPassword = async (data: ResetPasswordFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      // TODO: Implement actual reset password logic with token
      // eslint-disable-next-line no-console
      console.log("Reset password data:", data, "Token:", token);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSuccess(true);
    } catch {
      setError("Şifre sıfırlanırken bir hata oluştu. Lütfen tekrar deneyiniz.");
    } finally {
      setIsLoading(false);
    }
  };

  // If no token, redirect to forgot password
  /* if (!token) {
    router.push("/forgot-password");

    return null;
  } */

  return (
    <AuthLayout
      footerLink={{
        text: "Giriş yapın",
        href: "/login",
      }}
      footerText="Şifrenizi hatırladınız mı?"
      subtitle="Hesabınız için yeni bir şifre oluşturun"
      title="Şifre Sıfırlama"
    >
      <ResetPasswordForm
        error={error || undefined}
        isLoading={isLoading}
        isSuccess={isSuccess}
        onSubmit={handleResetPassword}
      />
    </AuthLayout>
  );
}

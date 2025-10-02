"use client";

import {useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";

import {AuthLayout, VerifyEmailForm, type VerifyEmailFormData} from "@/features/auth";

export default function VerifyEmailPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [canResend, setCanResend] = useState(true);
  const [resendCooldown, setResendCooldown] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  // Resend cooldown effect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (resendCooldown > 0) {
      interval = setInterval(() => {
        setResendCooldown((prev) => {
          if (prev <= 1) {
            setCanResend(true);

            return 0;
          }

          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [resendCooldown]);

  const handleVerifyEmail = async (data: VerifyEmailFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      // TODO: Implement actual email verification logic
      // eslint-disable-next-line no-console
      console.log("Verify email data:", data, "Email:", email);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSuccess(true);
    } catch {
      setError("Doğrulama kodu hatalı. Lütfen kontrol edip tekrar deneyiniz.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    setIsResending(true);
    setError(null);

    try {
      // TODO: Implement actual resend code logic
      // eslint-disable-next-line no-console
      console.log("Resending verification code to:", email);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Start cooldown
      setCanResend(false);
      setResendCooldown(60); // 60 seconds cooldown
    } catch {
      setError("Kod tekrar gönderilemedi. Lütfen tekrar deneyiniz.");
    } finally {
      setIsResending(false);
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
        canResend={canResend}
        email={email || undefined}
        error={error || undefined}
        isLoading={isLoading}
        isResending={isResending}
        isSuccess={isSuccess}
        resendCooldown={resendCooldown}
        onResendCode={handleResendCode}
        onSubmit={handleVerifyEmail}
      />
    </AuthLayout>
  );
}

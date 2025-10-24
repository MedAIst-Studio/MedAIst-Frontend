"use client";

import {useRouter} from "next/navigation";
import {useState} from "react";

import {AuthLayout, setAuthTokens, SignupForm, type SignupFormData} from "@/features/auth";
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
        // Auto login after signup
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
          // Use helper function to set tokens
          setAuthTokens(loginData.accessToken, loginData.refreshToken);

          // Redirect to onboarding
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

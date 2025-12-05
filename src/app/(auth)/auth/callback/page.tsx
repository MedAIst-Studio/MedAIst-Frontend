"use client";

import {CheckCircle, RotateCcw, XCircle} from "lucide-react";
import {useRouter, useSearchParams} from "next/navigation";
import {Suspense, useEffect, useState} from "react";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Spinner} from "@/components/ui/spinner";
import {AuthLayout, setAuthTokens} from "@/features/auth";
import {AuthAPI} from "@/features/auth/api";

type VerificationState = "loading" | "success" | "error";

function OAuthCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [state, setState] = useState<VerificationState>("loading");
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const verifyOAuthSession = async () => {
      const session = searchParams.get("session");

      if (!session) {
        setState("error");
        setError("OAuth session parametresi bulunamadı");

        return;
      }

      try {
        const progressInterval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 90) {
              clearInterval(progressInterval);

              return 90;
            }

            return prev + 10;
          });
        }, 200);

        const {data, error, success} = await AuthAPI.verifyOauthSession(session);

        clearInterval(progressInterval);
        setProgress(100);

        if (success && data) {
          setAuthTokens(data.access_token, data.refresh_token);

          setState("success");

          setTimeout(() => {
            const callbackUrl = searchParams.get("callbackUrl") || "/files";

            router.push(callbackUrl);
          }, 2000);
        } else if (error) {
          setState("error");
          setError(error.message || "OAuth doğrulama başarısız");
        }
      } catch {
        setState("error");
        setError("OAuth doğrulama sırasında bir hata oluştu");
        setProgress(0);
      }
    };

    verifyOAuthSession();
  }, [searchParams, router]);

  const handleRetry = () => {
    setState("loading");
    setError(null);
    setProgress(0);
    window.location.reload();
  };

  const handleGoToLogin = () => {
    router.push("/login");
  };

  const renderContent = () => {
    switch (state) {
      case "loading":
        return (
          <Card className="w-full">
            <CardHeader className="text-center">
              <Spinner className="w-16 h-16 mx-auto" />
              <CardTitle className="text-2xl">OAuth Doğrulanıyor</CardTitle>
              <CardDescription>Hesabınız doğrulanıyor, lütfen bekleyin...</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-center text-sm text-muted-foreground">
                {progress < 30 && "Bağlantı kuruluyor..."}
                {progress >= 30 && progress < 60 && "Kimlik doğrulanıyor..."}
                {progress >= 60 && progress < 90 && "Token'lar alınıyor..."}
                {progress >= 90 && "Tamamlanıyor..."}
              </p>
            </CardContent>
          </Card>
        );

      case "success":
        return (
          <Card className="w-full">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-700 dark:text-green-400">
                Başarılı! 🎉
              </CardTitle>
              <CardDescription>OAuth doğrulama başarıyla tamamlandı</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Hesabınıza giriş yapıldı. Ana sayfaya yönlendiriliyorsunuz...
              </p>

              {/* Success Animation */}
              <div className="flex justify-center">
                <div className="w-full bg-green-200 dark:bg-green-900/30 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-full" />
                </div>
              </div>

              <div className="flex items-center justify-center space-x-2 text-sm text-green-600">
                <Spinner />
                <span>Yönlendiriliyor...</span>
              </div>
            </CardContent>
          </Card>
        );

      case "error":
        return (
          <Card className="w-full">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
                <XCircle className="w-8 h-8 text-destructive" />
              </div>
              <CardTitle className="text-2xl text-destructive">Doğrulama Başarısız</CardTitle>
              <CardDescription>OAuth session doğrulanamadı</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {error && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-sm text-destructive">
                    <strong>Hata:</strong> {error}
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1" variant="outline" onClick={handleRetry}>
                  <RotateCcw />
                  Tekrar Dene
                </Button>
                <Button className="flex-1" onClick={handleGoToLogin}>
                  Giriş Sayfasına Dön
                </Button>
              </div>

              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  Sorun devam ederse, lütfen destek ekibiyle iletişime geçin.
                </p>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <AuthLayout
      footerLink={{
        text: "Destek alın",
        href: "/contact",
      }}
      footerText="Sorun mu yaşıyorsunuz?"
      subtitle="Hesabınız güvenli şekilde doğrulanıyor"
      title="OAuth Doğrulama"
    >
      {renderContent()}
    </AuthLayout>
  );
}

export default function OAuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <Spinner className="w-16 h-16" />
        </div>
      }
    >
      <OAuthCallbackContent />
    </Suspense>
  );
}

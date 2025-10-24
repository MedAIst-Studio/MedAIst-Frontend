"use client";

import type {FileUploadProgress} from "@/features/files/types";

import {ArrowRight, Brain, CheckCircle, FileText, Upload} from "lucide-react";
import {useRouter} from "next/navigation";
import {useState} from "react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {useUploadFile} from "@/features/files";
import {FileProgressDisplay, FileUpload} from "@/features/files/components";

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadingFiles, setUploadingFiles] = useState<
    {name: string; progress: FileUploadProgress}[]
  >([]);

  const uploadFileMutation = useUploadFile();

  const handleFileSelect = async (fileList: FileList) => {
    const filesArray = Array.from(fileList);

    const initialProgress: {name: string; progress: FileUploadProgress}[] = filesArray.map(
      (file) => ({
        name: file.name,
        progress: {progress: 0, status: "uploading" as const},
      }),
    );

    setUploadingFiles(initialProgress);

    for (let i = 0; i < filesArray.length; i++) {
      const file = filesArray[i];

      try {
        // Update status to uploading
        setUploadingFiles((prev) =>
          prev.map((f, idx) =>
            idx === i ? {...f, progress: {...f.progress, progress: 50, status: "uploading"}} : f,
          ),
        );

        await uploadFileMutation.mutateAsync({
          file_title: file.name,
          file_data: file,
        });

        // Update status to completed
        setUploadingFiles((prev) =>
          prev.map((f, idx) =>
            idx === i ? {...f, progress: {progress: 100, status: "completed"}} : f,
          ),
        );
      } catch (error) {
        // Update status to error
        setUploadingFiles((prev) =>
          prev.map((f, idx) =>
            idx === i
              ? {
                  ...f,
                  progress: {
                    progress: 0,
                    status: "error",
                    error: error instanceof Error ? error.message : "Yükleme başarısız",
                  },
                }
              : f,
          ),
        );
      }
    }

    setTimeout(() => {
      setCurrentStep(2);
    }, 1500);
  };

  const handleGetStarted = () => {
    router.push("/chat");
  };

  const handleSkip = () => {
    router.push("/chat");
  };

  return (
    <MaxWidthWrapper className="min-h-screen flex items-center justify-center py-12">
      <div className="max-w-7xl mx-auto">
        {currentStep === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8 hidden lg:block">
              <div className="space-y-6">
                <Badge className="px-4 py-2 text-sm" variant="secondary">
                  ✨ MedAIst&apos;e Hoş Geldiniz
                </Badge>

                <h1 className="text-4xl lg:text-6xl font-bold text-foreground tracking-tight">
                  Tıp Eğitiminize
                  <br />
                  <span className="text-primary">AI Gücü</span> Katın
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  İlk dosyalarınızı yükleyerek AI destekli öğrenme deneyiminizi başlatın.
                  PDF&apos;lerinizi akıllı notlara dönüştürün ve başarınızı artırın.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-foreground">10K+</div>
                  <div className="text-sm text-muted-foreground">Tıp Öğrencisi</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">500K+</div>
                  <div className="text-sm text-muted-foreground">İşlenen Doküman</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">95%</div>
                  <div className="text-sm text-muted-foreground">Başarı Oranı</div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Brain className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium">Dosyalarınızla AI sohbeti</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium">Otomatik akıllı özetler</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium">Kişiselleştirilmiş quiz sistemi</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>Güvenli ve Şifreli</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>KVKK Uyumlu</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>Ücretsiz Başlangıç</span>
                </div>
              </div>
            </div>

            {/* Right Side - Upload */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Upload className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">İlk Dosyanızı Yükleyin</h2>
                    <p className="text-muted-foreground text-sm">
                      Ders notlarınızı, kitaplarınızı veya makalelerinizi yükleyerek başlayın
                    </p>
                  </div>

                  <FileUpload
                    isUploading={uploadFileMutation.isPending || uploadingFiles.length > 0}
                    onFileSelect={handleFileSelect}
                  />

                  {uploadingFiles.length > 0 && (
                    <div className="mt-6">
                      <FileProgressDisplay files={uploadingFiles} />
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Skip Option */}
              <div className="text-center">
                <Button className="w-full" variant="outline" onClick={handleSkip}>
                  Şimdilik atla, daha sonra yüklerim
                </Button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="text-center space-y-8">
            {/* Success State */}
            <div className="space-y-6">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>

              <Badge className="bg-green-100 text-green-700 border-green-200" variant="secondary">
                ✨ Dosyalar Başarıyla Yüklendi
              </Badge>

              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Harika! Artık Hazırsınız
              </h2>

              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Dosyalarınız işlendi ve AI asistanınız hazır. Şimdi öğrenmeye başlayabilirsiniz!
              </p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
              <Button
                className="h-16 flex flex-col gap-1 p-4"
                variant="outline"
                onClick={handleGetStarted}
              >
                <Brain className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">AI Sohbet Başlat</span>
              </Button>

              <Button
                className="h-16 flex flex-col gap-1 p-4"
                variant="outline"
                onClick={() => router.push("/notes")}
              >
                <FileText className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Notları Görüntüle</span>
              </Button>
            </div>

            <Button className="px-8" size="lg" onClick={handleGetStarted}>
              Platforma Devam Et
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </MaxWidthWrapper>
  );
}

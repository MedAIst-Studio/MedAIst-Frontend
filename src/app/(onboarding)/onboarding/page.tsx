"use client";

import {ArrowRight, BookOpen, Brain, CheckCircle, FileText, Upload} from "lucide-react";
import {useRouter} from "next/navigation";
import {useState} from "react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {FileProgressDisplay, FileUploadComponent} from "@/features/notes/components";
import {useDocumentUpload} from "@/features/notes/hooks";

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const {uploadingFiles, isUploading, uploadFiles} = useDocumentUpload();

  const handleFileSelect = async (files: FileList) => {
    await uploadFiles(files);

    // Simulate success and move to next step
    setTimeout(() => {
      setCurrentStep(2);
    }, 2000);
  };

  const handleGetStarted = () => {
    router.push("/chat");
  };

  const handleSkip = () => {
    router.push("/chat");
  };

  return (
    <MaxWidthWrapper className="py-10">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-white border-2 border-b-4 border-slate-200 rounded-full px-6 py-3 mb-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
          <span className="text-sm font-medium text-slate-700">✨ MedAIst&apos;e Hoş Geldiniz</span>
        </div>

        <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Tıp Eğitiminize
          <span className="text-primary"> AI Gücü </span>
          Katın
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          İlk dosyalarınızı yükleyerek AI destekli öğrenme deneyiminizi başlatın. PDF&apos;lerinizi
          akıllı notlara dönüştürün, sohbet edin ve başarınızı artırın.
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex items-center gap-4">
          <div
            className={`flex items-center gap-2 ${currentStep >= 1 ? "text-slate-900" : "text-slate-400"}`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-semibold border-2 border-b-4 transition-all duration-200 ${
                currentStep >= 1
                  ? "bg-slate-900 text-white border-slate-700 border-b-slate-800 shadow-sm"
                  : "bg-white border-slate-200 border-b-slate-300"
              }`}
            >
              {currentStep > 1 ? <CheckCircle /> : "1"}
            </div>
            <span className="font-medium">Dosya Yükleyin</span>
          </div>

          <div
            className={`w-8 h-1 rounded-full ${currentStep >= 2 ? "bg-slate-900" : "bg-slate-200"}`}
          />

          <div
            className={`flex items-center gap-2 ${currentStep >= 2 ? "text-slate-900" : "text-slate-400"}`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-semibold border-2 border-b-4 transition-all duration-200 ${
                currentStep >= 2
                  ? "bg-slate-900 text-white border-slate-700 border-b-slate-800"
                  : "bg-white border-slate-200 "
              }`}
            >
              {currentStep > 2 ? <CheckCircle className="w-5 h-5" /> : "2"}
            </div>
            <span className="font-medium">Başlayın</span>
          </div>
        </div>
      </div>

      {currentStep === 1 && (
        <div className="space-y-8">
          {/* File Upload Section */}
          <Card>
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-slate-100 border-2 border-b-4 border-slate-300 rounded-full px-4 py-2 mb-4 hover:-translate-y-0.5 transition-all duration-200">
                  <Upload className="h-5 w-5 text-slate-600" />
                  <span className="text-sm font-medium text-slate-700">Adım 1</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">İlk Dosyalarınızı Yükleyin</h2>
                <p className="text-muted-foreground">
                  Tıp ders notlarınızı, kitaplarınızı veya makalelerinizi yükleyerek başlayın
                </p>
              </div>

              <FileUploadComponent isUploading={isUploading} onFileSelect={handleFileSelect} />

              {uploadingFiles.length > 0 && (
                <div className="mt-6">
                  <FileProgressDisplay files={uploadingFiles} />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Feature Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-slate-900 border-2 border-b-4 border-slate-700 border-b-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">AI Chat</h3>
                <p className="text-sm text-slate-600">
                  Dosyalarınızla sohbet edin, sorular sorun ve anında yanıt alın
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-slate-900 border-2 border-b-4 border-slate-700 border-b-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Akıllı Notlar</h3>
                <p className="text-sm text-slate-600">
                  AI ile otomatik özetler ve organize edilmiş not sistemi
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-slate-900 border-2 border-b-4 border-slate-700 border-b-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Quiz Sistemi</h3>
                <p className="text-sm text-slate-600">
                  Kişiselleştirilmiş testlerle bilginizi pekiştirin
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Skip Option */}
          <div className="text-center">
            <Button variant="outline" onClick={handleSkip}>
              Şimdilik Atla, Sonra Yüklerim
            </Button>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="text-center space-y-8">
          {/* Success Animation */}
          <div className="relative">
            <div className="w-24 h-24 bg-green-500 border-4 border-b-8 border-green-400 border-b-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <div className="absolute inset-0 w-24 h-24 bg-green-500 rounded-2xl mx-auto animate-ping opacity-20" />
          </div>

          <div className="space-y-4">
            <Badge className="bg-green-100 text-green-800 border-2 border-b-4 border-green-200 border-b-green-300 px-4 py-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              ✨ Dosyalar Başarıyla Yüklendi
            </Badge>

            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Harika! Artık Hazırsınız
            </h2>

            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Dosyalarınız işlendi ve AI asistanınız hazır. Şimdi sohbet etmeye, notlar almaya ve
              öğrenmeye başlayabilirsiniz!
            </p>
          </div>

          {/* Next Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="bg-slate-50 border-2 border-b-4 border-slate-200 border-b-slate-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-slate-900 border-2 border-b-4 border-slate-700 border-b-slate-800 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">AI ile Sohbet Et</h3>
                <p className="text-sm text-slate-600">
                  Dosyanızla ilgili sorular sorun ve akıllı yanıtlar alın
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 border-2 border-b-4 border-slate-200 border-b-slate-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-slate-900 border-2 border-b-4 border-slate-700 border-b-slate-800 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Notları Keşfet</h3>
                <p className="text-sm text-slate-600">
                  Otomatik özetleri inceleyin ve notlarınızı organize edin
                </p>
              </CardContent>
            </Card>
          </div>

          <Button
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-lg font-semibold border-2 border-b-4 border-slate-700 border-b-slate-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            size="lg"
            onClick={handleGetStarted}
          >
            Platformu Keşfetmeye Başla
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      )}

      {/* Bottom Info */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Güvenli ve Şifreli</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>KVKK Uyumlu</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Ücretsiz Başlangıç</span>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

"use client";

import {
  ArrowRight,
  Bot,
  Check,
  FileText,
  MessageSquare,
  Play,
  Target,
  TrendingUp,
  Upload,
} from "lucide-react";
import {useState} from "react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Materyalleri Yükleyin",
      description: "PDF, Word ve metin dosyalarınızı kolayca yükleyin",
      icon: Upload,
      color: "blue",
      details: [
        "Sürükle-bırak ile hızlı yükleme",
        "Çoklu format desteği (PDF, DOC, TXT)",
        "Güvenli bulut depolama",
        "Otomatik içerik analizi",
      ],
      mockup: "upload",
    },
    {
      id: 2,
      title: "AI ile Sohbet Edin",
      description: "Akıllı asistanla etkileşime geçin ve sorular sorun",
      icon: MessageSquare,
      color: "purple",
      details: [
        "7/24 AI asistan desteği",
        "Tıp terminolojisi uzmanı",
        "Kişiselleştirilmiş açıklamalar",
        "Anında doğru yanıtlar",
      ],
      mockup: "chat",
    },
    {
      id: 3,
      title: "İlerleyin & Başarın",
      description: "Quiz'lerle test olun ve ilerleyişinizi takip edin",
      icon: Target,
      color: "green",
      details: [
        "Adaptif quiz sistemi",
        "Detaylı performans analizi",
        "Kişisel gelişim planları",
        "Başarı rozetleri",
      ],
      mockup: "progress",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-white to-slate-50" id="how-it-works">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <Badge className="px-4 py-2 text-primary border-primary/30 bg-primary/10 shadow-sm font-medium">
            Nasıl Çalışır
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            <span className="text-primary">3 Basit Adımda</span> Başlayın
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            MedAIst platformunu kullanarak tıp eğitiminizi nasıl dönüştürebileceğinizi keşfedin. Her
            adım başarınıza bir adım daha yaklaştırır.
          </p>
        </div>

        {/* Interactive Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {steps.map((step) => {
            const IconComponent = step.icon;
            const isActive = activeStep === step.id;

            return (
              <Card
                key={step.id}
                className={`relative cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                  isActive
                    ? step.color === "blue"
                      ? "border-blue-500 shadow-blue-100"
                      : step.color === "purple"
                        ? "border-purple-500 shadow-purple-100"
                        : "border-green-500 shadow-green-100"
                    : "border-slate-200 hover:border-slate-300"
                } ${isActive ? "scale-105" : ""}`}
                onClick={() => setActiveStep(step.id)}
              >
                <CardContent className="p-8">
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`h-12 w-12 rounded-2xl flex items-center justify-center ${
                        step.color === "blue"
                          ? "bg-blue-100 text-blue-600"
                          : step.color === "purple"
                            ? "bg-purple-100 text-purple-600"
                            : "bg-green-100 text-green-600"
                      }`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div
                      className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        step.color === "blue"
                          ? "bg-blue-500 text-white"
                          : step.color === "purple"
                            ? "bg-purple-500 text-white"
                            : "bg-green-500 text-white"
                      }`}
                    >
                      {step.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>

                    {/* Features List */}
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div
                            className={`h-5 w-5 rounded-full flex items-center justify-center ${
                              step.color === "blue"
                                ? "bg-blue-100"
                                : step.color === "purple"
                                  ? "bg-purple-100"
                                  : "bg-green-100"
                            }`}
                          >
                            <Check
                              className={`h-3 w-3 ${
                                step.color === "blue"
                                  ? "text-blue-600"
                                  : step.color === "purple"
                                    ? "text-purple-600"
                                    : "text-green-600"
                              }`}
                            />
                          </div>
                          <span className="text-sm text-slate-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Active Step Indicator */}
                  {isActive && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div
                        className={`h-4 w-4 rotate-45 ${
                          step.color === "blue"
                            ? "bg-blue-500"
                            : step.color === "purple"
                              ? "bg-purple-500"
                              : "bg-green-500"
                        }`}
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Dynamic Mockup Section */}
        <div className="relative">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 lg:p-16 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {steps.find((s) => s.id === activeStep)?.title} - Canlı Önizleme
              </h3>
              <p className="text-slate-300 text-lg">Gerçek platform deneyimini keşfedin</p>
            </div>

            {/* Mockup Browser Window */}
            <div className="bg-slate-100 rounded-2xl p-2 shadow-2xl">
              {/* Browser Header */}
              <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-t-xl border-b border-slate-200">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-slate-100 rounded-lg px-4 py-1.5 text-sm text-slate-600 max-w-xs">
                    🔒 medaist.com/dashboard
                  </div>
                </div>
              </div>

              {/* Dynamic Content Based on Active Step */}
              <div className="bg-white rounded-b-xl min-h-[400px] relative overflow-hidden">
                {activeStep === 1 && (
                  <div className="p-8 space-y-6">
                    <div className="text-center">
                      <div className="h-20 w-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Upload className="h-10 w-10 text-blue-600" />
                      </div>
                      <h4 className="text-xl font-semibold text-slate-900 mb-2">Dosya Yükleme</h4>
                      <p className="text-slate-600">Sürükle-bırak ile dosyalarınızı yükleyin</p>
                    </div>
                    <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 bg-blue-50">
                      <div className="text-center space-y-3">
                        <FileText className="h-12 w-12 text-blue-500 mx-auto" />
                        <div className="space-y-2">
                          <div className="h-2 bg-blue-200 rounded w-32 mx-auto" />
                          <div className="h-2 bg-blue-200 rounded w-24 mx-auto" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <Bot className="h-6 w-6 text-purple-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-slate-900">AI Asistan</h4>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-slate-50 rounded-xl p-4 max-w-sm">
                          <p className="text-slate-700">
                            Kalp yetmezliği hakkında soru sormak istiyorum
                          </p>
                        </div>
                        <div className="bg-purple-50 rounded-xl p-4 max-w-md ml-8">
                          <div className="flex items-start gap-3">
                            <Bot className="h-5 w-5 text-purple-600 mt-0.5" />
                            <div>
                              <p className="text-slate-700 mb-2">
                                Kalp yetmezliği ile ilgili hangi konuyu detaylandırmak istersiniz?
                              </p>
                              <div className="flex gap-2">
                                <Badge className="text-xs" variant="outline">
                                  Semptomlar
                                </Badge>
                                <Badge className="text-xs" variant="outline">
                                  Tedavi
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="text-xl font-semibold text-slate-900">İlerleme Takibi</h4>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-green-50 rounded-xl p-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600 mb-1">85%</div>
                          <div className="text-sm text-slate-600">Başarı Oranı</div>
                        </div>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600 mb-1">247</div>
                          <div className="text-sm text-slate-600">Çözülen Soru</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Kardiyoloji</span>
                        <span className="text-sm font-medium text-slate-900">92%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: "92%"}} />
                      </div>
                    </div>
                  </div>
                )}

                {/* Status Indicators */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="bg-green-100 rounded-full px-3 py-1 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-green-700 font-medium">Live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
              Hemen Başlamaya Hazır mısınız?
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Binlerce tıp öğrencisinin tercih ettiği platform ile akademik başarınızı artırın
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button>
                <Play />
                Ücretsiz Dene
              </Button>
              <Button variant="outline">
                Demo İzle
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HowItWorksSection;

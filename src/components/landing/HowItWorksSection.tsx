"use client";

import {Brain, Upload} from "lucide-react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {Badge} from "@/components/ui/badge";

const HowItWorksSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-slate-50" id="how-it-works">
      <MaxWidthWrapper>
        <div className="text-center space-y-4 mb-16">
          <Badge
            className="px-4 py-2 text-purple-600 border-purple-200 bg-purple-50"
            variant="outline"
          >
            Nasıl Çalışır
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            3 Adımda Başlayın
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            MedAIst platformunu kullanarak tıp eğitiminizi nasıl dönüştürebileceğinizi keşfedin
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Interactive Steps */}
          <div className="space-y-6">
            <Accordion className="w-full space-y-4" defaultValue="step-1" type="single">
              {/* Step 1 */}
              <AccordionItem value="step-1">
                <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                  <div className="flex items-center gap-4 text-left">
                    <div className="flex-shrink-0">
                      <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-blue-600">1</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        Materyalleri Yükleyin
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">
                        PDF dosyalarınızı ve ders materyallerinizi platforma yükleyin
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-3 text-slate-600">
                    <p>
                      Tıp notlarınızı, ders materyallerinizi ve PDF dosyalarınızı kolayca platforma
                      yükleyin. Sistem otomatik olarak içeriği analiz eder ve AI&apos;nın
                      anlayabileceği formata dönüştürür.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>PDF, DOC, TXT formatlarını destekler</li>
                      <li>Güvenli dosya depolama</li>
                      <li>Hızlı içerik işleme</li>
                      <li>Organize dosya yönetimi</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Step 2 */}
              <AccordionItem value="step-2">
                <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                  <div className="flex items-center gap-4 text-left">
                    <div className="flex-shrink-0">
                      <div className="h-6 w-6 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-purple-600">2</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-purple-600 transition-colors">
                        AI ile Etkileşime Geçin
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">
                        Akıllı asistanla sorular sorun, notlar alın ve içerik oluşturun
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-3 text-slate-600">
                    <p>
                      AI asistanınızla etkileşime geçin. Sorularınızı sorun, karmaşık konuları
                      basitleştirin, özet notlar oluşturun ve interaktif öğrenme deneyimi yaşayın.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>7/24 AI asistan desteği</li>
                      <li>Tıp terminolojisi uzmanı</li>
                      <li>Kişiselleştirilmiş açıklamalar</li>
                      <li>Görsel ve metin tabanlı yanıtlar</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Step 3 */}
              <AccordionItem value="step-3">
                <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                  <div className="flex items-center gap-4 text-left">
                    <div className="flex-shrink-0">
                      <div className="h-6 w-6 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-green-600">3</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-green-600 transition-colors">
                        İlerlemenizi Takip Edin
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">
                        Quiz&apos;lerle kendinizi test edin ve başarınızı ölçün
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-3 text-slate-600">
                    <p>
                      İnteraktif quiz&apos;lerle bilginizi test edin, ilerlemeni izleyin ve eksik
                      olduğunuz konuları belirleyin. Detaylı analitiklerle öğrenme sürecinizi
                      optimize edin.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Kişiselleştirilmiş quiz&apos;ler</li>
                      <li>Detaylı performans analizi</li>
                      <li>İlerleme takibi ve raporlama</li>
                      <li>Başarı rozetleri ve motivasyon</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Right Column - Visual Preview */}
          <div className="relative">
            <div className="sticky top-8">
              {/* Mockup Container */}
              <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 shadow-2xl">
                {/* Browser Window Mockup */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 bg-red-400 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                      <div className="w-3 h-3 bg-green-400 rounded-full" />
                    </div>
                    <div className="flex-1 text-center">
                      <div className="text-xs text-slate-500 bg-slate-200 rounded px-3 py-1 inline-block">
                        medaist.com/dashboard
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.1)_50%,transparent_75%,transparent)] bg-[length:20px_20px]" />

                    {/* Main Visual */}
                    <div className="relative text-center space-y-4">
                      <div className="h-20 w-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                        <Upload className="h-10 w-10 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-slate-800">Platform Önizleme</h3>
                        <p className="text-sm text-slate-600 max-w-xs">
                          Seçtiğiniz adıma göre ilgili ekran görüntüsü burada gösterilecek
                        </p>
                      </div>

                      {/* Feature Indicators */}
                      <div className="flex justify-center gap-2 mt-6">
                        <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse" />
                        <div
                          className="h-2 w-2 bg-purple-400 rounded-full animate-pulse"
                          style={{animationDelay: "0.5s"}}
                        />
                        <div
                          className="h-2 w-2 bg-green-400 rounded-full animate-pulse"
                          style={{animationDelay: "1s"}}
                        />
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-2 shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full" />
                        <span className="text-xs text-slate-600">Online</span>
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 bg-white rounded-lg px-3 py-2 shadow-lg">
                      <div className="flex items-center gap-2">
                        <Brain className="h-4 w-4 text-blue-500" />
                        <span className="text-xs text-slate-600">AI Aktif</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 h-8 w-8 bg-blue-200 rounded-full opacity-60" />
                <div className="absolute -bottom-4 -left-4 h-12 w-12 bg-purple-200 rounded-full opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HowItWorksSection;

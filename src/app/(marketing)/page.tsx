"use client";

import {
  ArrowRight,
  Award,
  Brain,
  CheckCircle,
  FileText,
  Menu,
  MessageSquare,
  Play,
  Quote,
  Shield,
  Sparkles,
  Star,
  Target,
  Users,
  X,
  Zap,
} from "lucide-react";
import Link from "next/link";
import {useState} from "react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200">
        <MaxWidthWrapper>
          <nav className="flex items-center justify-between py-3">
            <div className="flex lg:flex-1">
              <Link className="-m-1.5 p-1.5" href="/">
                <span className="text-2xl font-bold text-slate-900">
                  Med<span className="text-blue-600">AI</span>st
                </span>
              </Link>
            </div>

            <div className="flex lg:hidden">
              <button
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
                type="button"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            <div className="hidden lg:flex lg:gap-x-12">
              <Link
                className="text-sm font-semibold leading-6 text-slate-900 hover:text-blue-600 transition-colors"
                href="#features"
              >
                Özellikler
              </Link>
              <Link
                className="text-sm font-semibold leading-6 text-slate-900 hover:text-blue-600 transition-colors"
                href="#pricing"
              >
                Fiyatlar
              </Link>
              <Link
                className="text-sm font-semibold leading-6 text-slate-900 hover:text-blue-600 transition-colors"
                href="#about"
              >
                Hakkımızda
              </Link>
              <Link
                className="text-sm font-semibold leading-6 text-slate-900 hover:text-blue-600 transition-colors"
                href="#contact"
              >
                İletişim
              </Link>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
              <Link href="/login">
                <Button variant="outline">Giriş Yap</Button>
              </Link>
              <Link href="/dashboard">
                <Button>
                  Başla
                  <ArrowRight />
                </Button>
              </Link>
            </div>
          </nav>
        </MaxWidthWrapper>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
              <div className="flex items-center justify-between">
                <Link className="-m-1.5 p-1.5" href="/">
                  <span className="text-2xl font-bold text-slate-900">
                    Med<span className="text-blue-600">AI</span>st
                  </span>
                </Link>
                <button
                  className="-m-2.5 rounded-md p-2.5 text-slate-700"
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-slate-500/25">
                  <div className="space-y-2 py-6">
                    <Link
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                      href="#features"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Özellikler
                    </Link>
                    <Link
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                      href="#pricing"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Fiyatlar
                    </Link>
                    <Link
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                      href="#about"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Hakkımızda
                    </Link>
                    <Link
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                      href="#contact"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      İletişim
                    </Link>
                  </div>
                  <div className="py-6 space-y-2">
                    <Link href="/login">
                      <Button variant="outline">Giriş Yap</Button>
                    </Link>
                    <Link href="/dashboard">
                      <Button>
                        Başla
                        <ArrowRight />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Hero Section */}
      <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
        <MaxWidthWrapper>
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-0">
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]">
                <div className="absolute inset-0 bg-blue-100 rounded-full" />
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-center lg:text-left">
                <Badge className="mb-6 border-b-4 border-blue-200 bg-blue-50 text-blue-700 hover:-translate-y-0.5 transition-all duration-200 shadow-lg">
                  <Sparkles className="mr-1 h-3 w-3" />
                  Tıp Eğitiminde Yeni Nesil Platform
                </Badge>

                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                  <span className="text-blue-600">MedAIst</span>
                  <br />
                  <span className="text-3xl sm:text-4xl lg:text-5xl text-slate-700">
                    Akıllı Tıp Asistanın
                  </span>
                </h1>

                <p className="mt-6 text-lg leading-8 text-slate-600 max-w-xl lg:max-w-none">
                  Yapay zeka destekli chat, akıllı not alma ve interaktif quiz sistemi ile tıp
                  eğitiminizi bir sonraki seviyeye taşıyın. Öğrenme sürecinizi kişiselleştirin ve
                  başarınızı artırın.
                </p>

                <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 flex-wrap">
                  <Link href="/dashboard">
                    <Button>
                      Hemen Başla
                      <ArrowRight />
                    </Button>
                  </Link>

                  <Button variant="outline">
                    Demo İzle
                    <Brain />
                  </Button>
                </div>
              </div>

              {/* Right Column - Visual Mockup */}
              <div className="relative lg:order-last">
                <div className="relative mx-auto max-w-lg lg:max-w-none">
                  {/* Main Dashboard Mockup */}
                  <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    {/* Mockup Header */}
                    <div className="bg-slate-50 px-4 py-3 border-b border-slate-200">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                        <div className="w-3 h-3 bg-green-400 rounded-full" />
                        <div className="ml-4 text-sm font-medium text-slate-600">
                          MedAIst Dashboard
                        </div>
                      </div>
                    </div>

                    {/* Mockup Content */}
                    <div className="p-6 space-y-6">
                      {/* Chat Interface Mockup */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 mb-4">
                          <MessageSquare className="h-5 w-5 text-blue-600" />
                          <span className="font-semibold text-slate-900">AI Chat Asistanı</span>
                        </div>

                        <div className="space-y-2">
                          <div className="bg-slate-100 rounded-lg p-3 max-w-xs">
                            <p className="text-sm text-slate-700">
                              Kalp anatomisi hakkında bilgi verir misin?
                            </p>
                          </div>
                          <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs ml-auto">
                            <p className="text-sm">
                              Tabii ki! Kalp, 4 odacıklı kas bir organdır...
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Stats Cards */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 rounded-lg p-4 border-b-4 border-blue-200">
                          <div className="text-2xl font-bold text-blue-600">12</div>
                          <div className="text-xs text-slate-600">Tamamlanan Quiz</div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4 border-b-4 border-green-200">
                          <div className="text-2xl font-bold text-green-600">85%</div>
                          <div className="text-xs text-slate-600">Başarı Oranı</div>
                        </div>
                      </div>

                      {/* Notes Preview */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium text-slate-900">Son Notlar</span>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3 border-b-2 border-green-200">
                          <div className="text-sm font-medium text-slate-900">
                            Kardiyoloji - Kalp Yetmezliği
                          </div>
                          <div className="text-xs text-slate-600 mt-1">2 dakika önce eklendi</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-blue-100 rounded-full p-3 border-b-4 border-blue-200 shadow-lg animate-bounce">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-green-100 rounded-full p-3 border-b-4 border-green-200 shadow-lg animate-pulse">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>

                  {/* Background decoration */}
                  <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl" />
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-100">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 border-b-4 border-blue-200 shadow-lg">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="mt-4">
                <p className="text-3xl font-bold text-slate-900">10,000+</p>
                <p className="text-sm text-slate-600">Aktif Öğrenci</p>
              </div>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 border-b-4 border-green-200 shadow-lg">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <div className="mt-4">
                <p className="text-3xl font-bold text-slate-900">95%</p>
                <p className="text-sm text-slate-600">Başarı Oranı</p>
              </div>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 border-b-4 border-purple-200 shadow-lg">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <div className="mt-4">
                <p className="text-3xl font-bold text-slate-900">50%</p>
                <p className="text-sm text-slate-600">Hızlı Öğrenme</p>
              </div>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 border-b-4 border-orange-200 shadow-lg">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <div className="mt-4">
                <p className="text-3xl font-bold text-slate-900">24/7</p>
                <p className="text-sm text-slate-600">AI Destek</p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white" id="features">
        <MaxWidthWrapper>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Öğrenme Deneyiminizi <span className="text-blue-600">Dönüştürün</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Yapay zeka destekli araçlarımızla tıp eğitiminizi kişiselleştirin ve öğrenme hızınızı
              artırın
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {/* AI Chat Feature */}
              <Card className="relative overflow-hidden border-b-4 border-blue-200 bg-blue-50 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 border-b-2 border-blue-600 shadow-lg">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-900">
                      AI Chat Asistanı
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    7/24 size yardımcı olan akıllı asistanımız ile tıbbi sorularınızı sorun,
                    karmaşık konuları basitleştirin ve anında cevaplar alın.
                  </CardDescription>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2" />
                      Anında sorular ve cevaplar
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2" />
                      Karmaşık konuları basitleştirme
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2" />
                      Kişiselleştirilmiş öğrenme
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Smart Notes Feature */}
              <Card className="relative overflow-hidden border-b-4 border-green-200 bg-gradient-to-br from-green-50 via-white to-green-50/30 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500 border-b-2 border-green-600">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      Akıllı Not Sistemi
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    Dosyalarınızı yükleyin, AI&apos;ın analiz etmesini sağlayın ve otomatik olarak
                    organize edilmiş notlar oluşturun. Öğrenme materyallerinizi kolayca yönetin.
                  </CardDescription>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2" />
                      Dosya yükleme ve analiz
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2" />
                      Otomatik organizasyon
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2" />
                      Akıllı etiketleme
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Quiz Feature */}
              <Card className="relative overflow-hidden border-b-4 border-purple-200 bg-gradient-to-br from-purple-50 via-white to-purple-50/30 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-b-2 border-purple-600">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      İnteraktif Quiz
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    Kişiselleştirilmiş quizler ile bilginizi test edin, güçlü ve zayıf yönlerinizi
                    keşfedin. İlerleme takibi ile öğrenme hedefinize ulaşın.
                  </CardDescription>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2" />
                      Kişiselleştirilmiş sorular
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2" />
                      İlerleme analizi
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2" />
                      Performans raporları
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-slate-50">
        <MaxWidthWrapper>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Nasıl <span className="text-blue-600">Çalışır?</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Sadece üç basit adımda öğrenme deneyiminizi dönüştürün
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-12 lg:max-w-none lg:grid-cols-3">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 border-b-4 border-blue-800 shadow-lg">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-blue-200 border-2 border-blue-400" />
                </div>
                <h3 className="mt-8 text-lg font-semibold text-slate-900">Kayıt Olun</h3>
                <p className="mt-4 text-slate-600 max-w-sm">
                  Ücretsiz hesabınızı oluşturun ve hemen MedAIst platformuna erişim sağlayın. Sadece
                  birkaç dakika sürer.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-600 border-b-4 border-green-800 shadow-lg">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-green-200 border-2 border-green-400" />
                </div>
                <h3 className="mt-8 text-lg font-semibold text-slate-900">İçerik Yükleyin</h3>
                <p className="mt-4 text-slate-600 max-w-sm">
                  Ders notlarınızı, PDF&apos;lerinizi yükleyin. AI asistanımız otomatik olarak
                  analiz edip organize eder.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-600 border-b-4 border-purple-800 shadow-lg">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-purple-200 border-2 border-purple-400" />
                </div>
                <h3 className="mt-8 text-lg font-semibold text-slate-900">Öğrenmeye Başlayın</h3>
                <p className="mt-4 text-slate-600 max-w-sm">
                  AI chat ile sorular sorun, quiz çözün ve kişiselleştirilmiş öğrenme deneyiminizin
                  keyfini çıkarın.
                </p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <MaxWidthWrapper>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Öğrencilerimiz <span className="text-blue-600">Ne Diyor?</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Binlerce tıp öğrencisi MedAIst ile başarısını artırdı
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Testimonial 1 */}
            <Card className="bg-slate-50 border-b-4 border-blue-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-6">
                  &quot;MedAIst sayesinde anatomiden klinik tıpa kadar her konuda anında yardım
                  alabiliyorum. Özellikle AI chat özelliği gerçekten çok faydalı!&quot;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-200">
                    <span className="text-lg font-semibold text-blue-600">AY</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Ayşe Yılmaz</p>
                    <p className="text-sm text-slate-600">Tıp Fakültesi 4. Sınıf</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-slate-50 border-b-4 border-green-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-green-600 mb-4" />
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-6">
                  &quot;Quiz sistemi gerçekten harika! Hangi konularda eksik olduğumu görebiliyor ve
                  ona göre çalışma planı yapabiliyorum.&quot;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center border-2 border-green-200">
                    <span className="text-lg font-semibold text-green-600">MK</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Mehmet Kaya</p>
                    <p className="text-sm text-slate-600">Tıp Fakültesi 3. Sınıf</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-slate-50 border-b-4 border-purple-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-purple-600 mb-4" />
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-6">
                  &quot;Not alma sistemi çok pratik. PDF&apos;lerimi yüklüyorum, AI organize ediyor.
                  Sınava hazırlanırken çok zaman kazandırıyor.&quot;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center border-2 border-purple-200">
                    <span className="text-lg font-semibold text-purple-600">ZA</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Zehra Arslan</p>
                    <p className="text-sm text-slate-600">Tıp Fakültesi 5. Sınıf</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Demo/Video Section */}
      <section className="py-24 bg-slate-100">
        <MaxWidthWrapper>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Platformu <span className="text-blue-600">Keşfedin</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              MedAIst&apos;in tüm özelliklerini bu demo video ile keşfedin
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="relative aspect-video rounded-2xl bg-slate-900 border-b-4 border-slate-700 shadow-2xl overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-blue-600/30 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Play className="h-8 w-8 text-blue-600 ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg font-semibold">MedAIst Platform Tanıtımı</p>
                <p className="text-sm opacity-80">3 dakikada tüm özellikleri keşfedin</p>
              </div>
              {/* Demo image placeholder */}
              <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                <div className="text-center text-white/70">
                  <Brain className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-xl font-semibold">Platform Demo</p>
                  <p className="text-sm">Yakında eklenecek</p>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* CTA Section */}
      <section className="relative bg-slate-100 px-6 py-24 sm:py-32 lg:px-8">
        <MaxWidthWrapper className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tıp Kariyerinizi <span className="text-blue-600">Hızlandırın</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Bugün başlayın ve binlerce tıp öğrencisinin tercih ettiği platformla öğrenme
            deneyiminizi dönüştürün.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/dashboard">
              <Button size={"lg"}>
                Ücretsiz Başla
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Trust & Security Section */}
      <section className="py-16 bg-white">
        <MaxWidthWrapper>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Güven ve <span className="text-blue-600">Güvenlik</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Verileriniz güvende, eğitiminiz kesintisiz
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 border-b-4 border-green-200 shadow-lg mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">SSL Güvenlik</h3>
              <p className="text-sm text-slate-600">
                256-bit SSL şifreleme ile verileriniz korunur
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 border-b-4 border-blue-200 shadow-lg mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">KVKK Uyumlu</h3>
              <p className="text-sm text-slate-600">
                Kişisel veriler yasalara uygun şekilde işlenir
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 border-b-4 border-purple-200 shadow-lg mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">%99.9 Uptime</h3>
              <p className="text-sm text-slate-600">Kesintisiz hizmet için güçlü altyapı</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 border-b-4 border-orange-200 shadow-lg mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">7/24 Destek</h3>
              <p className="text-sm text-slate-600">Her zaman yanınızda olan uzman destek ekibi</p>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-slate-500" />
              <span className="text-sm font-medium text-slate-600">ISO 27001</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-slate-500" />
              <span className="text-sm font-medium text-slate-600">KVKK Uyumlu</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-slate-500" />
              <span className="text-sm font-medium text-slate-600">AWS Hosting</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-slate-500" />
              <span className="text-sm font-medium text-slate-600">10K+ Kullanıcı</span>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <Link className="flex items-center" href="/">
                <span className="text-2xl font-bold">
                  Med<span className="text-blue-400">AI</span>st
                </span>
              </Link>
              <p className="mt-4 text-slate-300 max-w-md">
                Yapay zeka destekli tıp eğitimi platformu. Modern teknoloji ile tıp öğrenimini daha
                etkili ve verimli hale getiriyoruz.
              </p>
              <div className="mt-6 flex space-x-6">
                <a className="text-slate-400 hover:text-white transition-colors" href="#">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a className="text-slate-400 hover:text-white transition-colors" href="#">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Hızlı Erişim</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    className="text-slate-300 hover:text-white transition-colors"
                    href="#features"
                  >
                    Özellikler
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-slate-300 hover:text-white transition-colors"
                    href="#pricing"
                  >
                    Fiyatlar
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-slate-300 hover:text-white transition-colors"
                    href="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-300 hover:text-white transition-colors" href="/login">
                    Giriş Yap
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Destek</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    className="text-slate-300 hover:text-white transition-colors"
                    href="#contact"
                  >
                    İletişim
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-300 hover:text-white transition-colors" href="#help">
                    Yardım Merkezi
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-slate-300 hover:text-white transition-colors"
                    href="#privacy"
                  >
                    Gizlilik
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-300 hover:text-white transition-colors" href="#terms">
                    Kullanım Koşulları
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800">
            <p className="text-center text-slate-400">© 2024 MedAIst. Tüm hakları saklıdır.</p>
          </div>
        </MaxWidthWrapper>
      </footer>
    </>
  );
};

export default LandingPage;

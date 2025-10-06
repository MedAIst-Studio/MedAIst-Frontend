import {
  BarChart3,
  CheckCircle,
  Clock,
  FileText,
  Lightbulb,
  MessageSquare,
  Monitor,
  Shield,
  Star,
  Target,
  Upload,
  Users,
  Zap,
} from "lucide-react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

const FeaturesSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-white to-slate-50" id="features">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <Badge
            className="px-6 py-3 text-slate-700 border-slate-300 bg-white shadow-sm font-medium"
            variant="outline"
          >
            ✨ Gelişmiş Özellikler
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Tıp Eğitimini <span className="text-slate-600">Yeniden Tanımlıyoruz</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Binlerce tıp öğrencisi tarafından güvenilen, AI destekli öğrenme platformu ile akademik
            başarınızı maksimize edin
          </p>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 mt-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>15,000+ Aktif Öğrenci</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span>4.9/5 Kullanıcı Puanı</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>KVKK Uyumlu</span>
            </div>
          </div>
        </div>

        {/* Main Features with Screenshots */}
        <div className="space-y-32">
          {/* AI Chat Assistant */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <Badge className="px-3 py-1 bg-green-100 text-green-800 border-green-200">
                  En Popüler
                </Badge>
              </div>

              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                  AI Chat Asistanı
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Gelişmiş yapay zeka teknolojisi ile tıbbi sorularınıza anında, doğru ve kapsamlı
                  yanıtlar alın. Karmaşık tıbbi konuları basit dille açıklayan kişisel asistanınız.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Anında Yanıt</h4>
                    <p className="text-sm text-slate-600">Milisaniyeler içinde doğru cevap</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                    <Clock className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">7/24 Erişim</h4>
                    <p className="text-sm text-slate-600">Her zaman yanınızda</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5">
                    <Lightbulb className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Akıllı Öneriler</h4>
                    <p className="text-sm text-slate-600">Kişiselleştirilmiş çalışma tavsiyeleri</p>
                  </div>
                </div>
              </div>

              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                AI Asistanı Dene →
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 bg-slate-900 rounded-full" />
                    <div>
                      <div className="h-2 w-20 bg-slate-200 rounded" />
                      <div className="h-1.5 w-16 bg-slate-100 rounded mt-1" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-50 rounded-lg p-3">
                      <div className="h-2 w-full bg-slate-200 rounded" />
                      <div className="h-2 w-3/4 bg-slate-200 rounded mt-2" />
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 ml-8">
                      <div className="h-2 w-full bg-blue-200 rounded" />
                      <div className="h-2 w-1/2 bg-blue-200 rounded mt-2" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-green-500 rounded-full p-3 shadow-lg">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          {/* Smart Notes System */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-slate-600" />
                      <span className="font-medium text-slate-900">Kardiyoloji.pdf</span>
                    </div>
                    <Badge className="text-xs bg-green-100 text-green-800">İşlendi</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 w-full bg-slate-100 rounded" />
                    <div className="h-3 w-4/5 bg-slate-100 rounded" />
                    <div className="h-3 w-3/5 bg-blue-100 rounded" />
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="h-2 bg-slate-100 rounded" />
                      <div className="h-2 bg-slate-100 rounded" />
                      <div className="h-2 bg-slate-100 rounded" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <div className="bg-white rounded-lg p-3 flex-1 shadow-sm">
                    <div className="h-2 w-full bg-purple-100 rounded" />
                    <div className="h-1.5 w-3/4 bg-purple-50 rounded mt-1" />
                  </div>
                  <div className="bg-white rounded-lg p-3 flex-1 shadow-sm">
                    <div className="h-2 w-full bg-green-100 rounded" />
                    <div className="h-1.5 w-1/2 bg-green-50 rounded mt-1" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 rounded-full p-3 shadow-lg">
                <FileText className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <Badge className="px-3 py-1 bg-blue-100 text-blue-800 border-blue-200">
                  AI Powered
                </Badge>
              </div>

              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                  Akıllı Not Alma Sistemi
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  PDF&apos;lerinizi yükleyin, AI ile anında özetleyin ve interaktif sohbetler
                  oluşturun.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Upload className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Hızlı PDF Yükleme</h4>
                    <p className="text-slate-600">Sürükle-bırak ile anında dosya yükleme</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">AI Özet Çıkarma</h4>
                    <p className="text-slate-600">Saniyeler içinde akıllı özetler</p>
                  </div>
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                Not Sistemi Keşfet →
              </Button>
            </div>
          </div>

          {/* Interactive Quiz Engine */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <Badge className="px-3 py-1 bg-emerald-100 text-emerald-800 border-emerald-200">
                  Adaptif Sistem
                </Badge>
              </div>

              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                  İnteraktif Quiz Motoru
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Kişiselleştirilmiş testlerle bilginizi pekiştirin. Eksik konularınızı belirleyin
                  ve hedefli çalışma planları oluşturun.
                </p>
              </div>

              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                Quiz Motoru Dene →
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-semibold text-slate-900">Kardiyoloji Quiz #1</h4>
                    <Badge className="text-xs bg-green-100 text-green-800">15/20 Doğru</Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="h-3 w-full bg-slate-200 rounded mb-2" />
                      <div className="h-3 w-3/4 bg-slate-200 rounded" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-2 bg-green-50 rounded border border-green-200">
                        <div className="h-3 w-3 bg-green-500 rounded-full" />
                        <div className="h-2 w-32 bg-green-200 rounded" />
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-slate-50 rounded">
                        <div className="h-3 w-3 bg-slate-300 rounded-full" />
                        <div className="h-2 w-28 bg-slate-200 rounded" />
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-slate-50 rounded">
                        <div className="h-3 w-3 bg-slate-300 rounded-full" />
                        <div className="h-2 w-24 bg-slate-200 rounded" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between items-center">
                    <div className="text-sm text-slate-500">Soru 18/20</div>
                    <div className="flex gap-2">
                      <div className="h-8 w-16 bg-slate-200 rounded-lg" />
                      <div className="h-8 w-16 bg-green-500 rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-green-500 rounded-full p-3 shadow-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats & Trust Section */}
        <div className="mt-32">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 lg:p-16 text-white">
            <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">Binlerce Öğrenci Güveniyor</h3>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Türkiye&apos;nin en kapsamlı tıp eğitimi platformu olarak, öğrencilerin akademik
                başarısını destekliyoruz
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">15K+</div>
                <div className="text-slate-300 font-medium">Aktif Öğrenci</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">4.9</div>
                <div className="text-slate-300 font-medium">Kullanıcı Puanı</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">1M+</div>
                <div className="text-slate-300 font-medium">Çözülen Soru</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">98%</div>
                <div className="text-slate-300 font-medium">Memnuniyet</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Advanced Analytics */}
              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto border border-white/20">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 text-lg">Gelişmiş Analitik</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Performansınızı izleyin, güçlü ve zayıf yönlerinizi keşfedin
                  </p>
                </div>
              </div>

              {/* Cross-Platform */}
              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto border border-white/20">
                  <Monitor className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 text-lg">Çoklu Platform</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Web, iOS, Android - her cihazda sorunsuz deneyim
                  </p>
                </div>
              </div>

              {/* Enterprise Security */}
              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto border border-white/20">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 text-lg">Kurumsal Güvenlik</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    KVKK uyumlu, SSL şifreli, güvenli veri koruma
                  </p>
                </div>
              </div>

              {/* 24/7 Expert Support */}
              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto border border-white/20">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 text-lg">Uzman Destek</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">7/24 teknik destek</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <Button className="bg-white text-slate-900 hover:bg-slate-100 px-12 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                Ücretsiz Başlayın
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default FeaturesSection;

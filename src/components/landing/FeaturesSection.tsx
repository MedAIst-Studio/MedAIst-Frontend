import {
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle,
  Clock,
  FileText,
  Lightbulb,
  MessageSquare,
  Monitor,
  PieChart,
  Shield,
  Target,
  TrendingUp,
  Upload,
  Zap,
} from "lucide-react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const FeaturesSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-white" id="features">
      <MaxWidthWrapper>
        <div className="text-center space-y-4 mb-16">
          <Badge
            className="px-4 py-2 text-slate-600 border-slate-200 bg-slate-50"
            variant="outline"
          >
            Özellikler
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tıp Eğitimini Dönüştüren Platform
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Modern tıp öğrencilerinin ihtiyaçları için özel olarak tasarlanmış kapsamlı platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* AI Chat Assistant */}
          <Card>
            <CardHeader className="space-y-4">
              <div className="h-12 w-12 bg-slate-900 rounded-xl flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl text-slate-900 mb-2">AI Chat Asistanı</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Tıbbi sorularınızı sorun, anında akıllı yanıtlar alın. 7/24 kişisel asistanınız
                  ile karmaşık konuları basitleştirin.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-slate-400" />
                  <span className="text-sm text-slate-600">Anında yanıt</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-slate-400" />
                  <span className="text-sm text-slate-600">7/24 erişilebilir</span>
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-slate-400" />
                  <span className="text-sm text-slate-600">Tıp uzmanı AI</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Smart Notes System */}
          <Card>
            <CardHeader className="space-y-4">
              <div className="h-12 w-12 bg-slate-900 rounded-xl flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl text-slate-900 mb-2">Akıllı Not Alma</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  PDF&apos;leri yükleyin, AI ile özetleyin, interaktif notlar oluşturun. Organize
                  edilmiş bilgi sistemi kurun.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Upload className="h-4 w-4 text-slate-400" />
                  <span className="text-sm text-slate-600">PDF yükleme</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-slate-400" />
                  <span className="text-sm text-slate-600">Hızlı özet</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-slate-400" />
                  <span className="text-sm text-slate-600">İnteraktif notlar</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Quiz Engine */}
          <Card>
            <CardHeader className="space-y-4">
              <div className="h-12 w-12 bg-slate-900 rounded-xl flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl text-slate-900 mb-2">İnteraktif Quiz</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Kişiselleştirilmiş testlerle bilginizi pekiştirin. Adaptif algoritmayla eksik
                  konularınızı belirleyin ve güçlendirin.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <PieChart className="h-4 w-4 text-slate-400" />
                  <span className="text-sm text-slate-600">Analitik raporlar</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-slate-400" />
                  <span className="text-sm text-slate-600">İlerleme takibi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-slate-400" />
                  <span className="text-sm text-slate-600">Akıllı öneriler</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Features */}
        <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ek Özellikler</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Tıp eğitiminizi destekleyen diğer araçlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Progress Tracking */}
            <div className="text-center space-y-3">
              <div className="h-12 w-12 bg-slate-900 rounded-xl flex items-center justify-center mx-auto">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">İlerleme Takibi</h4>
                <p className="text-sm text-slate-600">Detaylı analitik raporlar</p>
              </div>
            </div>

            {/* Multi-Platform */}
            <div className="text-center space-y-3">
              <div className="h-12 w-12 bg-slate-900 rounded-xl flex items-center justify-center mx-auto">
                <Monitor className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Çoklu Platform</h4>
                <p className="text-sm text-slate-600">Web, mobil, tablet desteği</p>
              </div>
            </div>

            {/* Security */}
            <div className="text-center space-y-3">
              <div className="h-12 w-12 bg-slate-900 rounded-xl flex items-center justify-center mx-auto">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Güvenlik</h4>
                <p className="text-sm text-slate-600">KVKK uyumlu veri koruması</p>
              </div>
            </div>

            {/* 24/7 Support */}
            <div className="text-center space-y-3">
              <div className="h-12 w-12 bg-slate-900 rounded-xl flex items-center justify-center mx-auto">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">7/24 Destek</h4>
                <p className="text-sm text-slate-600">Sürekli teknik destek</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default FeaturesSection;

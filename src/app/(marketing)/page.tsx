"use client";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  BarChart3,
  Brain,
  CheckCircle,
  ChevronRight,
  Eye,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  MessageCircle,
  Play,
  Star,
  Stethoscope,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Brain,
    title: "AI Destekli Öğrenme",
    description:
      "Gelişmiş yapay zeka algoritmaları ile kişiselleştirilmiş eğitim deneyimi yaşayın.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: FileText,
    title: "Akıllı Belge Özeti",
    description: "Ders notlarınızı yükleyin, AI anında önemli noktaları çıkarsın ve özetlesin.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: MessageCircle,
    title: "Interaktif Quiz Sistemi",
    description:
      "Belgelerinizden otomatik oluşturulan sorularla bilginizi test edin ve geliştirin.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: BarChart3,
    title: "Detaylı İlerleme Takibi",
    description: "Öğrenme sürecinizi analiz edin, güçlü ve zayıf yönlerinizi keşfedin.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Heart,
    title: "7/24 AI Asistan",
    description: "Tıbbi sorularınızı her zaman cevaplayabilen akıllı asistanınız yanınızda.",
    color: "bg-red-500/10 text-red-600",
  },
  {
    icon: Users,
    title: "Topluluk Desteği",
    description: "Binlerce tıp öğrencisi ile bilgi paylaşımı yapın ve birlikte gelişin.",
    color: "bg-indigo-500/10 text-indigo-600",
  },
];

const testimonials = [
  {
    name: "Ayşe Kaya",
    role: "6. Sınıf Tıp Öğrencisi",
    university: "Hacettepe Üniversitesi",
    content:
      "MedAIst sayesinde sınav hazırlığım çok daha etkili oldu. AI'nın oluşturduğu quizler ve özetler gerçekten işe yarıyor.",
    rating: 5,
    avatar: "AK",
  },
  {
    name: "Mehmet Özkan",
    role: "4. Sınıf Tıp Öğrencisi",
    university: "İstanbul Üniversitesi",
    content:
      "Ders notlarımı hızlıca özet haline getirmesi harika. Çok daha az zamanda çok daha fazla şey öğrenebiliyorum.",
    rating: 5,
    avatar: "MÖ",
  },
  {
    name: "Zehra Demir",
    role: "5. Sınıf Tıp Öğrencisi",
    university: "Ankara Üniversitesi",
    content:
      "AI asistan 24 saat kullanılabiliyor. Geç saatlerde bile sorularıma hemen cevap alabiliyorum. Çok pratik.",
    rating: 5,
    avatar: "ZD",
  },
];

const stats = [
  {number: "50K+", label: "Aktif Öğrenci", icon: GraduationCap, subtext: "Güvenilir topluluk"},
  {
    number: "1M+",
    label: "Oluşturulan Quiz",
    icon: MessageCircle,
    subtext: "Sürekli büyüyen içerik",
  },
  {number: "98%", label: "Memnuniyet Oranı", icon: Heart, subtext: "Mutlu kullanıcılar"},
  {number: "24/7", label: "AI Desteği", icon: Brain, subtext: "Kesintisiz hizmet"},
];

const pricingPlans = [
  {
    name: "Başlangıç",
    price: "Ücretsiz",
    description: "Tıp öğrencileri için temel özellikler",
    features: ["5 belge özeti / ay", "10 AI quiz / ay", "Temel AI chat", "Topluluk erişimi"],
    popular: false,
    cta: "Ücretsiz Başla",
  },
  {
    name: "Pro",
    price: "₺49/ay",
    description: "Ciddi öğrenciler için gelişmiş özellikler",
    features: [
      "Sınırsız belge özeti",
      "Sınırsız AI quiz",
      "Gelişmiş AI chat",
      "Detaylı analytics",
      "Öncelikli destek",
      "Özel çalışma grupları",
    ],
    popular: true,
    cta: "Pro Ol",
  },
  {
    name: "Kurumsal",
    price: "₺99/ay",
    description: "Kurumlar ve araştırma için",
    features: [
      "Pro'daki tüm özellikler",
      "Kurumsal dashboard",
      "API erişimi",
      "Özel entegrasyonlar",
      "Dedicated support",
      "Bulk licensing",
    ],
    popular: false,
    cta: "İletişime Geç",
  },
];

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MedAIst
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
                Özellikler
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Yorumlar
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
                Fiyatlandırma
              </a>
              <Button variant="outline">Giriş Yap</Button>
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Başla
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <Badge className="mb-6 bg-primary/10 text-primary px-4 py-2">
            <Brain className="w-4 h-4 mr-2" />
            Türkiye&apos;nin #1 AI Tıp Asistanı
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Tıp Eğitimini
            </span>
            <br />
            <span className="text-gray-900">AI ile Dönüştür</span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Yapay zeka teknolojisiyle tıp eğitiminizi bir üst seviyeye taşıyın. Belgelerinizi özet
            haline getirin, akıllı quizler çözün ve AI asistanınızla 7/24 öğrenmeye devam edin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Ücretsiz Başla
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
              <Eye className="w-5 h-5 mr-2" />
              Demo İzle
            </Button>
          </div>

          {/* Demo Preview */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 flex gap-2 items-center px-4">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">AI Tıp Asistanı</h3>
                  <p className="text-gray-600">Demo ekranı yakında...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Çok Daha Çarpıcı */}
      <section className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              🔥{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                ÇILGIN
              </span>{" "}
              RAKAMLAR
            </h2>
            <p className="text-xl text-gray-300">Bu rakamlar gerçek ve sürekli artıyor! 📈</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                >
                  <CardContent className="p-8 text-center">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 w-fit mx-auto mb-6 shadow-2xl">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-white mb-3 animate-pulse">
                      {stat.number}
                    </div>
                    <div className="text-xl font-bold text-yellow-300 mb-2">{stat.label}</div>
                    <div className="text-sm text-gray-300 font-medium">{stat.subtext}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
              <Zap className="w-4 h-4 mr-2" />
              Güçlü Özellikler
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Tıp Eğitiminizi <span className="text-blue-600">AI ile Güçlendirin</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern yapay zeka teknolojileri ile tıp öğrencilerine özel olarak tasarlanmış kapsamlı
              öğrenme platformu.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-8">
                    <div className={`p-3 rounded-lg ${feature.color} w-fit mb-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    <div className="mt-4">
                      <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                        Daha fazla bilgi
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-100">
              <Users className="w-4 h-4 mr-2" />
              Öğrenci Yorumları
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              <span className="text-green-600">Binlerce</span> Öğrenci Güveniyor
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Türkiye&apos;nin en büyük tıp öğrencisi topluluğunun tercihi MedAIst
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-xs text-gray-500">{testimonial.university}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
              <Award className="w-4 h-4 mr-2" />
              Fiyatlandırma
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Bütçenize Uygun <span className="text-purple-600">Plan Seçin</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Öğrenci dostu fiyatlarla en iyi AI tıp eğitimi deneyimi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`border-2 relative ${
                  plan.popular
                    ? "border-purple-500 shadow-xl scale-105"
                    : "border-gray-200 shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-purple-600 text-white px-6 py-2">En Popüler</Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-4 text-gray-900">
                    {plan.price}
                    {plan.name !== "Başlangıç" && (
                      <span className="text-lg text-gray-500">/ay</span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Tıp Kariyerinizi AI ile Şekillendirin
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Bugün başlayın ve binlerce tıp öğrencisi gibi siz de AI destekli eğitimin
            avantajlarından faydalanın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Hemen Başla
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
            >
              İletişime Geç
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">MedAIst</span>
              </div>
              <p className="text-gray-400 mb-4">
                Tıp öğrencileri için AI destekli öğrenme platformu. Eğitiminizi bir sonraki seviyeye
                taşıyın.
              </p>
              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 cursor-pointer">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 cursor-pointer">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Özellikler
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Fiyatlandırma
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Entegrasyonlar
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Destek</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Yardım Merkezi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    İletişim
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Topluluk
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Durum Sayfası
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Şirket</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Kariyer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Basın Kiti
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 MedAIst. Tüm hakları saklıdır.</p>
            <div className="flex gap-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Kullanım Şartları
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Çerezler
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;

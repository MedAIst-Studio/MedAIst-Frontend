import {ArrowRight, HelpCircle, Zap} from "lucide-react";
import {Metadata} from "next";
import Link from "next/link";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {PricingCards} from "@/components/shared/PricingCards";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Fiyatlandırma - MedAIst",
  description:
    "MedAIst'in esnek fiyatlandırma planlarını keşfedin. Ücretsiz plan ile başlayın, ihtiyacınıza göre yükseltin.",
  keywords: ["fiyat", "plan", "ücretsiz", "premium", "tıp eğitimi", "AI"],
  openGraph: {
    title: "Fiyatlandırma - MedAIst",
    description: "Esnek fiyatlandırma planları ile tıp eğitimini dönüştürün.",
  },
};

const PricingPage = () => {
  const plans = [
    {
      name: "Başlangıç",
      price: "Ücretsiz",
      yearlyPrice: "Ücretsiz",
      period: "Her zaman",
      yearlyPeriod: "Her zaman",
      description: "Temel özelliklerle başlamak için mükemmel",
      badge: "Popüler",
      badgeVariant: "secondary" as const,
      features: [
        "Günde 10 AI chat mesajı",
        "5 not sayfası",
        "Temel quiz sistemi",
        "Web erişim",
        "Topluluk desteği",
      ],
      buttonText: "Ücretsiz Başla",
      buttonVariant: "outline" as const,
      recommended: false,
    },
    {
      name: "Pro",
      price: "₺99",
      yearlyPrice: "₺79",
      period: "/ay",
      yearlyPeriod: "/ay",
      description: "Ciddi tıp öğrencileri için gelişmiş özellikler",
      badge: "En Popüler",
      badgeVariant: "default" as const,
      features: [
        "Sınırsız AI chat",
        "Sınırsız not sayfası",
        "Gelişmiş quiz analitikleri",
        "PDF yükleme ve analiz",
        "Mobil uygulama",
        "Öncelikli destek",
        "Özel çalışma programı",
      ],
      buttonText: "Pro'ya Geç",
      buttonVariant: "default" as const,
      recommended: true,
    },
    {
      name: "Ekip",
      price: "₺299",
      yearlyPrice: "₺239",
      period: "/ay",
      yearlyPeriod: "/ay",
      description: "Çalışma grupları ve kurumlar için",
      badge: "Kurumsal",
      badgeVariant: "secondary" as const,
      features: [
        "Pro'nun tüm özellikleri",
        "10 kişiye kadar",
        "Ekip analitikleri",
        "Ortak çalışma alanları",
        "Özel entegrasyon",
        "Dedicated account manager",
        "SLA desteği",
      ],
      buttonText: "Ekip Planı",
      buttonVariant: "outline" as const,
      recommended: false,
    },
  ];

  const faqs = [
    {
      question: "Planımı istediğim zaman değiştirebilir miyim?",
      answer:
        "Evet, planınızı istediğiniz zaman yükseltebilir veya düşürebilirsiniz. Değişiklik anında geçerli olur.",
    },
    {
      question: "Ücretsiz plan ne kadar süreyle kullanılabilir?",
      answer: "Ücretsiz plan süresiz kullanılabilir. Herhangi bir zaman sınırı yoktur.",
    },
    {
      question: "İptal ettiğimde verilerim ne olur?",
      answer:
        "Verileriniz 30 gün boyunca saklanır. Bu süre içinde planınızı yeniden aktifleştirebilirsiniz.",
    },
    {
      question: "Kurumsal indirim var mı?",
      answer: "Evet, 20+ kullanıcı için özel kurumsal fiyatlandırma sunuyoruz. İletişime geçin.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 relative">
        {/* Grid Pattern Background - Only for Hero */}
        <div className="absolute inset-0 opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(148, 163, 184, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(148, 163, 184, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <MaxWidthWrapper>
          <div className="text-center space-y-8">
            <Badge className="mx-auto" variant="outline">
              <Zap className="h-4 w-4 mr-2" />
              Esnek Fiyatlandırma
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                <span className="text-primary">Size Uygun</span>
                <br />
                Planı Seçin
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Ücretsiz planla başlayın, ihtiyacınıza göre yükseltin. Her zaman esnek, her zaman
                şeffaf fiyatlandırma.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Pricing Cards */}
      <PricingCards plans={plans} />

      {/* Features Comparison */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Subtle background effects */}
        <div className="absolute top-16 right-16 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-16 left-16 w-32 h-32 bg-gradient-to-br from-pink-200/30 to-yellow-200/30 rounded-full blur-2xl" />
        <MaxWidthWrapper>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Plan Karşılaştırması</h2>
            <p className="text-slate-600">
              Hangi planın size en uygun olduğunu görmek için detaylı karşılaştırma
            </p>
          </div>

          <Card className="border-2 border-b-4 border-slate-200 border-b-slate-300 bg-white">
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 font-semibold text-slate-900">Özellik</th>
                      <th className="text-center py-4 font-semibold text-slate-900">Başlangıç</th>
                      <th className="text-center py-4 font-semibold text-slate-900">Pro</th>
                      <th className="text-center py-4 font-semibold text-slate-900">Ekip</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b">
                      <td className="py-4 text-slate-700">AI Chat Mesajı</td>
                      <td className="text-center py-4">10/gün</td>
                      <td className="text-center py-4">Sınırsız</td>
                      <td className="text-center py-4">Sınırsız</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 text-slate-700">Not Sayfası</td>
                      <td className="text-center py-4">5</td>
                      <td className="text-center py-4">Sınırsız</td>
                      <td className="text-center py-4">Sınırsız</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 text-slate-700">PDF Upload</td>
                      <td className="text-center py-4">❌</td>
                      <td className="text-center py-4">✅</td>
                      <td className="text-center py-4">✅</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 text-slate-700">Mobil App</td>
                      <td className="text-center py-4">❌</td>
                      <td className="text-center py-4">✅</td>
                      <td className="text-center py-4">✅</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 text-slate-700">Ekip Özellikleri</td>
                      <td className="text-center py-4">❌</td>
                      <td className="text-center py-4">❌</td>
                      <td className="text-center py-4">✅</td>
                    </tr>
                    <tr>
                      <td className="py-4 text-slate-700">Destek</td>
                      <td className="text-center py-4">Topluluk</td>
                      <td className="text-center py-4">Email</td>
                      <td className="text-center py-4">Öncelikli</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </MaxWidthWrapper>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <MaxWidthWrapper>
          <div className="max-w-3xl mx-auto z-50">
            <div className="text-center space-y-4 mb-16">
              <Badge variant="outline">
                <HelpCircle className="h-4 w-4 mr-2" />
                Sıkça Sorulan Sorular
              </Badge>
              <h2 className="text-3xl font-bold text-slate-900">Fiyatlandırma Hakkında</h2>
            </div>

            <div className="space-y-4">
              <Accordion collapsible className="w-full" type="single">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    className="border-2 border-b-4 border-slate-200 border-b-slate-300 bg-white rounded-lg mb-4 hover:border-b-slate-400 hover:-translate-y-0.5 transition-all duration-300 hover:shadow-lg"
                    value={`item-${index}`}
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <span className="text-lg font-semibold text-slate-900">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="text-center mt-12">
              <p className="text-slate-600 mb-4">Başka sorularınız mı var?</p>
              <Button variant="outline">İletişime Geçin</Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <MaxWidthWrapper>
          <div className="text-center space-y-6 text-white">
            <h2 className="text-3xl font-bold">Tıp Eğitiminizi Dönüştürmeye Hazır mısınız?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Ücretsiz planla başlayın, özelliklerimizi keşfedin ve ihtiyacınıza uygun plana geçin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup">
                <Button variant={"secondary"}>
                  Ücretsiz Başla
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Satış Ekibiyle Konuş</Button>
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default PricingPage;

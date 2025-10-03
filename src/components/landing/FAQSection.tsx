"use client";

import {HelpCircle} from "lucide-react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {Badge} from "@/components/ui/badge";

import {Button} from "../ui/button";

const FAQSection = () => {
  const faqs = [
    {
      id: "faq-1",
      question: "MedAIst platformu ücretsiz mi?",
      answer:
        "Platforma ücretsiz kayıt olabilir ve temel özellikleri deneyebilirsiniz. Premium özellikler için uygun fiyatlı abonelik planlarımız bulunmaktadır.",
    },
    {
      id: "faq-2",
      question: "AI asistanı ne kadar güvenilir?",
      answer:
        "AI asistanımız güncel tıp literatürü ve güvenilir kaynaklarla eğitilmiştir. Ancak AI'dan aldığınız bilgileri her zaman ders kitaplarınız ve hocalarınızla doğrulamanızı öneririz. Platform eğitim amaçlıdır ve tıbbi tanı koymaz.",
    },
    {
      id: "faq-3",
      question: "Hangi dosya formatlarını destekliyorsunuz?",
      answer:
        "PDF, DOC, DOCX, TXT formatlarında dosya yükleyebilirsiniz. Sistemi sürüm 2.0'da PowerPoint ve görsel tabanlı dosyalar için de destek planlıyoruz.",
    },
    {
      id: "faq-4",
      question: "Verilerim güvende mi?",
      answer:
        "Evet, verilerinizin güvenliği önceliğimizdir. KVKK uyumlu olarak çalışıyoruz, end-to-end şifreleme kullanıyoruz ve verilerinizi üçüncü taraflarla paylaşmıyoruz. İsterseniz verilerinizi tamamen silebilirsiniz.",
    },
    {
      id: "faq-5",
      question: "Mobile uygulama var mı?",
      answer:
        "Şu anda web tabanlı responsive platformumuz tüm cihazlarda çalışmaktadır. iOS ve Android uygulamaları 2025 başında yayınlanacaktır. Web sitesini telefonunuzun ana ekranına ekleyebilirsiniz.",
    },
    {
      id: "faq-6",
      question: "Quiz sorularını kendim ekleyebilir miyim?",
      answer:
        "Evet! Kendi quiz sorularınızı oluşturabilir, notlarınızdan otomatik sorular ürettebilir ve arkadaşlarınızla paylaşabilirsiniz.",
    },
    {
      id: "faq-7",
      question: "Teknik destek nasıl alırım?",
      answer:
        "7/24 canlı destek hattımız, e-posta desteğimiz ve kapsamlı yardım merkezimiz bulunmaktadır. Discord topluluğumuzda diğer öğrencilerle de iletişim kurabilirsiniz.",
    },
    {
      id: "faq-8",
      question: "Hangi tıp fakültelerinden öğrenciler kullanıyor?",
      answer:
        "Türkiye'deki 50+ tıp fakültesinden 10.000+ öğrenci platformumuzu aktif olarak kullanmaktadır. İstanbul Üniversitesi, Hacettepe, Ankara Üniversitesi başta olmak üzere tüm büyük fakültelerden kullanıcılarımız var.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white" id="faq">
      <MaxWidthWrapper>
        <div className="text-center space-y-4 mb-16">
          <Badge className="px-4 py-2 text-blue-600 border-blue-200 bg-blue-50" variant="outline">
            <HelpCircle className="h-4 w-4 mr-2" />
            Sıkça Sorulan Sorular
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Merak Ettikleriniz
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            MedAIst hakkında en çok sorulan soruların yanıtları burada
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion collapsible className="space-y-6" type="single">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                className="bg-white rounded-xl border-2 border-b-4 border-b-slate-200 px-6 py-2 hover:shadow-sm transition-all duration-300 hover:border-b-slate-300 transform hover:-translate-y-0.5 cursor-pointer"
                value={faq.id}
              >
                <AccordionTrigger className="py-6 hover:no-underline group text-left">
                  <span className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Help */}
        <div className="mt-16 text-center">
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Cevabını bulamadın mı?</h3>
            <p className="text-slate-600 mb-6">
              Destek ekibimiz size yardımcı olmaktan mutluluk duyar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>Canlı Destek</Button>
              <Button variant="outline">E-posta Gönder</Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default FAQSection;

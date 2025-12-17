"use client";

import {motion} from "framer-motion";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "MedAIst tam olarak nedir?",
      answer:
        "MedAIst, tıp öğrencileri için özel olarak geliştirilmiş yapay zeka destekli bir eğitim asistanıdır. Ders notlarınızı yükleyip onlarla sohbet edebilir, otomatik quizler oluşturabilir ve çalışma veriminizi artırabilirsiniz.",
    },
    {
      question: "Kendi ders notlarımı yükleyebilir miyim?",
      answer:
        "Evet! PDF formatındaki tüm ders notlarınızı, textbookları veya kurul notlarını sisteme yükleyebilirsiniz. Yapay zeka bu belgeleri analiz ederek size özel içerikler üretir.",
    },
    {
      question: "Oluşturulan sorular ne kadar güvenilir?",
      answer:
        "Sorular tamamen sizin yüklediğiniz kaynaklardan ve güvenilir tıp literatüründen derlenerek oluşturulur. Böylece doğruluğu her zaman kontrol edebilirsiniz.",
    },
    {
      question: "MedAIst'i hangi cihazlarda kullanabilirim?",
      answer:
        "MedAIst web tabanlı bir platformdur. Bilgisayar, tablet veya telefonunuzdan tarayıcı aracılığıyla tüm özelliklere erişebilirsiniz.",
    },
    {
      question: "Ücretli mi?",
      answer:
        "Temel özelliklere erişim için ücretsiz bir planımız bulunmaktadır. Daha gelişmiş özellikler ve sınırsız kullanım için ise uygun fiyatlı premium paketler sunuyoruz.",
    },
  ];

  return (
    <section className="py-20 bg-background" id="faq">
      <MaxWidthWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/60">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aklınıza takılan soruların cevaplarını burada bulabilirsiniz.
          </p>
        </div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{opacity: 0, y: 20}}
          transition={{duration: 0.5}}
          viewport={{once: true}}
          whileInView={{opacity: 1, y: 0}}
        >
          <Accordion collapsible className="w-full" type="single">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
};

export default FAQSection;

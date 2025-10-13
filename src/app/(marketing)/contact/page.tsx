"use client";

import {motion} from "framer-motion";
import {Clock, Mail, MapPin, MessageCircle, Send, Sparkles} from "lucide-react";
import Link from "next/link";
import {useState} from "react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    setFormData({name: "", email: "", subject: "", message: ""});
    setIsSubmitting(false);

    // Show success message (you can implement toast notification here)
    alert("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-posta",
      content: "destek@medaist.com",
      description: "7/24 e-posta desteği",
      href: "mailto:destek@medaist.com",
    },
    {
      icon: MapPin,
      title: "Adres",
      content: "Levent, Büyükdere Cad. No:123",
      description: "İstanbul, Türkiye 34394",
      href: "#",
    },
  ];

  const faqs = [
    {
      question: "MedAIst nasıl çalışır?",
      answer:
        "PDF ders notlarınızı yükleyin, AI'ımız analiz eder ve size soru sorabileceğiniz, quiz oluşturabileceğiniz akıllı bir asistan sunar.",
    },
    {
      question: "Ücretsiz deneme süresi kaç gün?",
      answer:
        "14 gün boyunca tüm premium özellikleri ücretsiz deneyebilirsiniz. Kredi kartı bilgisi gerekmez.",
    },
    {
      question: "Hangi dosya formatları desteklenir?",
      answer:
        "PDF, DOCX, TXT formatlarını destekliyoruz. Yakında PowerPoint ve diğer formatları da ekleyeceğiz.",
    },
    {
      question: "Verilerim güvende mi?",
      answer:
        "Evet! Tüm verileriniz end-to-end şifreli olarak saklanır ve asla üçüncü taraflarla paylaşılmaz.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background to-muted/20">
        <MaxWidthWrapper>
          <motion.div
            animate={{opacity: 1, y: 0}}
            className="text-center space-y-8 max-w-3xl mx-auto"
            initial={{opacity: 0, y: 20}}
            transition={{duration: 0.8}}
          >
            <motion.div
              animate={{opacity: 1, scale: 1}}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
              initial={{opacity: 0, scale: 0.8}}
              transition={{delay: 0.2, duration: 0.6}}
            >
              <MessageCircle className="w-4 h-4" />
              <span>İletişim</span>
            </motion.div>

            <motion.h1
              animate={{opacity: 1, y: 0}}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              initial={{opacity: 0, y: 20}}
              transition={{delay: 0.3, duration: 0.8}}
            >
              Size{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Nasıl Yardım
              </span>{" "}
              Edebiliriz?
            </motion.h1>

            <motion.p
              animate={{opacity: 1, y: 0}}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
              initial={{opacity: 0, y: 20}}
              transition={{delay: 0.4, duration: 0.8}}
            >
              Sorularınız, önerileriniz veya teknik destek ihtiyacınız için bizimle iletişime geçin.
              Uzman ekibimiz size yardımcı olmak için burada.
            </motion.p>
          </motion.div>
        </MaxWidthWrapper>
      </section>

      {/* Contact Cards */}
      <section className="py-20">
        <MaxWidthWrapper>
          <div className="grid sm:grid-cols-2 gap-6 mb-20">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;

              return (
                <motion.div
                  key={info.title}
                  initial={{opacity: 0, y: 20}}
                  transition={{delay: index * 0.1, duration: 0.6}}
                  viewport={{once: true}}
                  whileInView={{opacity: 1, y: 0}}
                >
                  <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <Link className="block space-y-4" href={info.href}>
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-primary font-medium mb-2">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </Link>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form & Info */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{opacity: 0, x: -20}}
              transition={{duration: 0.8}}
              viewport={{once: true}}
              whileInView={{opacity: 1, x: 0}}
            >
              <Card className="p-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Bize Mesaj Gönderin</h2>
                    <p className="text-muted-foreground">
                      Formu doldurun, 24 saat içinde size dönüş yapalım.
                    </p>
                  </div>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Ad Soyad</Label>
                        <Input
                          required
                          id="name"
                          name="name"
                          placeholder="Adınız ve soyadınız"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-posta</Label>
                        <Input
                          required
                          id="email"
                          name="email"
                          placeholder="ornek@email.com"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Konu</Label>
                      <Input
                        required
                        id="subject"
                        name="subject"
                        placeholder="Mesajınızın konusu"
                        value={formData.subject}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mesaj</Label>
                      <Textarea
                        required
                        className="min-h-[120px]"
                        id="message"
                        name="message"
                        placeholder="Mesajınızı buraya yazın..."
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>

                    <Button className="w-full" disabled={isSubmitting} size="lg" type="submit">
                      {isSubmitting ? (
                        <>
                          <Clock className="mr-2 animate-spin" />
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2" />
                          Mesaj Gönder
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </Card>
            </motion.div>

            {/* FAQ */}
            <motion.div
              className="space-y-8"
              initial={{opacity: 0, x: 20}}
              transition={{duration: 0.8}}
              viewport={{once: true}}
              whileInView={{opacity: 1, x: 0}}
            >
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Sıkça Sorulan Sorular</h2>
                <p className="text-muted-foreground">En çok merak edilen sorular ve cevapları.</p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{opacity: 0, y: 10}}
                    transition={{delay: index * 0.1, duration: 0.6}}
                    viewport={{once: true}}
                    whileInView={{opacity: 1, y: 0}}
                  >
                    <Card className="p-6">
                      <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Hızlı Destek İçin</h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Acil sorularınız için canlı destek hattımızı kullanabilir veya WhatsApp
                      üzerinden bize ulaşabilirsiniz.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild size="sm" variant="outline">
                        <Link href="https://wa.me/902121234567">WhatsApp</Link>
                      </Button>
                      <Button size="sm" variant="outline">
                        Canlı Destek
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <MaxWidthWrapper>
          <motion.div
            className="text-center space-y-8 max-w-3xl mx-auto"
            initial={{opacity: 0, y: 20}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
            whileInView={{opacity: 1, y: 0}}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Hemen Başlamaya Hazır Mısınız?
            </h2>
            <p className="text-lg text-muted-foreground">
              Daha fazla soru sormak yerine MedAIst&apos;i ücretsiz deneyin ve farkı kendiniz görün.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/signup">
                  <Sparkles className="mr-2" />
                  Ücretsiz Başla
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/pricing">Fiyatları İncele</Link>
              </Button>
            </div>
          </motion.div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default ContactPage;

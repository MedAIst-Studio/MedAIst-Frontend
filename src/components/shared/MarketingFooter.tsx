"use client";

import {motion} from "framer-motion";
import {Facebook, Instagram, Linkedin, Mail, Twitter} from "lucide-react";
import Link from "next/link";

import Logo from "./Logo";

const MarketingFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Ürün",
      links: [
        {name: "Özellikler", href: "#features"},
        /* {name: "Fiyatlandırma", href: "/pricing"}, */
        {name: "Nasıl Çalışır", href: "#howitworks"},
      ],
    },
    {
      title: "Şirket",
      links: [
        {name: "Hakkımızda", href: "/about"},
        {name: "Blog", href: "/blog"},
        {name: "İletişim", href: "/contact"},
      ],
    },
    {
      title: "Yasal",
      links: [
        {name: "Gizlilik Politikası", href: "/privacy"},
        {name: "Kullanım Şartları", href: "/terms"},
        {name: "KVKK", href: "/kvkk"},
        {name: "Çerezler", href: "/cookies"},
      ],
    },
  ];

  const socialLinks = [
    {name: "Twitter", href: "#", icon: Twitter},
    {name: "LinkedIn", href: "#", icon: Linkedin},
    {name: "Instagram", href: "#", icon: Instagram},
    {name: "Facebook", href: "#", icon: Facebook},
  ];

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{opacity: 0, y: 20}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
            whileInView={{opacity: 1, y: 0}}
          >
            <Link className="flex items-center gap-2 group" href="/">
              <Logo size={32} />
              <span className="text-2xl font-bold text-foreground">MedAIst</span>
            </Link>

            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Yapay zeka destekli tıp eğitimi platformu ile çalışmanızı dönüştürün. AI chat ve quiz
              sistemi ile başarınızı artırın.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>destek@medaist.com</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              className="space-y-4"
              initial={{opacity: 0, y: 20}}
              transition={{duration: 0.6, delay: index * 0.1}}
              viewport={{once: true}}
              whileInView={{opacity: 1, y: 0}}
            >
              <h4 className="font-semibold text-foreground">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="border-t border-border pt-8"
          initial={{opacity: 0}}
          transition={{duration: 0.6, delay: 0.4}}
          viewport={{once: true}}
          whileInView={{opacity: 1}}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground text-center lg:text-left">
              © {currentYear} MedAIst. Tüm hakları saklıdır.{" "}
              <span className="hidden sm:inline">
                Tıp öğrencileri için yapay zeka destekli eğitim platformu.
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;

                return (
                  <Link
                    key={social.name}
                    aria-label={social.name}
                    className="w-9 h-9 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
                    href={social.href}
                  >
                    <IconComponent className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>

            {/* Language/Region */}
            <div className="text-sm text-muted-foreground">🇹🇷 Türkiye</div>
          </div>
        </motion.div>

        {/* Extra Bottom Info */}
        <motion.div
          className="mt-8 pt-6 border-t border-border/50 text-center"
          initial={{opacity: 0}}
          transition={{duration: 0.6, delay: 0.6}}
          viewport={{once: true}}
          whileInView={{opacity: 1}}
        >
          <p className="text-xs text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            MedAIst, tıp fakültesi öğrencilerine yönelik yapay zeka destekli bir eğitim
            platformudur. Platform üzerinde paylaşılan bilgiler sadece eğitim amaçlıdır ve tıbbi
            tanı veya tedavi tavsiyesi niteliği taşımaz. Her zaman profesyonel tıbbi danışmanlık
            alın.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default MarketingFooter;

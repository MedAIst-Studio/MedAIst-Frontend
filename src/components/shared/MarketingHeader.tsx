"use client";

import {motion} from "framer-motion";
import {Menu, Sparkles} from "lucide-react";
import Link from "next/link";
import {useEffect, useState} from "react";

import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";

import Logo from "./Logo";

const MarketingHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    {
      name: "Özellikler",
      href: "#features",
    },
    {
      name: "Nasıl Çalışır",
      href: "#howitworks",
    },
    {
      name: "Hakkımızda",
      href: "/about",
    },
    {
      name: "İletişim",
      href: "/contact",
    },
    /* {
      name: "Değerlendirmeler",
      href: "#testimonials",
    }, */
    /* {
      name: "Fiyatlar",
      href: "/pricing",
    }, */
  ];

  return (
    <motion.header
      animate={{y: 0}}
      className={`fixed top-0 left-0 right-0 z-50`}
      initial={{y: -100}}
      transition={{duration: 0.6}}
    >
      <div className="container md:mx-auto md:px-4 md:pt-4">
        <div
          className={`flex px-4 transition-all rounded-xl items-center justify-between h-12 lg:h-16 ${isScrolled ? "bg-background/80 backdrop-blur-md border" : "bg-transparent"}`}
        >
          {/* Logo */}
          <motion.div
            animate={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -20}}
            transition={{duration: 0.6, delay: 0.1}}
          >
            <Link className="flex items-center gap-2 group" href="/">
              <Logo size={32} />
              <span className="text-xl lg:text-2xl font-bold text-foreground">MedAIst</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            animate={{opacity: 1, y: 0}}
            className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2"
            initial={{opacity: 0, y: -20}}
            transition={{duration: 0.6, delay: 0.2}}
          >
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.name}
                animate={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -20}}
                transition={{duration: 0.6, delay: 0.3 + index * 0.1}}
              >
                <Link
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium relative group"
                  href={item.href}
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Desktop CTA */}
          <motion.div
            animate={{opacity: 1, x: 0}}
            className="hidden lg:flex items-center gap-4"
            initial={{opacity: 0, x: 20}}
            transition={{duration: 0.6, delay: 0.4}}
          >
            <Link href="/login">
              <Button className="font-medium" variant="outline">
                Giriş Yap
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="group">
                <Sparkles />
                Ücretsiz Başla
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="p-2" variant="ghost">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-80 p-4" side="right">
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-2 mb-8">
                    <Logo size={32} />
                    <span className="text-xl font-bold text-foreground">MedAIst</span>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-6 flex-1">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.name}
                        className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                        href={item.href}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile CTA */}
                  <div className="space-y-4 pt-6">
                    <Link className="block" href="/login">
                      <Button className="w-full" variant="outline">
                        Giriş Yap
                      </Button>
                    </Link>
                    <Link className="block" href="/signup">
                      <Button className="w-full">
                        <Sparkles />
                        Ücretsiz Başla
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default MarketingHeader;

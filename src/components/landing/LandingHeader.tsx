"use client";

import {ArrowRight, Menu, X} from "lucide-react";
import Link from "next/link";
import {useState} from "react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Button} from "@/components/ui/button";

const LandingHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b-2">
      <MaxWidthWrapper>
        <nav className="flex items-center justify-between py-4">
          <div className="flex lg:flex-1">
            <Link className="-m-1.5 p-1.5" href="/">
              <span className="text-2xl font-bold">
                Med<span className="text-blue-600">AI</span>st
              </span>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground"
              type="button"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            <Link
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              href="#features"
            >
              Özellikler
            </Link>
            <Link
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              href="#how-it-works"
            >
              Nasıl Çalışır
            </Link>
            <Link
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              href="/pricing"
            >
              Fiyatlar
            </Link>
            <Link
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              href="#faq"
            >
              S.S.S.
            </Link>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
            <Link href="/login">
              <Button variant="outline">Giriş Yap</Button>
            </Link>
            <Link href="/signup">
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
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-card px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <Link className="-m-1.5 p-1.5" href="/">
                <span className="text-2xl font-bold text-foreground">
                  Med<span className="text-blue-600">AI</span>st
                </span>
              </Link>
              <button
                className="-m-2.5 rounded-md p-2.5 text-muted-foreground"
                type="button"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  <Link
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted/30"
                    href="#features"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Özellikler
                  </Link>
                  <Link
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted/30"
                    href="#how-it-works"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Nasıl Çalışır
                  </Link>
                  <Link
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted/30"
                    href="#testimonials"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Referanslar
                  </Link>
                  <Link
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted/30"
                    href="#screenshots"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Ekran Görüntüleri
                  </Link>
                </div>
                <div className="py-6 space-y-2">
                  <Link href="/login">
                    <Button className="w-full" variant="ghost">
                      Giriş Yap
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="w-full">
                      Başla
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default LandingHeader;

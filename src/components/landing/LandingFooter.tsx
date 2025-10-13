import Link from "next/link";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const LandingFooter = () => {
  const footerSections: FooterSection[] = [
    {
      title: "Platform",
      links: [
        {label: "AI Chat", href: "/chat"},
        {label: "Akıllı Notlar", href: "/notes"},
        {label: "Quiz Sistemi", href: "/quiz"},
      ],
    },
    {
      title: "Destek",
      links: [
        {label: "Yardım Merkezi", href: "/help"},
        {label: "İletişim", href: "/contact"},
        {label: "SSS", href: "/#faq"},
        {label: "Topluluk", href: "https://discord.gg/medaist", external: true},
      ],
    },
    {
      title: "Yasal",
      links: [
        {label: "Gizlilik Politikası", href: "/privacy"},
        {label: "Kullanım Şartları", href: "/terms"},
        {label: "KVKK", href: "/kvkk"},
        {label: "Çerezler", href: "/cookies"},
      ],
    },
  ];

  return (
    <footer className="bg-zinc-900 text-primary-foreground py-12">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <span className="text-2xl font-bold">
              Med<span className="text-blue-400">AI</span>st
            </span>
            <p className="text-primary-foreground/70">Yapay zeka destekli tıp eğitimi platformu</p>
            <div className="flex space-x-4">
              <Link
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                href="https://twitter.com/medaist"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                href="https://linkedin.com/company/medaist"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold">{section.title}</h4>
              <div className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                    href={link.href}
                    {...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {link.label}
                    {link.external && (
                      <svg
                        className="inline ml-1 h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      </svg>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/70">
          <p>&copy; 2024 MedAIst. Tüm hakları saklıdır.</p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default LandingFooter;

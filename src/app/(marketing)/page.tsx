import {Metadata} from "next";
import Script from "next/script";

import CTASection from "@/components/landing/CTASection";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSolutionSection from "@/components/landing/ProblemSolutionSection";
import ScrollytellingSection from "@/components/landing/ScrollytellingSection";

export const metadata: Metadata = {
  title: "MedAIst - Yapay Zeka Destekli Tıp Eğitimi Platformu",
  description:
    "Tıp öğrencileri için AI destekli chat ve interaktif quiz sistemi. Kişiselleştirilmiş öğrenme deneyimi ile tıp eğitimini dönüştürün.",
  keywords: [
    "tıp eğitimi",
    "yapay zeka",
    "AI chat",
    "tıp öğrencisi",
    "interaktif quiz",
    "tıp asistanı",
    "sınav hazırlık",
    "ders çalışma",
  ],
  authors: [{name: "MedAIst Team"}],
  category: "Education",
  openGraph: {
    title: "MedAIst - Yapay Zeka Destekli Tıp Eğitimi",
    description: "AI destekli chat ve quiz sistemi ile tıp eğitimini dönüştürün.",
    type: "website",
    locale: "tr_TR",
    siteName: "MedAIst",
  },
  twitter: {
    card: "summary_large_image",
    title: "MedAIst - Yapay Zeka Destekli Tıp Eğitimi",
    description: "AI destekli chat ve quiz sistemi ile tıp eğitimini dönüştürün.",
  },
  alternates: {
    canonical: "https://medaist.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const LandingPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "MedAIst",
    description: "Yapay zeka destekli tıp eğitimi platformu. AI chat ve interaktif quiz sistemi.",
    url: "https://medaist.com",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web, Mobile, Tablet",
    /* aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "10000",
      bestRating: "5",
      worstRating: "1",
    }, */
    audience: {
      "@type": "Audience",
      audienceType: "Tıp Öğrencileri",
    },
    provider: {
      "@type": "Organization",
      name: "MedAIst Team",
    },
  };

  return (
    <>
      <Script
        dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
        id="structured-data"
        type="application/ld+json"
      />
      <HeroSection />
      <ProblemSolutionSection />
      <ScrollytellingSection />
      <CTASection />
    </>
  );
};

export default LandingPage;

import {ArrowRight} from "lucide-react";
import Link from "next/link";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Button} from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-primary/80 to-primary/90">
      <MaxWidthWrapper>
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tıp Eğitiminizi Dönüştürmeye Hazır mısınız?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Binlerce öğrencinin tercih ettiği platforma katılın ve başarınızı artırın
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" variant="secondary">
                Ücretsiz Başla
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline">
                Daha Fazla Bilgi
              </Button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default CallToActionSection;

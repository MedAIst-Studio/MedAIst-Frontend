import {Quote, Star} from "lucide-react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";

const TestimonialsSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-muted/30" id="testimonials">
      <MaxWidthWrapper>
        <div className="text-center space-y-4 mb-16">
          <Badge
            className="px-4 py-2 text-green-600 border-green-200 bg-green-50"
            variant="outline"
          >
            Referanslar
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Öğrencilerimizin Deneyimleri
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Binlerce tıp öğrencisi MedAIst ile başarıya ulaştı
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="h-8 w-8 text-muted/60 mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                &quot;MedAIst sayesinde anatomi derslerinde çok daha başarılı oldum. AI asistanı
                sorularımı anında yanıtlıyor ve karmaşık konuları basitleştiriyor.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-blue-600">AY</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Ayşe Yılmaz</p>
                  <p className="text-sm text-muted-foreground">Tıp Fakültesi 3. Sınıf</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 2 */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="h-8 w-8 text-muted/60 mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                &quot;Quiz sistemi gerçekten harika! Sınav öncesi kendimi test edebiliyorum ve eksik
                olduğum konuları hemen fark ediyorum.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-green-600">MK</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Mehmet Kaya</p>
                  <p className="text-sm text-muted-foreground">Tıp Fakültesi 4. Sınıf</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 3 */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="h-8 w-8 text-muted/60 mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                &quot;PDF&apos;leri yükleyip özet çıkarma özelliği inanılmaz zaman kazandırıyor.
                Artık ders çalışma sürem yarıya indi.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-purple-600">ES</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Elif Sönmez</p>
                  <p className="text-sm text-muted-foreground">Tıp Fakültesi 2. Sınıf</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">10,000+</div>
            <div className="text-sm text-muted-foreground">Aktif Öğrenci</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Başarı Oranı</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Tıp Fakültesi</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Kullanıcı Puanı</div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default TestimonialsSection;

import {Eye, FileText, Lock, Shield} from "lucide-react";
import {Metadata} from "next";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Gizlilik Politikası - MedAIst",
  description:
    "MedAIst gizlilik politikası ve kişisel veri koruma uygulamaları hakkında detaylı bilgiler.",
  keywords: ["gizlilik", "politika", "kişisel veri", "GDPR", "KVKK", "veri koruma"],
  openGraph: {
    title: "Gizlilik Politikası - MedAIst",
    description:
      "Kişisel verilerinizi nasıl koruduğumuz ve işlediğimiz hakkında şeffaf açıklamalar.",
  },
};

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 relative">
        <MaxWidthWrapper>
          <div className="text-center space-y-8">
            <Badge className="mx-auto" variant="outline">
              <Shield className="h-4 w-4 mr-2" />
              Gizlilik ve Güvenlik
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                <span className="text-primary">Gizlilik</span>
                <br />
                Politikası
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kişisel verilerinizi nasıl topladığımız, kullandığımız ve koruduğumuz hakkında
                şeffaf bilgiler.
              </p>
            </div>

            <div className="text-sm text-muted-foreground/60">Son güncelleme: 3 Ekim 2024</div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Content */}
      <section className="pb-20">
        <MaxWidthWrapper>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Overview Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader className="text-center">
                  <Lock className="h-8 w-8 mx-auto text-primary mb-2" />
                  <CardTitle className="text-lg">Güvenli Depolama</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Verileriniz endüstri standardı şifreleme ile korunur
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Eye className="h-8 w-8 mx-auto text-primary mb-2" />
                  <CardTitle className="text-lg">Şeffaflık</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Verilerinizin nasıl kullanıldığını açık şekilde belirtiyoruz
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <FileText className="h-8 w-8 mx-auto text-primary mb-2" />
                  <CardTitle className="text-lg">Kullanıcı Hakları</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Verileriniz üzerindeki haklarınızı destekliyoruz
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="prose max-w-none flex flex-col gap-10">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Giriş</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    MedAIst olarak, kullanıcılarımızın gizliliğini korumak en önemli
                    önceliklerimizden biridir. Bu gizlilik politikası, kişisel verilerinizi nasıl
                    topladığımız, kullandığımız, sakladığımız ve koruduğumuz hakkında detaylı bilgi
                    vermektedir.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    MedAIst platformunu kullanarak, bu gizlilik politikasında belirtilen
                    uygulamaları kabul etmiş olursunuz.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    2. Topladığımız Bilgiler
                  </h2>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    2.1 Kişisel Bilgiler
                  </h3>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>Ad, soyad ve e-posta adresi (kayıt sırasında)</li>
                    <li>Okul/üniversite bilgileri (isteğe bağlı)</li>
                    <li>Profil fotoğrafı (isteğe bağlı)</li>
                    <li>İletişim bilgileri (destek talepleri için)</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    2.2 Kullanım Verileri
                  </h3>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>Platform kullanım istatistikleri</li>
                    <li>Çalışma süresi ve aktivite verileri</li>
                    <li>Quiz sonuçları ve performans metrikleri</li>
                    <li>Chat geçmişi (AI etkileşimleri)</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    2.3 Teknik Bilgiler
                  </h3>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>IP adresi ve konum bilgileri</li>
                    <li>Tarayıcı türü ve versiyonu</li>
                    <li>Cihaz bilgileri (işletim sistemi, ekran çözünürlüğü)</li>
                    <li>Çerez verileri</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    3. Bilgilerin Kullanım Amaçları
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        3.1 Hizmet Sunumu
                      </h3>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                        <li>Hesap oluşturma ve yönetimi</li>
                        <li>Kişiselleştirilmiş öğrenme deneyimi</li>
                        <li>AI destekli chat ve yardım hizmetleri</li>
                        <li>İlerleme takibi ve raporlama</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">3.2 İletişim</h3>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                        <li>Önemli platform güncellemeleri</li>
                        <li>Güvenlik bildirimleri</li>
                        <li>Müşteri destek hizmetleri</li>
                        <li>Pazarlama iletişimi (onay verdiğiniz takdirde)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        3.3 Platform İyileştirme
                      </h3>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                        <li>Kullanıcı deneyimi analizi</li>
                        <li>Hata tespiti ve düzeltme</li>
                        <li>Yeni özellik geliştirme</li>
                        <li>Performans optimizasyonu</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Veri Paylaşımı</h2>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <p className="text-blue-800 font-medium">
                      ⚡ Önemli: Kişisel verilerinizi ticari amaçlarla üçüncü taraflarla
                      paylaşmayız.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Sınırlı Paylaşım Durumları:
                  </h3>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>
                      <strong>Hizmet Sağlayıcılar:</strong> Teknik altyapı ve analitik hizmetleri
                      için güvenilir üçüncü taraf sağlayıcılar
                    </li>
                    <li>
                      <strong>Yasal Yükümlülükler:</strong> Kanuni zorunluluklar ve mahkeme
                      kararları
                    </li>
                    <li>
                      <strong>Güvenlik:</strong> Platform güvenliğini tehdit eden durumların tespiti
                    </li>
                    <li>
                      <strong>İş Transferi:</strong> Şirket birleşme/satın alma durumlarında
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Veri Güvenliği</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        Teknik Önlemler
                      </h3>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-1 text-sm">
                        <li>SSL/TLS şifreleme</li>
                        <li>Veritabanı şifreleme</li>
                        <li>Güvenli sunucu altyapısı</li>
                        <li>Düzenli güvenlik testleri</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">İdari Önlemler</h3>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-1 text-sm">
                        <li>Sınırlı erişim kontrolü</li>
                        <li>Personel eğitimi</li>
                        <li>Veri gizliliği sözleşmeleri</li>
                        <li>Incident response planı</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Kullanıcı Hakları</h2>

                  <p className="text-muted-foreground mb-4">
                    KVKK ve GDPR kapsamında aşağıdaki haklarınız bulunmaktadır:
                  </p>

                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-foreground">Erişim Hakkı</h3>
                      <p className="text-muted-foreground text-sm">
                        Kişisel verilerinizin işlenip işlenmediğini öğrenme ve işleniyorsa buna
                        ilişkin bilgi talep etme
                      </p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-foreground">Düzeltme Hakkı</h3>
                      <p className="text-muted-foreground text-sm">
                        Yanlış veya eksik verilerinizin düzeltilmesini talep etme
                      </p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-foreground">Silme Hakkı</h3>
                      <p className="text-muted-foreground text-sm">
                        Kişisel verilerinizin silinmesini talep etme
                      </p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-foreground">İtiraz Hakkı</h3>
                      <p className="text-muted-foreground text-sm">
                        Verilerinizin işlenmesine itiraz etme
                      </p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-foreground">Taşıma Hakkı</h3>
                      <p className="text-muted-foreground text-sm">
                        Verilerinizi başka bir platforma taşıma
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                    <p className="text-muted-foreground text-sm">
                      <strong>Başvuru için:</strong> privacy@medaist.com adresine e-posta
                      gönderebilir veya hesap ayarlarınızdan veri yönetimi seçeneklerini
                      kullanabilirsiniz.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Çerezler</h2>

                  <p className="text-muted-foreground mb-4">
                    Platform deneyiminizi geliştirmek için çerezler kullanıyoruz. Detaylı bilgi için
                    <a className="text-primary hover:underline ml-1" href="/cookies">
                      Çerez Politikamızı
                    </a>{" "}
                    inceleyebilirsiniz.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Zorunlu Çerezler</h4>
                      <p className="text-muted-foreground text-sm">
                        Platform işlevselliği için gerekli
                      </p>
                    </div>

                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Analitik Çerezler</h4>
                      <p className="text-muted-foreground text-sm">
                        Kullanım analizi ve iyileştirme
                      </p>
                    </div>

                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Tercihlere Dayalı</h4>
                      <p className="text-muted-foreground text-sm">Kişiselleştirilmiş deneyim</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    8. Veri Saklama Süreleri
                  </h2>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="font-medium text-foreground">Hesap Bilgileri</span>
                      <span className="text-muted-foreground">Hesap silinene kadar</span>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="font-medium text-foreground">Çalışma Verileri</span>
                      <span className="text-muted-foreground">3 yıl (inaktif hesaplar)</span>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="font-medium text-foreground">Log Dosyaları</span>
                      <span className="text-muted-foreground">12 ay</span>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="font-medium text-foreground">Destek Talepleri</span>
                      <span className="text-muted-foreground">5 yıl</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Değişiklikler</h2>

                  <p className="text-muted-foreground mb-4">
                    Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler
                    durumunda size e-posta ile bildirim göndereceğiz.
                  </p>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-yellow-800 text-sm">
                      💡 <strong>Tavsiye:</strong> Bu sayfayı düzenli olarak ziyaret ederek güncel
                      politikamızı takip edebilirsiniz.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">10. İletişim</h2>

                  <p className="text-muted-foreground mb-6">
                    Gizlilik politikamız hakkında sorularınız veya talepleriniz için bize
                    ulaşabilirsiniz:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Genel İletişim</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p>
                          <strong>E-posta:</strong> privacy@medaist.com
                        </p>
                        <p>
                          <strong>Adres:</strong> MedAIst Studio
                          <br />
                          İstanbul, Türkiye
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Veri Koruma Sorumlusu</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p>
                          <strong>E-posta:</strong> dpo@medaist.com
                        </p>
                        <p>
                          <strong>Yanıt Süresi:</strong> 30 gün içinde
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default PrivacyPage;

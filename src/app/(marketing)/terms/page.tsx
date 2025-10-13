import {AlertTriangle, BookOpen, Scale, Users} from "lucide-react";
import {Metadata} from "next";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Kullanım Şartları - MedAIst",
  description:
    "MedAIst platformunu kullanma koşulları, kullanıcı hakları ve sorumlulukları hakkında detaylı bilgiler.",
  keywords: ["kullanım şartları", "hizmet şartları", "kullanıcı sözleşmesi", "tıp eğitimi"],
  openGraph: {
    title: "Kullanım Şartları - MedAIst",
    description: "Platform kullanım koşulları ve kullanıcı haklarınız hakkında şeffaf bilgiler.",
  },
};

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 relative">
        <MaxWidthWrapper>
          <div className="text-center space-y-8">
            <Badge className="mx-auto" variant="outline">
              <Scale className="h-4 w-4 mr-2" />
              Yasal Çerçeve
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                <span className="text-primary">Kullanım</span>
                <br />
                Şartları
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                MedAIst platformunu kullanma koşulları, haklar ve sorumluluklar hakkında detaylı
                bilgiler.
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
              <Card className="border-2 border-b-4 border-border border-b-muted-foreground hover:border-b-foreground hover:-translate-y-0.5 transition-all duration-300">
                <CardHeader className="text-center">
                  <Users className="h-8 w-8 mx-auto text-primary mb-2" />
                  <CardTitle className="text-lg">Kullanıcı Hakları</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Platform kullanımında sahip olduğunuz haklar ve yetkiler
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-b-4 border-border border-b-muted-foreground hover:border-b-foreground hover:-translate-y-0.5 transition-all duration-300">
                <CardHeader className="text-center">
                  <AlertTriangle className="h-8 w-8 mx-auto text-primary mb-2" />
                  <CardTitle className="text-lg">Sorumluluklar</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Platform kullanımında uymanız gereken kurallar ve sınırlar
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-b-4 border-border border-b-muted-foreground hover:border-b-foreground hover:-translate-y-0.5 transition-all duration-300">
                <CardHeader className="text-center">
                  <BookOpen className="h-8 w-8 mx-auto text-primary mb-2" />
                  <CardTitle className="text-lg">Hizmet Kapsamı</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Sunduğumuz hizmetler ve bunların kullanım koşulları
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="prose max-w-none">
              <Card className="border-2 border-b-4 border-border border-b-muted-foreground mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Kabul ve Onay</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    MedAIst platformunu (web sitesi, mobil uygulama ve tüm ilgili hizmetler)
                    kullanarak bu kullanım şartlarını okuduğunuzu, anladığınızı ve kabul ettiğinizi
                    beyan edersiniz.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Bu şartları kabul etmiyorsanız, platformu kullanmaya devam edemezsiniz. Bu
                    kullanım şartları ile bizimle yasal olarak bağlayıcı bir sözleşme yapmış
                    olursunuz.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 text-sm">
                      <strong>Not:</strong> Bu şartlar zaman zaman güncellenebilir. Devam eden
                      kullanımınız güncellenmiş şartları kabul ettiğiniz anlamına gelir.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-b-4 border-border border-b-muted-foreground mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Hizmet Tanımı</h2>

                  <h3 className="text-xl font-semibold text-foreground mb-3">2.1 MedAIst Nedir?</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    MedAIst, tıp öğrencileri ve sağlık profesyonelleri için yapay zeka destekli
                    öğrenme platformudur. Platform şunları sunar:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                    <li>AI destekli chat ve danışmanlık hizmetleri</li>
                    <li>Kişiselleştirilmiş not alma ve düzenleme araçları</li>
                    <li>İnteraktif quiz ve değerlendirme sistemleri</li>
                    <li>İlerleme takibi ve analitik raporlar</li>
                    <li>Topluluk özellikleri ve işbirliği araçları</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Hizmet Kapsamı</h3>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-yellow-800 text-sm">
                      ⚠️ <strong>Önemli Uyarı:</strong> MedAIst eğitim amaçlı bir platformdur.
                      Sunduğumuz bilgiler tıbbi teşhis, tedavi önerisi veya profesyonel tıbbi
                      tavsiye niteliği taşımaz. Sağlık sorunları için mutlaka uzman hekime başvurun.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-b-4 border-border border-b-muted-foreground mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Kullanıcı Hesabı</h2>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    3.1 Hesap Oluşturma
                  </h3>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>18 yaşını doldurmuş olmanız gerekmektedir</li>
                    <li>Doğru ve güncel bilgiler sağlamalısınız</li>
                    <li>Hesap bilgilerinizi güvende tutmalısınız</li>
                    <li>Hesabınızı başkalarıyla paylaşmamalısınız</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    3.2 Hesap Güvenliği
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        Güçlü bir şifre kullanın (en az 8 karakter, büyük/küçük harf, rakam ve özel
                        karakter)
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        Şifrenizi düzenli olarak değiştirin ve başkalarıyla paylaşmayın
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        Şüpheli aktivite fark ettiğinizde derhal bize bildirin
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-b-4 border-border border-b-muted-foreground mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    4. Kabul Edilebilir Kullanım
                  </h2>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    4.1 İzin Verilen Kullanım
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">✅ Yapabilirsiniz:</h4>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        <li>• Eğitim amaçlı platform kullanımı</li>
                        <li>• Kişisel notlar ve çalışma materyalleri</li>
                        <li>• AI ile eğitim odaklı etkileşim</li>
                        <li>• Topluluk içinde yapıcı katkı</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">❌ Yapamazsınız:</h4>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        <li>• Yanıltıcı veya zararlı içerik paylaşımı</li>
                        <li>• Telif hakkı ihlali yapan materyaller</li>
                        <li>• Sistem güvenliğini tehdit etme</li>
                        <li>• Ticari amaçlı kullanım (izinsiz)</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    4.2 Yasaklı Aktiviteler
                  </h3>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2">Kesinlikle Yasak:</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• Sistemin ters mühendisliği veya hack girişimleri</li>
                      <li>• Diğer kullanıcıları rahatsız etme veya taciz</li>
                      <li>• Spam, reklam veya istenmeyen içerik gönderimi</li>
                      <li>• Yanıltıcı tıbbi bilgi paylaşımı</li>
                      <li>• Platform üzerinden illegal aktivite</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-b-4 border-border border-b-muted-foreground mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    5. Fikri Mülkiyet Hakları
                  </h2>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    5.1 MedAIst&apos;in Hakları
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Platform, yazılım, tasarım, içerik, logolar ve tüm materyaller MedAIst&apos;in
                    telif hakkı altındadır. Kullanıcılar sadece kişisel, eğitim amaçlı ve ticari
                    olmayan kullanım hakına sahiptir.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    5.2 Kullanıcı İçeriği
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Platforma yüklediğiniz içerikler (notlar, quiz cevapları, profil bilgileri) size
                    aittir, ancak platforma bu içerikleri hizmet sunumu amacıyla kullanma lisansı
                    verirsiniz.
                  </p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 text-sm">
                      <strong>Lisans Kapsamı:</strong> Sadece hizmet sunumu, platform iyileştirme ve
                      size destek sağlama amaçlarıyla sınırlıdır.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-b-4 border-border border-b-muted-foreground mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Ödeme ve Abonelik</h2>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    6.1 Ücretli Planlar
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Ödeme Koşulları</h4>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        <li>• Aylık veya yıllık faturalandırma</li>
                        <li>• Ödeme tarihi plan başlangıcına göre</li>
                        <li>• Kredi kartı veya banka kartı</li>
                        <li>• Türk Lirası (TL) cinsinden fiyatlandırma</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">İade Politikası</h4>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        <li>• İlk 14 gün içinde tam iade</li>
                        <li>• Kötüye kullanım durumunda red</li>
                        <li>• İade 5-10 iş günü içinde</li>
                        <li>• Orijinal ödeme yöntemine iade</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    6.2 Otomatik Yenileme
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Abonelikler otomatik olarak yenilenir. İptal etmek istiyorsanız, sonraki
                    faturalama döneminden en az 24 saat önce hesap ayarlarınızdan iptal etmelisiniz.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-b-4 border-border border-b-muted-foreground mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Hizmet Sürekliliği</h2>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    7.1 Hizmet Erişilebilirliği
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    %99.9 uptime hedefliyoruz, ancak teknik sorunlar, bakım çalışmaları veya
                    öngörülemeyen durumlar nedeniyle geçici kesintiler yaşanabilir.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    7.2 Planlanmış Bakımlar
                  </h3>
                  <div className="bg-muted/30 border border-border rounded-lg p-4">
                    <ul className="text-muted-foreground text-sm space-y-2">
                      <li>• Bakım çalışmaları genellikle gece saatlerinde yapılır</li>
                      <li>• Büyük güncellemeler için önceden bildirim yapılır</li>
                      <li>• Acil güvenlik güncellemeleri anında uygulanabilir</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-b-4 border-border border-b-muted-foreground mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Sorumluluk Reddi</h2>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-amber-800 mb-2">⚠️ Önemli Yasal Uyarı</h3>
                    <p className="text-amber-700 text-sm">
                      Bu bölüm platformun sorumluluklarını sınırlar. Lütfen dikkatlice okuyun.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    8.1 Tıbbi Sorumluluk
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    MedAIst eğitim platformudur. AI tarafından sağlanan bilgiler tıbbi tavsiye,
                    teşhis veya tedavi niteliği taşımaz. Sağlık problemleri için mutlaka uzman
                    hekime başvurun.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    8.2 Genel Sorumluluk
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Platform kullanımından doğabilecek doğrudan veya dolaylı zararlar için
                    sorumluluğumuz, ödediğiniz abonelik ücreti ile sınırlıdır.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    8.3 Üçüncü Taraf İçerikleri
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Platform üzerindeki üçüncü taraf bağlantıları ve içerikleri için sorumluluk
                    kabul etmiyoruz. Bu içeriklerin doğruluğu ve güvenliği konusunda garanti
                    vermiyoruz.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-b-4 border-border border-b-muted-foreground mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Hesap Sonlandırma</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        Kullanıcı Tarafından
                      </h3>
                      <ul className="text-muted-foreground text-sm space-y-2">
                        <li>• Hesap ayarlarından istediğiniz zaman</li>
                        <li>• Verileriniz 30 gün boyunca saklanır</li>
                        <li>• Ücretli abonelik varsa otomatik iptal</li>
                        <li>• Kullanılmayan süre için iade yok</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        MedAIst Tarafından
                      </h3>
                      <ul className="text-muted-foreground text-sm space-y-2">
                        <li>• Kullanım şartları ihlali durumunda</li>
                        <li>• Kötüye kullanım tespit edilirse</li>
                        <li>• Yasal zorunluluk olması halinde</li>
                        <li>• Önceden bildirim ile genel sonlandırma</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-b-4 border-border border-b-muted-foreground mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">10. Uygulanacak Hukuk</h2>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Bu kullanım şartları Türkiye Cumhuriyeti kanunlarına tabidir. Bu şartlardan
                    doğacak uyuşmazlıklar İstanbul mahkemelerinde çözülecektir.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">Uyuşmazlık Çözümü</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary text-sm font-bold">1</span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Önce müşteri destek ekibimizle iletişime geçin
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary text-sm font-bold">2</span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Sorununuz çözülmezse arabuluculuk önerebiliriz
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary text-sm font-bold">3</span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Son çare olarak yasal süreç başlatılabilir
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-b-4 border-border border-b-muted-foreground">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">11. İletişim</h2>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Kullanım şartları hakkında sorularınız veya önerileriniz için bize
                    ulaşabilirsiniz:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Yasal İşler</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p>
                          <strong>E-posta:</strong> legal@medaist.com
                        </p>
                        <p>
                          <strong>Yanıt Süresi:</strong> 5 iş günü
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Genel Destek</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p>
                          <strong>E-posta:</strong> support@medaist.com
                        </p>
                        <p>
                          <strong>Yanıt Süresi:</strong> 24 saat
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                    <p className="text-muted-foreground text-sm">
                      <strong>Şirket Bilgileri:</strong> MedAIst Studio, İstanbul, Türkiye
                    </p>
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

export default TermsPage;

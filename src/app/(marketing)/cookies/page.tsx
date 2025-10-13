import {BarChart3, Cookie, Settings, Shield} from "lucide-react";
import {Metadata} from "next";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Çerez Politikası - MedAIst",
  description:
    "MedAIst çerez kullanımı, çerez türleri ve gizlilik tercihlerinizi yönetme hakkında detaylı bilgiler.",
  keywords: ["çerez", "cookie", "politika", "gizlilik", "takip", "analitik"],
  openGraph: {
    title: "Çerez Politikası - MedAIst",
    description: "Çerez kullanımımız ve gizlilik tercihleriniz hakkında şeffaf bilgiler.",
  },
};

const CookiesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 relative">
        <MaxWidthWrapper>
          <div className="text-center space-y-8">
            <Badge className="mx-auto" variant="outline">
              <Cookie className="h-4 w-4 mr-2" />
              Çerez Yönetimi
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                <span className="text-primary">Çerez</span>
                <br />
                Politikası
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                MedAIst platformunda çerez kullanımı, türleri ve gizlilik tercihlerinizi nasıl
                yöneteceğiniz hakkında detaylı bilgiler.
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
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="border-2 border-b-4 border-border border-b-muted-foreground hover:border-b-foreground hover:-translate-y-0.5 transition-all duration-300">
                <CardHeader className="text-center pb-3">
                  <Cookie className="h-6 w-6 mx-auto text-primary mb-2" />
                  <CardTitle className="text-sm">Zorunlu Çerezler</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-muted-foreground text-center">
                    Platform işlevselliği için gerekli
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-b-4 border-border border-b-muted-foreground hover:border-b-foreground hover:-translate-y-0.5 transition-all duration-300">
                <CardHeader className="text-center pb-3">
                  <BarChart3 className="h-6 w-6 mx-auto text-primary mb-2" />
                  <CardTitle className="text-sm">Analitik Çerezler</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-muted-foreground text-center">
                    Kullanım istatistikleri ve analiz
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-b-4 border-border border-b-muted-foreground hover:border-b-foreground hover:-translate-y-0.5 transition-all duration-300">
                <CardHeader className="text-center pb-3">
                  <Settings className="h-6 w-6 mx-auto text-primary mb-2" />
                  <CardTitle className="text-sm">Fonksiyonel Çerezler</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-muted-foreground text-center">
                    Kişiselleştirme ve tercihler
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-b-4 border-border border-b-muted-foreground hover:border-b-foreground hover:-translate-y-0.5 transition-all duration-300">
                <CardHeader className="text-center pb-3">
                  <Shield className="h-6 w-6 mx-auto text-primary mb-2" />
                  <CardTitle className="text-sm">Pazarlama Çerezleri</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-muted-foreground text-center">
                    Hedefli reklam ve pazarlama
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="prose max-w-none">
              <Card className="border-2 border-b-4 border-border border-b-muted-foreground mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Çerez Nedir?</h2>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Çerezler (cookies), web sitelerini ziyaret ettiğinizde tarayıcınız tarafından
                    cihazınızda saklanan küçük metin dosyalarıdır. Bu dosyalar web sitesinin
                    çalışması, kullanıcı deneyiminin iyileştirilmesi ve site analitikleri için
                    kullanılır.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-900 mb-3">Çerezlerin Amacı</h3>
                      <ul className="text-blue-800 text-sm space-y-2">
                        <li>• Platform işlevselliğini sağlama</li>
                        <li>• Kullanıcı tercihlerini hatırlama</li>
                        <li>• Güvenlik önlemlerini destekleme</li>
                        <li>• Site performansını ölçme</li>
                        <li>• Kullanıcı deneyimini kişiselleştirme</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h3 className="font-semibold text-green-900 mb-3">Çerez Türleri</h3>
                      <ul className="text-green-800 text-sm space-y-2">
                        <li>
                          • <strong>Oturum Çerezleri:</strong> Geçici, tarayıcı kapanınca silinir
                        </li>
                        <li>
                          • <strong>Kalıcı Çerezler:</strong> Belirli süre boyunca saklanır
                        </li>
                        <li>
                          • <strong>Birinci Taraf:</strong> MedAIst tarafından oluşturulan
                        </li>
                        <li>
                          • <strong>Üçüncü Taraf:</strong> Harici hizmetler tarafından
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-b-4 border-border border-b-muted-foreground mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    2. Kullandığımız Çerez Türleri
                  </h2>

                  <div className="space-y-8">
                    {/* Zorunlu Çerezler */}
                    <div className="border-2 border-border rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                          <Cookie className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            Zorunlu Çerezler
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            Platform işlevselliği için kritik
                          </p>
                        </div>
                        <div className="ml-auto">
                          <Badge variant="secondary">Kapatılamaz</Badge>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        Bu çerezler platformun temel işlevlerini yerine getirmesi için gereklidir ve
                        kapatılamaz.
                      </p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-foreground mb-2">Kullanım Alanları:</h4>
                          <ul className="text-muted-foreground text-sm space-y-1">
                            <li>• Oturum yönetimi ve kimlik doğrulama</li>
                            <li>• Form verilerinin korunması</li>
                            <li>• Güvenlik kontrolleri</li>
                            <li>• Yük dengeleme</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-foreground mb-2">Örnek Çerezler:</h4>
                          <ul className="text-muted-foreground text-sm space-y-1">
                            <li>
                              • <code className="bg-muted/50 px-1 rounded">session_id</code>
                            </li>
                            <li>
                              • <code className="bg-muted/50 px-1 rounded">csrf_token</code>
                            </li>
                            <li>
                              • <code className="bg-muted/50 px-1 rounded">auth_token</code>
                            </li>
                            <li>
                              • <code className="bg-muted/50 px-1 rounded">security_hash</code>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Analitik Çerezler */}
                    <div className="border-2 border-border rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <BarChart3 className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            Analitik Çerezler
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            Site kullanımı ve performans analizi
                          </p>
                        </div>
                        <div className="ml-auto">
                          <Badge variant="outline">İsteğe Bağlı</Badge>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        Site trafiğini analiz etmek ve kullanıcı davranışlarını anlamak için
                        kullanılır. Kişisel kimlik bilgileri içermez.
                      </p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-foreground mb-2">Toplanan Bilgiler:</h4>
                          <ul className="text-muted-foreground text-sm space-y-1">
                            <li>• Sayfa görüntülenme sayıları</li>
                            <li>• Ziyaret süreleri</li>
                            <li>• Trafik kaynakları</li>
                            <li>• Cihaz ve tarayıcı bilgileri</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-foreground mb-2">
                            Hizmet Sağlayıcıları:
                          </h4>
                          <ul className="text-muted-foreground text-sm space-y-1">
                            <li>• Google Analytics</li>
                            <li>• Mixpanel</li>
                            <li>• Hotjar</li>
                            <li>• İç analitik sistemler</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Fonksiyonel Çerezler */}
                    <div className="border-2 border-border rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                          <Settings className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            Fonksiyonel Çerezler
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            Gelişmiş özellikler ve kişiselleştirme
                          </p>
                        </div>
                        <div className="ml-auto">
                          <Badge variant="outline">İsteğe Bağlı</Badge>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        Platformda yaptığınız tercihleri hatırlayarak daha iyi bir kullanıcı
                        deneyimi sağlar.
                      </p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-foreground mb-2">Özellikler:</h4>
                          <ul className="text-muted-foreground text-sm space-y-1">
                            <li>• Dil ve bölge tercihleri</li>
                            <li>• Tema ayarları (koyu/açık mod)</li>
                            <li>• Kişiselleştirilmiş içerik</li>
                            <li>• Kayıtlı arama tercihleri</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-foreground mb-2">Saklama Süreleri:</h4>
                          <ul className="text-muted-foreground text-sm space-y-1">
                            <li>• Dil tercihi: 1 yıl</li>
                            <li>• Tema ayarları: 6 ay</li>
                            <li>• Kişiselleştirme: 3 ay</li>
                            <li>• Diğer tercihler: 30 gün</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Pazarlama Çerezleri */}
                    <div className="border-2 border-border rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                          <Shield className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            Pazarlama Çerezleri
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            Hedefli reklam ve pazarlama iletişimi
                          </p>
                        </div>
                        <div className="ml-auto">
                          <Badge variant="outline">İsteğe Bağlı</Badge>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        Size daha alakalı reklamlar göstermek ve pazarlama kampanyalarının
                        etkinliğini ölçmek için kullanılır.
                      </p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-foreground mb-2">Kullanım Amaçları:</h4>
                          <ul className="text-muted-foreground text-sm space-y-1">
                            <li>• Hedefli reklam gösterimi</li>
                            <li>• Kampanya performans ölçümü</li>
                            <li>• Retargeting (yeniden hedefleme)</li>
                            <li>• Sosyal medya entegrasyonu</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-foreground mb-2">
                            Üçüncü Taraf Hizmetler:
                          </h4>
                          <ul className="text-muted-foreground text-sm space-y-1">
                            <li>• Google Ads</li>
                            <li>• Facebook Pixel</li>
                            <li>• LinkedIn Insight</li>
                            <li>• Twitter Analytics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-b-4 border-border border-b-muted-foreground mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    3. Çerez Ayarlarınızı Yönetme
                  </h2>

                  <p className="text-muted-foreground mb-6">
                    Çerez tercihlerinizi istediğiniz zaman değiştirebilirsiniz. Aşağıdaki yöntemleri
                    kullanabilirsiniz:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-muted/30 border border-border rounded-lg p-6">
                      <h3 className="font-semibold text-foreground mb-4">Platform Ayarları</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-3 bg-white rounded border">
                          <Cookie className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium text-foreground text-sm">Çerez Tercihleri</p>
                            <p className="text-muted-foreground text-xs">
                              Hesap ayarları → Gizlilik
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3 p-3 bg-white rounded border">
                          <Settings className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium text-foreground text-sm">Çerez Banneri</p>
                            <p className="text-muted-foreground text-xs">
                              Site altında bulunan yönetim paneli
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/30 border border-border rounded-lg p-6">
                      <h3 className="font-semibold text-foreground mb-4">Tarayıcı Ayarları</h3>
                      <div className="space-y-3">
                        <div className="text-sm text-muted-foreground">
                          <p className="font-medium mb-2">Popüler Tarayıcılar:</p>
                          <ul className="space-y-1">
                            <li>
                              • <strong>Chrome:</strong> Ayarlar → Gizlilik ve güvenlik → Çerezler
                            </li>
                            <li>
                              • <strong>Firefox:</strong> Ayarlar → Gizlilik ve güvenlik
                            </li>
                            <li>
                              • <strong>Safari:</strong> Tercihler → Gizlilik
                            </li>
                            <li>
                              • <strong>Edge:</strong> Ayarlar → Çerezler ve site izinleri
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-semibold text-amber-800 mb-2">⚠️ Önemli Uyarı</h4>
                    <p className="text-amber-700 text-sm">
                      Zorunlu çerezleri devre dışı bıraktığınızda platform düzgün çalışmayabilir.
                      Giriş yapamama, form kaydetme sorunları ve güvenlik açıkları yaşayabilirsiniz.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-b-4 border-border border-b-muted-foreground mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    4. Üçüncü Taraf Çerezleri
                  </h2>

                  <p className="text-muted-foreground mb-6">
                    MedAIst platformunda bazı üçüncü taraf hizmetleri kullanıyoruz. Bu hizmetler
                    kendi çerezlerini yerleştirebilir:
                  </p>

                  <div className="space-y-6">
                    <div className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-foreground">Google Analytics</h3>
                        <Badge variant="outline">Analitik</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">
                        Site trafiğini ve kullanıcı davranışlarını analiz etmek için kullanılır.
                        Kişisel kimlik bilgileri toplamaz.
                      </p>
                      <div className="flex space-x-4 text-xs text-muted-foreground">
                        <span>
                          <strong>Saklama:</strong> 26 ay
                        </span>
                        <span>
                          <strong>Politika:</strong> policies.google.com/privacy
                        </span>
                      </div>
                    </div>

                    <div className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-foreground">Stripe (Ödeme İşlemleri)</h3>
                        <Badge variant="outline">Fonksiyonel</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">
                        Güvenli ödeme işlemleri için kullanılır. Sadece ödeme sırasında aktif olur.
                      </p>
                      <div className="flex space-x-4 text-xs text-muted-foreground">
                        <span>
                          <strong>Saklama:</strong> Oturum
                        </span>
                        <span>
                          <strong>Politika:</strong> stripe.com/privacy
                        </span>
                      </div>
                    </div>

                    <div className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-foreground">
                          Intercom (Müşteri Desteği)
                        </h3>
                        <Badge variant="outline">Fonksiyonel</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">
                        Canlı destek ve kullanıcı iletişimi için kullanılır. Destek geçmişini
                        saklar.
                      </p>
                      <div className="flex space-x-4 text-xs text-muted-foreground">
                        <span>
                          <strong>Saklama:</strong> 13 ay
                        </span>
                        <span>
                          <strong>Politika:</strong> intercom.com/legal/privacy
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-b-4 border-border border-b-muted-foreground mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    5. Çerez Yaşam Süreleri
                  </h2>

                  <p className="text-muted-foreground mb-6">
                    Farklı çerez türlerinin farklı saklama süreleri vardır:
                  </p>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                      <div>
                        <span className="font-medium text-foreground">Oturum Çerezleri</span>
                        <p className="text-muted-foreground text-sm">
                          Tarayıcı kapatılınca silinir
                        </p>
                      </div>
                      <Badge variant="secondary">Geçici</Badge>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                      <div>
                        <span className="font-medium text-foreground">Kimlik Doğrulama</span>
                        <p className="text-muted-foreground text-sm">Güvenlik ve oturum yönetimi</p>
                      </div>
                      <Badge variant="outline">30 gün</Badge>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                      <div>
                        <span className="font-medium text-foreground">Tercih Çerezleri</span>
                        <p className="text-muted-foreground text-sm">
                          Dil, tema ve kişiselleştirme
                        </p>
                      </div>
                      <Badge variant="outline">1 yıl</Badge>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                      <div>
                        <span className="font-medium text-foreground">Analitik Çerezler</span>
                        <p className="text-muted-foreground text-sm">
                          Site kullanımı ve performans
                        </p>
                      </div>
                      <Badge variant="outline">2 yıl</Badge>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                      <div>
                        <span className="font-medium text-foreground">Pazarlama Çerezleri</span>
                        <p className="text-muted-foreground text-sm">Reklam ve kampanya takibi</p>
                      </div>
                      <Badge variant="outline">90 gün</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-b-4 border-border border-b-muted-foreground mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Yasal Haklarınız</h2>

                  <p className="text-muted-foreground mb-6">
                    KVKK ve GDPR kapsamında çerezlerle ilgili haklarınız:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-foreground mb-1">Rıza Kontrolü</h3>
                        <p className="text-muted-foreground text-sm">
                          İsteğe bağlı çerezler için verdiğiniz rızayı geri çekebilirsiniz
                        </p>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-foreground mb-1">Erişim Hakkı</h3>
                        <p className="text-muted-foreground text-sm">
                          Hangi çerezlerin kullanıldığını ve amaçlarını öğrenebilirsiniz
                        </p>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-foreground mb-1">Silme Hakkı</h3>
                        <p className="text-muted-foreground text-sm">
                          Çerezlerin silinmesini talep edebilirsiniz
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-foreground mb-1">Taşınabilirlik</h3>
                        <p className="text-muted-foreground text-sm">
                          Çerez tercihlerinizi başka platformlara aktarabilirsiniz
                        </p>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-foreground mb-1">İtiraz Hakkı</h3>
                        <p className="text-muted-foreground text-sm">
                          Profilleme ve otomatik karar vermede kullanıma itiraz edebilirsiniz
                        </p>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-foreground mb-1">Şikayet Hakkı</h3>
                        <p className="text-muted-foreground text-sm">
                          KVKK Kurulu&apos;na veya DPA&apos;ya şikayet edebilirsiniz
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-b-4 border-border border-b-muted-foreground mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Güncellemeler</h2>

                  <p className="text-muted-foreground mb-6">
                    Bu çerez politikası zaman zaman güncellenebilir:
                  </p>

                  <div className="space-y-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-900 mb-2">Güncelleme Nedenleri</h3>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>• Yeni çerez türlerinin eklenmesi</li>
                        <li>• Yasal gerekliliklerdeki değişiklikler</li>
                        <li>• Üçüncü taraf hizmet değişiklikleri</li>
                        <li>• Teknolojik gelişmeler</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h3 className="font-semibold text-green-900 mb-2">Bildirim Yöntemleri</h3>
                      <ul className="text-green-800 text-sm space-y-1">
                        <li>• Platform üzerinde banner bildirimi</li>
                        <li>• E-posta ile önemli değişiklikler</li>
                        <li>• Web sitesinde güncelleme tarihi</li>
                        <li>• Hesap bildirimlerinde uyarı</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-b-4 border-border border-b-muted-foreground">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. İletişim</h2>

                  <p className="text-muted-foreground mb-6">
                    Çerez politikası hakkında sorularınız için bize ulaşabilirsiniz:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted/30 border border-border rounded-lg p-6">
                      <h3 className="font-semibold text-foreground mb-4">Genel Sorular</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p>
                          <strong>E-posta:</strong> privacy@medaist.com
                        </p>
                        <p>
                          <strong>Konu:</strong> &quot;Çerez Politikası&quot;
                        </p>
                        <p>
                          <strong>Yanıt Süresi:</strong> 48 saat
                        </p>
                      </div>
                    </div>

                    <div className="bg-muted/30 border border-border rounded-lg p-6">
                      <h3 className="font-semibold text-foreground mb-4">Teknik Destek</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p>
                          <strong>E-posta:</strong> support@medaist.com
                        </p>
                        <p>
                          <strong>Platform:</strong> Canlı destek
                        </p>
                        <p>
                          <strong>Çalışma Saatleri:</strong> 09:00-18:00
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Faydalı Linkler:</strong>
                      <br />
                      • Gizlilik Politikası: /privacy
                      <br />
                      • KVKK Aydınlatma Metni: /kvkk
                      <br />• Kullanım Şartları: /terms
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

export default CookiesPage;

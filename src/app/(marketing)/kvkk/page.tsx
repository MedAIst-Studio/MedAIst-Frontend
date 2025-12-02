import {AlertCircle, FileText, Shield, Users} from "lucide-react";
import {Metadata} from "next";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni - MedAIst",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni ve veri işleme bilgileri.",
  keywords: ["KVKK", "kişisel veri", "aydınlatma metni", "veri koruma", "veri işleme"],
  openGraph: {
    title: "KVKK Aydınlatma Metni - MedAIst",
    description: "Kişisel verilerinizin işlenmesi hakkında yasal bilgilendirme.",
  },
};

const KVKKPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 relative">
        <MaxWidthWrapper>
          <div className="text-center space-y-8">
            <Badge className="mx-auto" variant="outline">
              <Shield className="h-4 w-4 mr-2" />
              KVKK Uyumluluğu
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                <span className="text-primary">KVKK</span>
                <br />
                Aydınlatma Metni
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin
                işlenmesi hakkında aydınlatma.
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
              <Card>
                <CardHeader className="text-center pb-3">
                  <FileText className="h-6 w-6 mx-auto text-primary mb-2" />
                  <CardTitle className="text-sm">Veri Türleri</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-muted-foreground text-center">
                    İşlenen kişisel veri kategorileri
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center pb-3">
                  <Users className="h-6 w-6 mx-auto text-primary mb-2" />
                  <CardTitle className="text-sm">İşleme Amaçları</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-muted-foreground text-center">
                    Verilerinizin kullanım amaçları
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center pb-3">
                  <Shield className="h-6 w-6 mx-auto text-primary mb-2" />
                  <CardTitle className="text-sm">Hukuki Dayanaklar</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-muted-foreground text-center">
                    Veri işlemenin yasal temelleri
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center pb-3">
                  <AlertCircle className="h-6 w-6 mx-auto text-primary mb-2" />
                  <CardTitle className="text-sm">Veri Güvenliği</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-muted-foreground text-center">
                    Güvenlik önlemleri ve koruma
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="prose max-w-none flex flex-col gap-10">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Veri Sorumlusu</h2>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-blue-900 mb-3">
                      MedAIst (Geliştirici: Ömer Faruk Işık)
                    </h3>
                    <div className="space-y-2 text-blue-800">
                      <p>
                        <strong>Adres:</strong> İstanbul, Türkiye
                      </p>
                      <p>
                        <strong>E-posta:</strong> destek@medaist.com
                      </p>
                      <p>
                        <strong>Website:</strong> www.medaist.com
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    MedAIst olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu
                    (&quot;KVKK&quot;) uyarınca veri sorumlusu sıfatıyla, kişisel verilerinizin
                    işlenmesi hakkında sizi aydınlatmakla yükümlüyüz. MedAIst, bireysel bir girişim
                    olup, kullanıcı gizliliğine ve veri güvenliğine en üst düzeyde önem vermektedir.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    2. Kişisel Verilerin Toplanma Yöntemi
                  </h2>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Kişisel verileriniz aşağıdaki yöntemlerle toplanmaktadır:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Otomatik Toplama</h3>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-2 text-sm">
                        <li>Web sitesi ve mobil uygulama kullanımı</li>
                        <li>Platform etkileşimleri ve davranış analizi</li>
                        <li>Çerezler ve benzer teknolojiler</li>
                        <li>Log dosyaları ve teknik veriler</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Manuel Toplama</h3>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-2 text-sm">
                        <li>Hesap kayıt formu</li>
                        <li>Profil bilgileri güncelleme</li>
                        <li>İletişim formları</li>
                        <li>Müşteri destek talepleri</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    3. İşlenen Kişisel Veri Türleri
                  </h2>

                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        3.1 Kimlik Verisi
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Ad, soyad, e-posta adresi, profil fotoğrafı
                      </p>
                      <div className="bg-muted/30 rounded px-3 py-2">
                        <span className="text-xs text-muted-foreground">
                          <strong>Kaynak:</strong> Kayıt formu, profil ayarları
                        </span>
                      </div>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        3.2 İletişim Verisi
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        E-posta adresi, telefon numarası (isteğe bağlı)
                      </p>
                      <div className="bg-muted/30 rounded px-3 py-2">
                        <span className="text-xs text-muted-foreground">
                          <strong>Kaynak:</strong> Kayıt formu, iletişim formları
                        </span>
                      </div>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        3.3 Eğitim/Meslek Verisi
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Okul/üniversite bilgileri, sınıf/bölüm bilgisi (isteğe bağlı)
                      </p>
                      <div className="bg-muted/30 rounded px-3 py-2">
                        <span className="text-xs text-muted-foreground">
                          <strong>Kaynak:</strong> Profil ayarları, kayıt formu
                        </span>
                      </div>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        3.4 Platform Kullanım Verisi
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Çalışma süreleri, quiz sonuçları, not içerikleri, AI chat geçmişi
                      </p>
                      <div className="bg-muted/30 rounded px-3 py-2">
                        <span className="text-xs text-muted-foreground">
                          <strong>Kaynak:</strong> Platform etkileşimleri, kullanım analizi
                        </span>
                      </div>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        3.5 Teknik Veri
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        IP adresi, tarayıcı bilgileri, cihaz bilgileri, konum bilgisi
                      </p>
                      <div className="bg-muted/30 rounded px-3 py-2">
                        <span className="text-xs text-muted-foreground">
                          <strong>Kaynak:</strong> Otomatik toplama, log dosyaları
                        </span>
                      </div>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        3.6 Finansal Veri
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Ödeme bilgileri (sadece işlem referansları, kart bilgileri değil)
                      </p>
                      <div className="bg-muted/30 rounded px-3 py-2">
                        <span className="text-xs text-muted-foreground">
                          <strong>Kaynak:</strong> Ödeme işlemleri (üçüncü taraf ödeme
                          sağlayıcıları)
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    4. Kişisel Verilerin İşlenme Amaçları
                  </h2>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h3 className="font-semibold text-blue-900 mb-3">Temel Hizmet Sunumu</h3>
                        <ul className="text-blue-800 text-sm space-y-1">
                          <li>• Hesap yönetimi ve kimlik doğrulama</li>
                          <li>• Platform özelliklerinin sunulması</li>
                          <li>• Kişiselleştirilmiş öğrenme deneyimi</li>
                          <li>• İlerleme takibi ve raporlama</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h3 className="font-semibold text-green-900 mb-3">İletişim ve Destek</h3>
                        <ul className="text-green-800 text-sm space-y-1">
                          <li>• Müşteri destek hizmetleri</li>
                          <li>• Platform güncellemeleri</li>
                          <li>• Güvenlik bildirimleri</li>
                          <li>• Teknik destek sağlama</li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <h3 className="font-semibold text-purple-900 mb-3">
                          Analitik ve İyileştirme
                        </h3>
                        <ul className="text-purple-800 text-sm space-y-1">
                          <li>• Kullanım analizi ve istatistikler</li>
                          <li>• Platform performansı ölçümü</li>
                          <li>• Yeni özellik geliştirme</li>
                          <li>• Kullanıcı deneyimi optimizasyonu</li>
                        </ul>
                      </div>

                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <h3 className="font-semibold text-orange-900 mb-3">Yasal Uyumluluk</h3>
                        <ul className="text-orange-800 text-sm space-y-1">
                          <li>• Yasal yükümlülüklerin yerine getirilmesi</li>
                          <li>• Güvenlik ve dolandırıcılık önleme</li>
                          <li>• Denetim ve raporlama gereklilikleri</li>
                          <li>• Hukuki süreçlere destek</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    5. Kişisel Verilerin İşlenme Hukuki Sebepleri
                  </h2>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    KVKK&apos;nun 5. ve 6. maddelerine uygun olarak kişisel verileriniz aşağıdaki
                    hukuki sebeplere dayanarak işlenmektedir:
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        a
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Açık Rıza (KVKK m.5/1-a)
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Platform kayıt sırasında verdiğiniz açık rıza kapsamında pazarlama
                          iletişimi ve kişiselleştirme
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        c
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Sözleşmenin Kurulması veya İfası (KVKK m.5/1-c)
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Hizmet sözleşmesinin kurulması ve ifa edilmesi için gerekli işlemler
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        e
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Kanuni Yükümlülük (KVKK m.5/1-e)
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Vergi mevzuatı, ticaret kanunu gibi yasal yükümlülüklerimizin yerine
                          getirilmesi
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        f
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Meşru Menfaat (KVKK m.5/1-f)
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Platform güvenliği, dolandırıcılık önleme ve hizmet kalitesini artırma
                          amaçlı işlemler
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    6. Kişisel Verilerin Aktarılması
                  </h2>

                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    6.1 Yurt İçi Aktarım
                  </h3>
                  <div className="mb-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                      <p className="text-blue-800 text-sm">
                        <strong>İlke:</strong> Kişisel verileriniz sadece hizmet sunumu için gerekli
                        olan üçüncü taraflara aktarılır.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                        <span className="font-medium text-foreground">Ödeme Sağlayıcıları</span>
                        <span className="text-muted-foreground text-sm">Finansal işlemler</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                        <span className="font-medium text-foreground">Teknoloji Altyapı</span>
                        <span className="text-muted-foreground text-sm">
                          Sunucu ve güvenlik hizmetleri
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                        <span className="font-medium text-foreground">Analitik Sağlayıcıları</span>
                        <span className="text-muted-foreground text-sm">
                          Platform analizi (anonim)
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    6.2 Yurt Dışı Aktarım
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Verileriniz hizmetin sağlanabilmesi için yurt dışındaki güvenli sunucularda
                    (OpenAI, Qdrant vb.) işlenebilir. Bu işlem, modern yapay zeka ve veritabanı
                    teknolojilerinin doğası gereği zorunludur.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <ul className="text-amber-800 text-sm space-y-2">
                      <li>
                        • Sunucularımız ve iş ortaklarımız (OpenAI, Qdrant) global standartlarda
                        güvenlik önlemlerine sahiptir
                      </li>
                      <li>• Verileriniz şifrelenerek saklanmakta ve işlenmektedir</li>
                      <li>• KVKK m.9 uyarınca gerekli aydınlatma yapılmaktadır</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    7. Kişisel Veri Sahibinin Hakları
                  </h2>

                  <p className="text-muted-foreground mb-6">
                    KVKK&apos;nun 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-foreground text-sm mb-1">
                          Bilgi Talep Etme Hakkı
                        </h3>
                        <p className="text-muted-foreground text-xs">
                          Kişisel verilerinizin işlenip işlenmediğini öğrenme
                        </p>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-foreground text-sm mb-1">
                          Bilgi Talep Etme Hakkı
                        </h3>
                        <p className="text-muted-foreground text-xs">
                          İşlenme amacı, aktarılan üçüncü kişiler hakkında bilgi alma
                        </p>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-foreground text-sm mb-1">
                          Düzeltme Hakkı
                        </h3>
                        <p className="text-muted-foreground text-xs">
                          Yanlış veya eksik verilerin düzeltilmesini isteme
                        </p>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-foreground text-sm mb-1">Silme Hakkı</h3>
                        <p className="text-muted-foreground text-xs">
                          Kişisel verilerin silinmesini talep etme
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-foreground text-sm mb-1">
                          Anonimleştirme Hakkı
                        </h3>
                        <p className="text-muted-foreground text-xs">
                          Kişisel verilerin anonim hale getirilmesini isteme
                        </p>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-foreground text-sm mb-1">
                          Aktarım Durdurma Hakkı
                        </h3>
                        <p className="text-muted-foreground text-xs">
                          Üçüncü kişilere aktarımın durdurulmasını talep etme
                        </p>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-foreground text-sm mb-1">İtiraz Hakkı</h3>
                        <p className="text-muted-foreground text-xs">
                          Kişisel veri işlenmesine itiraz etme
                        </p>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-foreground text-sm mb-1">
                          Zarar Tazminatı Hakkı
                        </h3>
                        <p className="text-muted-foreground text-xs">
                          Hukuka aykırı işleme nedeniyle tazminat talep etme
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Başvuru Yöntemleri</h2>

                  <p className="text-muted-foreground mb-6">
                    KVKK haklarınızı kullanmak için aşağıdaki yöntemlerle başvurabilirsiniz:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-muted/30 border border-border rounded-lg p-6">
                      <h3 className="font-semibold text-foreground mb-4">Online Başvuru</h3>
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm font-medium text-muted-foreground">
                            E-posta:
                          </span>
                          <p className="text-muted-foreground text-sm">kvkk@medaist.com</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-muted-foreground">
                            Online Form:
                          </span>
                          <p className="text-muted-foreground text-sm">
                            Hesap ayarları → Veri hakları
                          </p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-muted-foreground">
                            Yanıt Süresi:
                          </span>
                          <p className="text-muted-foreground text-sm">En geç 30 gün</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/30 border border-border rounded-lg p-6">
                      <h3 className="font-semibold text-foreground mb-4">Yazılı Başvuru</h3>
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm font-medium text-muted-foreground">
                            Posta Adresi:
                          </span>
                          <p className="text-muted-foreground text-sm">
                            MedAIst Studio
                            <br />
                            KVKK Başvuru Birimi
                            <br />
                            İstanbul, Türkiye
                          </p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-muted-foreground">
                            Gerekli Belgeler:
                          </span>
                          <p className="text-muted-foreground text-sm">
                            Kimlik fotokopisi, dilekçe
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-amber-800 text-sm">
                      <strong>Not:</strong> Başvurunuzun değerlendirilmesi ücretsizdir. Ancak
                      bilgilerin çoğaltılması halinde KVKK Veri Sorumluları Sicili Hakkında
                      Yönetmelik&apos;te belirtilen tarifenin uygulanabileceğini bildiririz.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Veri Güvenliği</h2>

                  <p className="text-muted-foreground mb-6">
                    KVKK&apos;nun 12. maddesi uyarınca kişisel verilerinizin güvenliği için gerekli
                    teknik ve idari tedbirler alınmıştır:
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Teknik Güvenlik</h3>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        <li>SSL/TLS şifreleme</li>
                        <li>Güvenlik duvarları</li>
                        <li>Erişim kontrolleri</li>
                        <li>Veri yedeklemeleri</li>
                      </ul>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">İdari Güvenlik</h3>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        <li>Personel eğitimleri</li>
                        <li>Gizlilik sözleşmeleri</li>
                        <li>Erişim yetkilendirme</li>
                        <li>İç denetimler</li>
                      </ul>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <AlertCircle className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Olay Yönetimi</h3>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        <li>Güvenlik izleme</li>
                        <li>Incident response</li>
                        <li>Veri ihlali protokolü</li>
                        <li>Acil durum planları</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    10. İçerik Sorumluluğu ve Telif Hakları
                  </h2>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <p className="text-red-900 font-medium mb-2">Önemli Yasal Uyarı:</p>
                    <p className="text-red-800 leading-relaxed">
                      Kullanıcı, sisteme yüklediği dokümanların telif hakkından kendisi sorumludur.
                      MedAIst, yüklenen içeriklerin yasal olup olmadığını kontrol etmez ve edemez.
                      Kullanıcılar, yükledikleri içeriklerin telif haklarını ihlal etmediğini,
                      yasalara uygun olduğunu ve üçüncü şahısların haklarına tecavüz etmediğini
                      kabul ve beyan eder.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    11. İletişim Bilgileri
                  </h2>

                  <p className="text-muted-foreground mb-6">
                    KVKK ile ilgili sorularınız için bizimle iletişime geçebilirsiniz:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted/30 border border-border rounded-lg p-6">
                      <h3 className="font-semibold text-foreground mb-4">Veri Koruma Sorumlusu</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p>
                          <strong>E-posta:</strong> kvkk@medaist.com
                        </p>
                        <p>
                          <strong>Adres:</strong> İstanbul, Türkiye
                        </p>
                        <p>
                          <strong>Çalışma Saatleri:</strong> 09:00-18:00 (Haftaiçi)
                        </p>
                      </div>
                    </div>

                    <div className="bg-muted/30 border border-border rounded-lg p-6">
                      <h3 className="font-semibold text-foreground mb-4">
                        Kişisel Verileri Koruma Kurulu
                      </h3>
                      <div className="space-y-2 text-muted-foreground text-sm">
                        <p>
                          Başvurularınıza yanıt alamamanız durumunda KVKK&apos;ya şikayet
                          edebilirsiniz:
                        </p>
                        <p>
                          <strong>Website:</strong> kvkk.gov.tr
                        </p>
                        <p>
                          <strong>E-posta:</strong> kvkk@kvkk.gov.tr
                        </p>
                        <p>
                          <strong>Adres:</strong> Ziya Gökalp Caddesi No:9 Kızılay/ANKARA
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Son Güncelleme:</strong> Bu aydınlatma metni 3 Ekim 2024 tarihinde
                      güncellenmiştir. Değişiklikler derhal yürürlüğe girer ve web sitemizde
                      yayınlanır.
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

export default KVKKPage;

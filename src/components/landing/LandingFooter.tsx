import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

const LandingFooter = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <span className="text-2xl font-bold">
              Med<span className="text-blue-400">AI</span>st
            </span>
            <p className="text-slate-400">Yapay zeka destekli tıp eğitimi platformu</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Platform</h4>
            <div className="space-y-2 text-slate-400">
              <p>AI Chat</p>
              <p>Akıllı Notlar</p>
              <p>Quiz Sistemi</p>
              <p>İlerleme Takibi</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Destek</h4>
            <div className="space-y-2 text-slate-400">
              <p>Yardım Merkezi</p>
              <p>İletişim</p>
              <p>SSS</p>
              <p>Topluluk</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Yasal</h4>
            <div className="space-y-2 text-slate-400">
              <p>Gizlilik Politikası</p>
              <p>Kullanım Şartları</p>
              <p>KVKK</p>
              <p>Çerezler</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>&copy; 2024 MedAIst. Tüm hakları saklıdır.</p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default LandingFooter;

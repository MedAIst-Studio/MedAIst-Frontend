import {Metadata} from "next";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Files} from "@/features/files/components/Files";

export const metadata: Metadata = {
  title: "Dosyalarım - MedAIst",
  description: "PDF dosyalarınızı yükleyin ve yapay zeka ile etkileşime geçin.",
};

const FilesPage = () => {
  return (
    <MaxWidthWrapper className="py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dosyalarım</h1>
        <p className="text-muted-foreground">
          PDF dosyalarınızı yükleyin ve yapay zeka ile etkileşime geçin.
        </p>
      </div>

      <Files />
    </MaxWidthWrapper>
  );
};

export default FilesPage;

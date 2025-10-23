import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Files} from "@/features/files/components/Files";

const FilesPage = () => {
  return (
    <MaxWidthWrapper className="py-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Dosyalarım</h1>
          <p className="text-muted-foreground">
            PDF dosyalarınızı yükleyin ve yapay zeka ile etkileşime geçin.
          </p>
        </div>

        <Files />
      </div>
    </MaxWidthWrapper>
  );
};

export default FilesPage;

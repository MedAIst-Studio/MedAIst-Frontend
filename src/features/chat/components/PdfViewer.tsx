"use client";

import {useState} from "react";
import {Document, Page, pdfjs} from "react-pdf";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader} from "@/components/ui/card";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

interface PdfViewerProps {
  fileUrl: string;
  className?: string;
}

export const PdfViewer = ({fileUrl, className = ""}: PdfViewerProps) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  function onDocumentLoadSuccess({numPages}: {numPages: number}): void {
    setNumPages(numPages);
    setLoading(false);
  }

  function onDocumentLoadError(error: Error): void {
    setError(error.message);
    setLoading(false);
  }

  if (!fileUrl) {
    return (
      <Card className={`w-full ${className}`}>
        <CardContent className="p-6 text-center">
          <div className="text-muted-foreground">Dosya bulunamadı</div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className={`w-full ${className}`}>
        <CardContent className="p-6 text-center">
          <div className="text-destructive">PDF yüklenirken hata oluştu: {error}</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`w-full h-full ${className}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          {numPages && (
            <div className="flex items-center gap-2">
              <Button
                disabled={pageNumber <= 1}
                size="sm"
                variant="outline"
                onClick={() => setPageNumber(pageNumber - 1)}
              >
                Önceki
              </Button>
              <span className="text-xs">
                {pageNumber} / {numPages}
              </span>
              <Button
                disabled={pageNumber >= numPages}
                size="sm"
                variant="outline"
                onClick={() => setPageNumber(pageNumber + 1)}
              >
                Sonraki
              </Button>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-0 flex-1 overflow-auto">
        <div className="flex justify-center p-4">
          {loading && (
            <div className="flex items-center justify-center h-96">
              <div className="text-muted-foreground">PDF yükleniyor...</div>
            </div>
          )}

          <Document
            file={fileUrl}
            onLoadError={onDocumentLoadError}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page
              className="shadow-lg"
              pageNumber={pageNumber}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
        </div>
      </CardContent>
    </Card>
  );
};

"use client";

import {
  ChevronLeft,
  ChevronRight,
  Download,
  Maximize,
  Minimize,
  RotateCw,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import {useCallback, useEffect, useRef, useState} from "react";
import {Document, Page, pdfjs} from "react-pdf";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

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

  // Advanced features state
  const [scale, setScale] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [pageWidth, setPageWidth] = useState<number>(0);

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  // Calculate optimal scale based on container width
  const calculateOptimalScale = useCallback(() => {
    if (containerRef.current && pageWidth > 0) {
      const containerWidth = containerRef.current.clientWidth - 32; // padding
      const optimalScale = Math.min(containerWidth / pageWidth, 2); // max 2x zoom

      return Math.max(optimalScale, 0.5); // min 0.5x zoom
    }

    return 1;
  }, [pageWidth]);

  // Update scale when container resizes
  useEffect(() => {
    const handleResize = () => {
      if (pageWidth > 0) {
        const newScale = calculateOptimalScale();

        setScale(newScale);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [calculateOptimalScale, pageWidth]);

  function onDocumentLoadSuccess({numPages}: {numPages: number}): void {
    setNumPages(numPages);
    setLoading(false);
  }

  function onDocumentLoadError(error: Error): void {
    setError(error.message);
    setLoading(false);
  }

  function onPageLoadSuccess(page: any): void {
    setPageWidth(page.width);
  }

  // Navigation functions
  const goToPage = (page: number) => {
    if (page >= 1 && page <= (numPages || 1)) {
      setPageNumber(page);
    }
  };

  const nextPage = () => goToPage(pageNumber + 1);
  const prevPage = () => goToPage(pageNumber - 1);
  const firstPage = () => goToPage(1);
  const lastPage = () => goToPage(numPages || 1);

  const zoomIn = () => setScale((prev) => Math.min(prev * 1.2, 3));
  const zoomOut = () => setScale((prev) => Math.max(prev / 1.2, 0.3));
  const resetZoom = () => setScale(calculateOptimalScale());

  const rotateClockwise = () => setRotation((prev) => (prev + 90) % 360);

  const toggleFullscreen = () => setIsFullscreen((prev) => !prev);

  const downloadPdf = () => {
    const link = document.createElement("a");

    link.href = fileUrl;
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
    <div
      className={`w-full h-full ${className} ${isFullscreen ? "fixed inset-0 z-50 bg-background" : ""}`}
    >
      <Card className="w-full h-full">
        <CardHeader className="pb-2 space-y-2">
          {/* Main Toolbar */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            {/* Navigation Controls */}
            {numPages && (
              <div className="flex items-center gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className="gap-0"
                        disabled={pageNumber <= 1}
                        size="icon-sm"
                        variant="outline"
                        onClick={firstPage}
                      >
                        <ChevronLeft className="-mr-2" />
                        <ChevronLeft />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>İlk sayfa</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        disabled={pageNumber <= 1}
                        size="icon-sm"
                        variant="outline"
                        onClick={prevPage}
                      >
                        <ChevronLeft />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Önceki sayfa</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <div className="flex items-center gap-1">
                  <Input
                    className="w-16 text-center h-8"
                    max={numPages}
                    min={1}
                    type="number"
                    value={pageNumber}
                    onChange={(e) => goToPage(parseInt(e.target.value) || 1)}
                  />
                  <span className="text-sm text-muted-foreground">/ {numPages}</span>
                </div>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        disabled={pageNumber >= numPages}
                        size="icon-sm"
                        variant="outline"
                        onClick={nextPage}
                      >
                        <ChevronRight />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Sonraki sayfa</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className="gap-0"
                        disabled={pageNumber >= numPages}
                        size="icon-sm"
                        variant="outline"
                        onClick={lastPage}
                      >
                        <ChevronRight className="w-4 h-4" />
                        <ChevronRight className="w-4 h-4 -ml-2" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Son sayfa</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            )}

            {/* Action Controls */}
            <div className="flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon-sm" variant="outline" onClick={zoomOut}>
                      <ZoomOut className="w-4 h-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Uzaklaştır</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Select
                value={scale.toFixed(1)}
                onValueChange={(value) => setScale(parseFloat(value))}
              >
                <SelectTrigger className="w-24 !h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0.5">50%</SelectItem>
                  <SelectItem value="0.7">70%</SelectItem>
                  <SelectItem value="1.0">100%</SelectItem>
                  <SelectItem value="1.2">120%</SelectItem>
                  <SelectItem value="1.5">150%</SelectItem>
                  <SelectItem value="2.0">200%</SelectItem>
                </SelectContent>
              </Select>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon-sm" variant="outline" onClick={zoomIn}>
                      <ZoomIn className="w-4 h-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Yakınlaştır</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="sm" variant="outline" onClick={resetZoom}>
                      Sığdır
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Sayfaya sığdır</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon-sm" variant="outline" onClick={rotateClockwise}>
                      <RotateCw className="w-4 h-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>90° döndür</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon-sm" variant="outline" onClick={downloadPdf}>
                      <Download className="w-4 h-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>PDF&apos;i indir</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon-sm" variant="outline" onClick={toggleFullscreen}>
                      {isFullscreen ? (
                        <Minimize className="w-4 h-4" />
                      ) : (
                        <Maximize className="w-4 h-4" />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{isFullscreen ? "Tam ekrandan çık" : "Tam ekran"}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </CardHeader>

        <CardContent ref={containerRef} className="p-0 flex-1 overflow-auto">
          <div ref={pageRef} className="flex justify-center p-4">
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
                className="shadow-lg transition-all duration-200"
                height={undefined}
                pageNumber={pageNumber}
                renderAnnotationLayer={true}
                renderTextLayer={true}
                rotate={rotation}
                scale={scale}
                width={undefined}
                onLoadSuccess={onPageLoadSuccess}
              />
            </Document>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

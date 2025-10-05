"use client";

import type {Document} from "@/features/notes/types";

import {Search, Upload} from "lucide-react";
import {useState} from "react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
  ChatInterface,
  DocumentCard,
  FileProgressDisplay,
  FileUploadComponent,
} from "@/features/notes/components";
import {useChat, useDocumentUpload, useDocuments} from "@/features/notes/hooks";

export default function PDFChatPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Hooks
  const {documents, searchDocuments} = useDocuments();
  const {uploadingFiles, isUploading, uploadFiles} = useDocumentUpload();
  const chat = useChat(selectedDocument || "");

  const filteredDocuments = searchDocuments(searchQuery);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (!files || files.length === 0) return;

    uploadFiles(files);
    event.target.value = ""; // Reset input
  };

  const handleDocumentClick = (documentId: string) => {
    setSelectedDocument(documentId);
    setIsChatOpen(true);
    chat.initializeChat();
  };

  const handleChatClose = () => {
    setIsChatOpen(false);
    setSelectedDocument(null);
  };

  return (
    <div className="p-6">
      <MaxWidthWrapper className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">PDF Chat</h1>
            <p className="text-slate-600">Dosyalarınızı yükleyin ve AI ile sohbet edin</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-5 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            className="pl-9"
            placeholder="Döküman ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map((document: Document) => (
            <DocumentCard
              key={document.id}
              document={document}
              onChatClick={() => handleDocumentClick(document.id)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredDocuments.length === 0 && !searchQuery && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="p-4 bg-slate-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Upload className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Henüz döküman yüklemediniz
              </h3>
              <p className="text-slate-600 mb-6">
                PDF, Word veya metin dosyalarınızı yükleyerek AI ile sohbet etmeye başlayın
              </p>
              <Button asChild>
                <label className="cursor-pointer" htmlFor="file-upload">
                  <Upload className="h-4 w-4 mr-2" />
                  İlk Dosyanızı Yükleyin
                </label>
              </Button>
            </div>
          </div>
        )}

        {/* No Search Results */}
        {filteredDocuments.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="p-4 bg-slate-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Search className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Arama sonucu bulunamadı</h3>
              <p className="text-slate-600">
                &quot;{searchQuery}&quot; için herhangi bir döküman bulunamadı
              </p>
            </div>
          </div>
        )}

        <FileUploadComponent
          isUploading={isUploading}
          onFileSelect={(files: FileList) => uploadFiles(files)}
        />

        {uploadingFiles.length > 0 && <FileProgressDisplay files={uploadingFiles} />}
      </MaxWidthWrapper>
      <br />

      {isChatOpen && selectedDocument && (
        <ChatInterface
          document={documents.find((d) => d.id === selectedDocument)!}
          isOpen={isChatOpen}
          onClose={handleChatClose}
        />
      )}
    </div>
  );
}

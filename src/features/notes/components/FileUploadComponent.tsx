import type {FileUploadProgress} from "../types";

import {Plus, Upload} from "lucide-react";
import {useState} from "react";

import {Button} from "@/components/ui/button";

interface FileUploadComponentProps {
  onFileSelect: (files: FileList) => void;
  acceptedTypes?: string;
  multiple?: boolean;
  isUploading?: boolean;
}

export const FileUploadComponent = ({
  onFileSelect,
  acceptedTypes = ".pdf,.doc,.docx,.txt,.md",
  multiple = true,
  isUploading = false,
}: FileUploadComponentProps) => {
  const [dragOver, setDragOver] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      onFileSelect(files);
      event.target.value = ""; // Reset input
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;

    if (files && files.length > 0) {
      onFileSelect(files);
    }
  };

  return (
    <div
      className={`
        relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300
        ${
          dragOver
            ? "border-primary bg-primary/5 border-solid"
            : "border-slate-300 hover:border-slate-400"
        }
        ${isUploading ? "opacity-50 pointer-events-none" : ""}
      `}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        accept={acceptedTypes}
        className="hidden"
        disabled={isUploading}
        id="file-upload-input"
        multiple={multiple}
        type="file"
        onChange={handleFileSelect}
      />

      <div className="space-y-4">
        <div className="mx-auto w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
          <Upload className="h-6 w-6 text-slate-400" />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            {isUploading ? "Dosyalar yükleniyor..." : "Dosyalarınızı yükleyin"}
          </h3>
          <p className="text-slate-600 mb-4">
            {dragOver
              ? "Dosyaları buraya bırakın"
              : "PDF, Word, TXT veya Markdown dosyalarını sürükleyip bırakın"}
          </p>
        </div>

        <Button asChild disabled={isUploading}>
          <label className="cursor-pointer" htmlFor="file-upload-input">
            {isUploading ? (
              <>
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                Yükleniyor...
              </>
            ) : (
              <>
                <Plus className="h-4 w-4 mr-2" />
                Dosya Seç
              </>
            )}
          </label>
        </Button>

        <p className="text-xs text-slate-500">
          Desteklenen formatlar: PDF, DOC, DOCX, TXT, MD • Maksimum 10MB
        </p>
      </div>
    </div>
  );
};

interface FileProgressDisplayProps {
  files: {name: string; progress: FileUploadProgress}[];
}

export const FileProgressDisplay = ({files}: FileProgressDisplayProps) => {
  if (files.length === 0) return null;

  return (
    <div className="mt-4 space-y-2">
      {files.map((file, index) => (
        <div key={index} className="bg-slate-50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium truncate">{file.name}</span>
            <span className="text-xs text-slate-500">{file.progress.progress}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-1.5">
            <div
              className={`h-1.5 rounded-full transition-all duration-300 ${
                file.progress.status === "error"
                  ? "bg-red-500"
                  : file.progress.status === "completed"
                    ? "bg-green-500"
                    : "bg-primary"
              }`}
              style={{width: `${file.progress.progress}%`}}
            />
          </div>
          {file.progress.error && (
            <p className="text-xs text-red-600 mt-1">{file.progress.error}</p>
          )}
        </div>
      ))}
    </div>
  );
};

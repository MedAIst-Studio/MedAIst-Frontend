import type {FileUploadProgress} from "../types";

import {Plus, Upload} from "lucide-react";
import {useState} from "react";
import {toast} from "sonner";

import {Button} from "@/components/ui/button";

import {FILE_COUNT_LIMITS, FILE_SIZE_LIMITS} from "../constants";
import {formatFileSize, validateFiles} from "../utils";

interface FileUploadProps {
  onFileSelect: (files: FileList) => void;
  acceptedTypes?: string;
  multiple?: boolean;
  isUploading?: boolean;
  maxFileSize?: number; // in bytes, default 10MB
  maxFiles?: number;
}

export const FileUpload = ({
  onFileSelect,
  acceptedTypes = ".pdf",
  multiple = true,
  isUploading = false,
  maxFileSize = FILE_SIZE_LIMITS.MAX,
  maxFiles = FILE_COUNT_LIMITS.MAX,
}: FileUploadProps) => {
  const [dragOver, setDragOver] = useState(false);

  const handleFileValidation = (files: FileList): boolean => {
    const acceptedTypesArray = acceptedTypes.split(",").map((type) => type.trim());

    const validation = validateFiles(files, {
      maxFileSize,
      maxFiles,
      acceptedTypes: acceptedTypesArray,
    });

    if (!validation.isValid) {
      toast.error("Dosya Hatası", {
        description: validation.error,
      });

      return false;
    }

    return true;
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      if (handleFileValidation(files)) {
        onFileSelect(files);
      }
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
      if (handleFileValidation(files)) {
        onFileSelect(files);
      }
    }
  };

  return (
    <div
      className={`
        relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300
        ${
          dragOver
            ? "border-primary bg-primary/5 border-solid"
            : "border-border/70 hover:border-border"
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
        <div className="mx-auto w-12 h-12 bg-card/50 rounded-full flex items-center justify-center">
          <Upload className="h-6 w-6 text-slate-400" />
        </div>

        <div>
          <h3 className="text-lg font-semibold  mb-2">
            {isUploading ? "Dosyalar yükleniyor..." : "Dosyalarınızı yükleyin"}
          </h3>
          <p className="text-muted-foreground mb-4">
            {dragOver ? "Dosyaları buraya bırakın" : "PDF dosyalarını sürükleyip bırakın"}
          </p>
        </div>

        <Button asChild disabled={isUploading}>
          <label className="cursor-pointer" htmlFor="file-upload-input">
            {isUploading ? (
              <>
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                Yükleniyor...
              </>
            ) : (
              <>
                <Plus />
                Dosya Seç
              </>
            )}
          </label>
        </Button>

        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">
            Desteklenen formatlar: {acceptedTypes.split(",").join(", ").toUpperCase()} • Maksimum{" "}
            {formatFileSize(maxFileSize)}
          </p>
          <p className="text-xs text-muted-foreground">
            Maksimum {maxFiles} dosya • Dosya boyutuna göre işlenme süresi değişebilir
          </p>
        </div>
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
        <div key={index} className="bg-card rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium truncate">{file.name}</span>
            <span className="text-xs text-muted-foreground">{file.progress.progress}%</span>
          </div>
          <div className="w-full bg-card rounded-full h-1.5">
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

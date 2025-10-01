"use client";

import {FileText, Upload, X} from "lucide-react";
import {useCallback, useState} from "react";

import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";

import {useFileUpload} from "../hooks";

interface FileUploadProps {
  onFileUpload?: (files: FileList) => void;
}

export function FileUpload({onFileUpload}: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const {fileUploadState, uploadFiles, resetUpload} = useFileUpload();

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const files = e.dataTransfer.files;

        uploadFiles(files);
        onFileUpload?.(files);
      }
    },
    [uploadFiles, onFileUpload],
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
        const files = e.target.files;

        uploadFiles(files);
        onFileUpload?.(files);
      }
    },
    [uploadFiles, onFileUpload],
  );

  return (
    <Card className="border-2 border-dashed p-8 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
      <div
        className={`relative ${dragActive ? "opacity-50" : ""}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          multiple
          accept=".pdf,.doc,.docx,.txt,.md"
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          disabled={fileUploadState.isUploading}
          id="file-upload"
          type="file"
          onChange={handleChange}
        />

        <div className="space-y-4">
          <div className="flex justify-center">
            <Upload className="h-12 w-12 text-primary/60" />
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              {fileUploadState.files.length > 0 ? "Add more files" : "Upload your study materials"}
            </h3>
            <p className="text-muted-foreground">
              Drag and drop your files here, or click to browse
            </p>
            <p className="text-sm text-muted-foreground">Supports PDF, DOC, DOCX, TXT, MD files</p>
          </div>

          {fileUploadState.isUploading && (
            <div className="space-y-2">
              <Progress className="h-2" value={fileUploadState.progress} />
              <p className="text-sm text-muted-foreground">
                Uploading... {fileUploadState.progress}%
              </p>
            </div>
          )}

          {fileUploadState.files.length > 0 && !fileUploadState.isUploading && (
            <div className="space-y-2">
              <h4 className="font-medium">Uploaded Files:</h4>
              <div className="space-y-1">
                {fileUploadState.files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-md bg-secondary p-2 text-sm"
                  >
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4" />
                      <span>{file.name}</span>
                      <span className="text-muted-foreground">
                        ({(file.size / 1024 / 1024).toFixed(2)} MB)
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                className="mt-2 border-b-4 border-primary/30 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-xl"
                size="sm"
                variant="outline"
                onClick={resetUpload}
              >
                <X className="mr-1 h-4 w-4" />
                Clear Files
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

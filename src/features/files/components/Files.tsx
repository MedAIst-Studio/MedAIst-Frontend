"use client";

import type {FileUploadProgress} from "../types";

import {useRouter} from "next/navigation";
import {useState} from "react";

import {Skeleton} from "@/components/ui/skeleton";

import {useDeleteFile, useFiles, useUploadFile} from "../queries";

import {FileList} from "./FileList";
import {FileProgressDisplay, FileUpload} from "./FileUpload";

export const Files = () => {
  const router = useRouter();
  const [uploadingFiles, setUploadingFiles] = useState<
    {name: string; progress: FileUploadProgress}[]
  >([]);

  const {data: files = [], isLoading} = useFiles();
  const uploadFileMutation = useUploadFile();
  const deleteFileMutation = useDeleteFile();

  const handleFileSelect = async (fileList: FileList) => {
    const filesArray = Array.from(fileList);

    // Initialize progress for all files
    const initialProgress: {name: string; progress: FileUploadProgress}[] = filesArray.map(
      (file) => ({
        name: file.name,
        progress: {progress: 0, status: "uploading" as const},
      }),
    );

    setUploadingFiles(initialProgress);

    // Upload files sequentially
    for (let i = 0; i < filesArray.length; i++) {
      const file = filesArray[i];

      try {
        // Update status to uploading
        setUploadingFiles((prev) =>
          prev.map((f, idx) =>
            idx === i ? {...f, progress: {...f.progress, progress: 50, status: "uploading"}} : f,
          ),
        );

        await uploadFileMutation.mutateAsync({
          file_title: file.name.replace(/\.pdf$/i, ""),
          file_data: file,
        });

        // Update status to completed
        setUploadingFiles((prev) =>
          prev.map((f, idx) =>
            idx === i ? {...f, progress: {progress: 100, status: "completed"}} : f,
          ),
        );
      } catch (error) {
        // Update status to error
        setUploadingFiles((prev) =>
          prev.map((f, idx) =>
            idx === i
              ? {
                  ...f,
                  progress: {
                    progress: 0,
                    status: "error",
                    error: error instanceof Error ? error.message : "Yükleme başarısız",
                  },
                }
              : f,
          ),
        );
      }
    }

    // Clear progress after a delay
    setTimeout(() => {
      setUploadingFiles([]);
    }, 3000);
  };

  const handleDeleteFile = async (fileId: string) => {
    try {
      await deleteFileMutation.mutateAsync(fileId);
    } catch {
      // Error is already handled in the mutation
    }
  };

  const handleOpenFile = (fileId: string) => {
    router.push(`/files/${fileId}`);
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="h-64 bg-card border-2 border-dashed rounded-lg animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-24 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <FileUpload
        isUploading={uploadFileMutation.isPending || uploadingFiles.length > 0}
        onFileSelect={handleFileSelect}
      />

      <FileProgressDisplay files={uploadingFiles} />

      <FileList
        deletingFileId={deleteFileMutation.isPending ? deleteFileMutation.variables : null}
        files={files}
        onDelete={handleDeleteFile}
        onOpen={handleOpenFile}
      />
    </div>
  );
};

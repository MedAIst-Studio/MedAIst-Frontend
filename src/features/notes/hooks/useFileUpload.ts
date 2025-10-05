import type {FileUploadProgress} from "../types";

import {useState} from "react";

export const useFileUpload = () => {
  const [uploadingFiles, setUploadingFiles] = useState<
    {name: string; progress: FileUploadProgress}[]
  >([]);
  const [isUploading, setIsUploading] = useState(false);

  const uploadFiles = async (files: FileList) => {
    setIsUploading(true);
    const fileArray = Array.from(files);

    // Initialize progress for all files
    const initialProgress = fileArray.map((file) => ({
      name: file.name,
      progress: {
        progress: 0,
        status: "uploading" as const,
      },
    }));

    setUploadingFiles(initialProgress);

    try {
      // Simulate file uploads
      for (let i = 0; i < fileArray.length; i++) {
        const file = fileArray[i];

        // Simulate upload progress
        for (let progress = 0; progress <= 100; progress += 20) {
          await new Promise((resolve) => setTimeout(resolve, 200));

          setUploadingFiles((prev) =>
            prev.map((item, index) =>
              index === i
                ? {
                    ...item,
                    progress: {
                      progress,
                      status: progress === 100 ? "processing" : "uploading",
                    },
                  }
                : item,
            ),
          );
        }

        // Simulate processing
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setUploadingFiles((prev) =>
          prev.map((item, index) =>
            index === i
              ? {
                  ...item,
                  progress: {
                    progress: 100,
                    status: "completed",
                  },
                }
              : item,
          ),
        );
      }

      // Clear progress after successful upload
      setTimeout(() => {
        setUploadingFiles([]);
      }, 2000);
    } catch (error) {
      setUploadingFiles((prev) =>
        prev.map((item) => ({
          ...item,
          progress: {
            progress: 0,
            status: "error",
            error: "Upload failed. Please try again.",
          },
        })),
      );
    } finally {
      setIsUploading(false);
    }
  };

  const clearProgress = () => {
    setUploadingFiles([]);
  };

  return {
    uploadingFiles,
    isUploading,
    uploadFiles,
    clearProgress,
  };
};

import type {FileUploadProgress} from "../types";

import {useState} from "react";

import {useUploadFile} from "./useFileQueries";

export const useFileUpload = () => {
  const [uploadingFiles, setUploadingFiles] = useState<
    {name: string; progress: FileUploadProgress}[]
  >([]);
  const [isUploading, setIsUploading] = useState(false);

  const {mutateAsync: uploadFile} = useUploadFile();

  const uploadFiles = async (files: FileList) => {
    setIsUploading(true);
    const fileArray = Array.from(files);

    const initialProgress = fileArray.map((file) => ({
      name: file.name,
      progress: {
        progress: 0,
        status: "uploading" as const,
      },
    }));

    setUploadingFiles(initialProgress);

    try {
      for (let i = 0; i < fileArray.length; i++) {
        const file = fileArray[i];

        setUploadingFiles((prev) =>
          prev.map((item, index) =>
            index === i
              ? {
                  ...item,
                  progress: {
                    progress: 10,
                    status: "uploading",
                  },
                }
              : item,
          ),
        );

        try {
          // Use React Query mutation to upload file
          await uploadFile({
            file_title: file.name,
            file_data: file,
          });

          // Simulate progress updates
          for (let progress = 20; progress <= 100; progress += 20) {
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

          // Mark as completed
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
        } catch (error) {
          // Handle error for this specific file
          setUploadingFiles((prev) =>
            prev.map((item, index) =>
              index === i
                ? {
                    ...item,
                    progress: {
                      progress: 0,
                      status: "error",
                      error:
                        error instanceof Error
                          ? error.message
                          : "Yükleme başarısız. Lütfen tekrar deneyin.",
                    },
                  }
                : item,
            ),
          );

          continue;
        }
      }

      // Clear progress after successful upload
      setTimeout(() => {
        setUploadingFiles([]);
      }, 2000);
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

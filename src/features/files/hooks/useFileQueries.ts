import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {toast} from "sonner";

import {fileAPI} from "../api";

// Query Keys
export const fileKeys = {
  all: ["files"] as const,
  lists: () => [...fileKeys.all, "list"] as const,
  list: (filters?: string) => [...fileKeys.lists(), {filters}] as const,
  details: () => [...fileKeys.all, "detail"] as const,
  detail: (id: string) => [...fileKeys.details(), id] as const,
};

// Hooks
export const useDocuments = () => {
  return useQuery({
    queryKey: fileKeys.lists(),
    queryFn: async () => {
      const {data, error} = await fileAPI.getDocuments();

      if (error) {
        throw new Error(error.message || "Dökümanlar yüklenirken bir hata oluştu");
      }

      return data;
    },
  });
};

export const useDocument = (fileId: string) => {
  return useQuery({
    queryKey: fileKeys.detail(fileId),
    queryFn: async () => {
      const {data, error} = await fileAPI.getDocument(fileId);

      if (error) {
        throw new Error(error.message || "Döküman yüklenirken bir hata oluştu");
      }

      return data;
    },
    enabled: !!fileId,
  });
};

export const useUploadFile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({file_title, file_data}: {file_title: string; file_data: File}) => {
      const {data, error} = await fileAPI.uploadFile(file_title, file_data);

      if (error) {
        throw new Error(error.message || "Dosya yüklenirken bir hata oluştu");
      }

      return data;
    },
    onSuccess: () => {
      // Invalidate and refetch documents list
      queryClient.invalidateQueries({queryKey: fileKeys.lists()});
      toast.success("Dosya başarıyla yüklendi");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Dosya yükleme başarısız");
    },
    retry: 1,
  });
};

export const useDeleteDocument = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (fileId: string) => {
      const {data, error} = await fileAPI.deleteDocument(fileId);

      if (error) {
        throw new Error(error.message || "Döküman silinirken bir hata oluştu");
      }

      return data;
    },
    onSuccess: () => {
      // Invalidate and refetch documents list
      queryClient.invalidateQueries({queryKey: fileKeys.lists()});
      toast.success("Döküman başarıyla silindi");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Döküman silme başarısız");
    },
  });
};

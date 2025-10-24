import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useRouter} from "next/navigation";
import {toast} from "sonner";

import {fileAPI} from "../api";

export const FILES_QUERY_KEY = "files";

export const useFiles = () => {
  return useQuery({
    queryKey: [FILES_QUERY_KEY],
    queryFn: async () => {
      const {data, error} = await fileAPI.getFiles();

      if (error) {
        toast.error("Hata", {
          description: "Dosyalar yüklenirken bir hata oluştu.",
        });
        throw error;
      }

      return data || [];
    },
  });
};

export const useUploadFile = () => {
  const queryClient = useQueryClient();

  const router = useRouter();

  return useMutation({
    mutationFn: async ({file_title, file_data}: {file_title: string; file_data: File}) => {
      const {data, error} = await fileAPI.uploadFile(file_title, file_data);

      if (error) {
        throw error;
      }

      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({queryKey: [FILES_QUERY_KEY]});
      toast.success("Başarılı", {
        description: "Dosya başarıyla yüklendi.",
      });

      router.push(`/files/${data.id}`);
    },
    onError: (error: Error) => {
      toast.error("Hata", {
        description: error.message || "Dosya yüklenirken bir hata oluştu.",
      });
    },
  });
};

export const useDeleteFile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (fileId: string) => {
      const {error} = await fileAPI.deleteFile(fileId);

      if (error) {
        throw error;
      }

      return fileId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [FILES_QUERY_KEY]});
      toast.success("Başarılı", {
        description: "Dosya başarıyla silindi.",
      });
    },
    onError: (error: Error) => {
      toast.error("Hata", {
        description: error.message || "Dosya silinirken bir hata oluştu.",
      });
    },
  });
};

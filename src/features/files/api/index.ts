import {apiClient} from "@/lib/api";

import {filesResponseSchema} from "../validation";

export const fileAPI = {
  uploadFile: async (file_title: string, file_data: File) => {
    const formData = new FormData();

    formData.append("file_title", file_title);
    formData.append("file_data", file_data);

    const {data, error} = await apiClient.request({
      url: "/files/upload",
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      timeout: 10 * 60 * 1000, // 10 minutes
    });

    return {data, error};
  },

  getFiles: async () => {
    const {data, error} = await apiClient.get("/files", undefined, filesResponseSchema);

    return {data, error};
  },

  getFile: async (fileId: string) => {
    const {data, error} = await apiClient.request({
      url: `/files/${fileId}`,
      method: "GET",
      responseType: "blob",
      timeout: 2 * 60 * 1000, // 2 minutes
    });

    const blob = new Blob([data], {type: "application/pdf"});
    const url = URL.createObjectURL(blob);

    return {data: url, error};
  },

  deleteFile: async (fileId: string) => {
    const {error} = await apiClient.delete(`/files/${fileId}`);

    return {error};
  },
};

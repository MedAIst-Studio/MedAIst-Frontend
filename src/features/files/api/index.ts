import {apiClient} from "@/lib/api";

export const fileAPI = {
  uploadFile: async (file_title: string, file_data: File) => {
    const formData = new FormData();

    formData.append("file_title", file_title);
    formData.append("file_data", file_data);

    const {data, error} = await apiClient.request({
      url: "/files/upload",
      method: "POST",
      data: formData,
    });

    return {data, error};
  },

  getDocuments: async () => {
    const {data, error} = await apiClient.request({
      url: "/files",
      method: "GET",
    });

    return {data, error};
  },

  deleteDocument: async (fileId: string) => {
    const {data, error} = await apiClient.request({
      url: `/files/${fileId}`,
      method: "DELETE",
    });

    return {data, error};
  },

  getDocument: async (fileId: string) => {
    const {data, error} = await apiClient.request({
      url: `/files/${fileId}`,
      method: "GET",
    });

    return {data, error};
  },
};

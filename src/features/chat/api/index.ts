import {apiClient} from "@/lib/api";

import {
  chatsResponseSchema,
  messageRequestSchema,
  messageResponseSchema,
  messagesResponseSchema,
} from "../validations";

export const chatAPI = {
  getChats: async () => {
    const {data, error} = await apiClient.get("/chats", {}, chatsResponseSchema);

    return {data, error};
  },

  getChatMessages: async (chatId: string) => {
    const {data, error} = await apiClient.get(`/chats/${chatId}`, {}, messagesResponseSchema);

    return {data, error};
  },

  deleteChat: async (chatId: string) => {
    const {error} = await apiClient.delete(`/chats/${chatId}`);

    return {error};
  },

  sendMessage: async (message: string, file_id: string, chatId?: string) => {
    const {data, error} = await apiClient.post(
      `/messages`,
      {
        chat_id: chatId,
        content: message,
        pdf_id: file_id,
      },
      {
        request: messageRequestSchema,
        response: messageResponseSchema,
      },
    );

    return {data, error};
  },
};

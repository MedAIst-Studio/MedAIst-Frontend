import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {toast} from "sonner";

import {chatAPI} from "../api";

export const chatKeys = {
  all: ["chats"] as const,
  lists: () => [...chatKeys.all, "list"] as const,
  list: (filters?: string) => [...chatKeys.lists(), {filters}] as const,
  details: () => [...chatKeys.all, "detail"] as const,
  detail: (id: string) => [...chatKeys.details(), id] as const,
  messages: (chatId: string) => [...chatKeys.detail(chatId), "messages"] as const,
};

/**
 * Hook to fetch all chat history
 */
export const useChats = () => {
  return useQuery({
    queryKey: chatKeys.lists(),
    queryFn: async () => {
      const {data, error} = await chatAPI.getChats();

      if (error) {
        throw new Error(error.message || "Sohbet geçmişi yüklenirken bir hata oluştu");
      }

      return data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

/**
 * Hook to fetch messages for a specific chat
 */
export const useChatMessages = (chatId: string | null) => {
  return useQuery({
    queryKey: chatKeys.messages(chatId || ""),
    queryFn: async () => {
      if (!chatId) return [];

      const {data, error} = await chatAPI.getChatMessages(chatId);

      if (error) {
        throw new Error(error.message || "Mesajlar yüklenirken bir hata oluştu");
      }

      return data;
    },
    enabled: !!chatId,
    staleTime: 1000 * 60 * 2, // 2 minutes
  });
};

export const useSendMessage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      message,
      file_id,
      chatId,
    }: {
      message: string;
      file_id: string;
      chatId?: string;
    }) => {
      const {data, error} = await chatAPI.sendMessage(message, file_id, chatId);

      if (error) {
        throw new Error(error.message || "Mesaj gönderilemedi");
      }

      return data;
    },
    onMutate: async (variables) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({queryKey: chatKeys.messages(variables.chatId || "")});

      // Snapshot the previous value
      const previousMessages = queryClient.getQueryData(chatKeys.messages(variables.chatId || ""));

      // Optimistically update to the new value (user message only)
      if (variables.chatId) {
        queryClient.setQueryData(chatKeys.messages(variables.chatId), (old: any) => [
          ...(old || []),
          {
            content: variables.message,
            is_user: true,
            timestamp: new Date(),
          },
        ]);
      }

      return {previousMessages};
    },
    onSuccess: (data, variables) => {
      // Add AI response to the chat
      const chatIdToUse = data?.chat_id || variables.chatId;

      if (chatIdToUse && data?.ai_response) {
        queryClient.setQueryData(chatKeys.messages(chatIdToUse), (old: any) => {
          // If we didn't have optimistic update (new chat), add user message first
          const messages = old || [];

          // Check if user message is already there (optimistic update)
          const hasUserMessage = messages.some(
            (m: any) => m.is_user && m.content === variables.message,
          );

          const updatedMessages = hasUserMessage
            ? messages
            : [
                ...messages,
                {
                  content: variables.message,
                  is_user: true,
                  timestamp: new Date(),
                },
              ];

          return [
            ...updatedMessages,
            {
              content: data.ai_response,
              is_user: false,
              timestamp: new Date(),
            },
          ];
        });
      }

      queryClient.invalidateQueries({
        queryKey: chatKeys.lists(),
      });
    },
    onError: (error: Error, variables, context) => {
      // Rollback on error
      if (context?.previousMessages && variables.chatId) {
        queryClient.setQueryData(chatKeys.messages(variables.chatId), context.previousMessages);
      }

      toast.error("Mesaj gönderilemedi", {
        description: error.message,
      });
    },
  });
};

export const useDeleteChat = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (chatId: string) => {
      const {error} = await chatAPI.deleteChat(chatId);

      if (error) throw new Error(error.message);

      return {success: true};
    },
    onSuccess: (_, chatId) => {
      queryClient.invalidateQueries({
        queryKey: chatKeys.lists(),
      });

      queryClient.removeQueries({
        queryKey: chatKeys.messages(chatId),
      });

      toast.success("Sohbet silindi");
    },
    onError: (error: Error) => {
      toast.error("Sohbet silinemedi", {
        description: error.message,
      });
    },
  });
};

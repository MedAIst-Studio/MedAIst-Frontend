import type {ChatMessage, ChatSession} from "../types";

import {useState} from "react";

export const useChat = (documentId: string) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [session, setSession] = useState<ChatSession | null>(null);

  const initializeChat = async () => {
    // Initialize chat session
    const newSession: ChatSession = {
      id: Date.now().toString(),
      documentId,
      title: `Chat - ${new Date().toLocaleDateString("tr-TR")}`,
      messages: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setSession(newSession);

    // Add welcome message
    const welcomeMessage: ChatMessage = {
      id: "welcome",
      content: "Merhaba! Bu döküman hakkında nasıl yardımcı olabilirim?",
      role: "assistant",
      timestamp: new Date().toISOString(),
      documentId,
    };

    setMessages([welcomeMessage]);
  };

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      role: "user",
      timestamp: new Date().toISOString(),
      documentId,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: `Bu sorunuza göre dökümanınızdan şu bilgiyi buldum: ${content} hakkında detaylı açıklama burada yer alıyor.`,
        role: "assistant",
        timestamp: new Date().toISOString(),
        documentId,
        sources: [
          {
            page: Math.floor(Math.random() * 10) + 1,
            excerpt: "Bu bilgi dökümanınızın ilgili bölümünden alınmıştır...",
          },
        ],
      };

      setMessages((prev) => [...prev, aiResponse]);

      // Update session
      if (session) {
        setSession((prev) =>
          prev
            ? {
                ...prev,
                messages: [...prev.messages, userMessage, aiResponse],
                updatedAt: new Date().toISOString(),
              }
            : null,
        );
      }
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: (Date.now() + 2).toString(),
        content: "Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.",
        role: "assistant",
        timestamp: new Date().toISOString(),
        documentId,
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setSession(null);
  };

  return {
    messages,
    isLoading,
    session,
    initializeChat,
    sendMessage,
    clearChat,
  };
};

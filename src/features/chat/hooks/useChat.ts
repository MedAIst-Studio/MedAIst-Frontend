import {useEffect, useRef, useState} from "react";

import {Message, SavedChat} from "../types";
import {createWelcomeMessage, generateChatTitle, generateMockResponse} from "../utils/chat-utils";

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([createWelcomeMessage()]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [savedChats, setSavedChats] = useState<SavedChat[]>([
    {
      id: "chat-1",
      title: "Cardiovascular System Discussion",
      messages: [
        {
          id: "1",
          content: "Can you explain how the heart works?",
          role: "user",
          timestamp: new Date("2024-01-15T10:00:00"),
        },
        {
          id: "2",
          content: "The heart is a muscular pump with four chambers...",
          role: "assistant",
          timestamp: new Date("2024-01-15T10:01:00"),
        },
      ],
      lastUpdated: new Date("2024-01-15T10:15:00"),
      messageCount: 8,
    },
    {
      id: "chat-2",
      title: "Respiratory System Questions",
      messages: [
        {
          id: "1",
          content: "How does gas exchange work in the lungs?",
          role: "user",
          timestamp: new Date("2024-01-14T14:00:00"),
        },
      ],
      lastUpdated: new Date("2024-01-14T14:30:00"),
      messageCount: 6,
    },
  ]);
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const saveCurrentChat = () => {
    if (messages.length <= 1) return;

    const chatTitle = generateChatTitle(messages[1]?.content || "New Chat");
    const newChat: SavedChat = {
      id: currentChatId || `chat-${Date.now()}`,
      title: chatTitle,
      messages: [...messages],
      lastUpdated: new Date(),
      messageCount: messages.length,
    };

    setSavedChats((prev) => {
      const existingIndex = prev.findIndex((chat) => chat.id === newChat.id);

      if (existingIndex >= 0) {
        const updated = [...prev];

        updated[existingIndex] = newChat;

        return updated;
      }

      return [newChat, ...prev];
    });

    setCurrentChatId(newChat.id);
  };

  const loadChat = (chatId: string) => {
    const chat = savedChats.find((c) => c.id === chatId);

    if (chat) {
      setMessages([...chat.messages]);
      setCurrentChatId(chatId);
      setIsHistoryOpen(false);
    }
  };

  const deleteChat = (chatId: string) => {
    setSavedChats((prev) => prev.filter((chat) => chat.id !== chatId));
    if (currentChatId === chatId) {
      setCurrentChatId(null);
    }
  };

  const startNewChat = () => {
    setMessages([createWelcomeMessage()]);
    setCurrentChatId(null);
    setIsHistoryOpen(false);
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage.trim(),
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateMockResponse(userMessage.content),
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => {
        const newMessages = [...prev, aiResponse];

        // Auto-save after AI response
        setTimeout(() => {
          if (newMessages.length > 1) {
            const chatTitle = generateChatTitle(newMessages[1]?.content || "New Chat");
            const chatToSave: SavedChat = {
              id: currentChatId || `chat-${Date.now()}`,
              title: chatTitle,
              messages: [...newMessages],
              lastUpdated: new Date(),
              messageCount: newMessages.length,
            };

            setSavedChats((prevChats) => {
              const existingIndex = prevChats.findIndex((chat) => chat.id === chatToSave.id);

              if (existingIndex >= 0) {
                const updated = [...prevChats];

                updated[existingIndex] = chatToSave;

                return updated;
              }

              return [chatToSave, ...prevChats];
            });

            if (!currentChatId) {
              setCurrentChatId(chatToSave.id);
            }
          }
        }, 100);

        return newMessages;
      });

      setIsLoading(false);
    }, 1500);
  };

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const clearChat = () => {
    startNewChat();
  };

  return {
    // State
    messages,
    inputMessage,
    isLoading,
    savedChats,
    currentChatId,
    isHistoryOpen,
    messagesEndRef,
    textareaRef,

    // Actions
    setInputMessage,
    setIsHistoryOpen,
    saveCurrentChat,
    loadChat,
    deleteChat,
    startNewChat,
    sendMessage,
    copyMessage,
    clearChat,
  };
};

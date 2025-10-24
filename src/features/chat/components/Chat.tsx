"use client";

import {Brain, Loader2} from "lucide-react";
import {useEffect, useRef, useState} from "react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

import {useChatMessages, useChats, useDeleteChat, useSendMessage} from "../queries";

import {ChatHeader} from "./ChatHeader";
import {ChatInput} from "./ChatInput";
import {ChatMessage} from "./ChatMessage";

type ChatProps = {
  chatId?: string;
  fileId: string;
};

export const Chat = ({chatId: initialChatId, fileId}: ChatProps) => {
  const [currentChatId, setCurrentChatId] = useState<string | null>(initialChatId || null);
  const [inputMessage, setInputMessage] = useState("");
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const {data: savedChats = []} = useChats();
  const {data: messages = [], isLoading: isMessagesLoading} = useChatMessages(currentChatId);
  const sendMessageMutation = useSendMessage();
  const deleteChatMutation = useDeleteChat();

  const isLoading = isMessagesLoading || sendMessageMutation.isPending;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || sendMessageMutation.isPending) return;

    const message = inputMessage.trim();

    setInputMessage("");

    try {
      const chatIdToUse = currentChatId || "new";

      const response = await sendMessageMutation.mutateAsync({
        chatId: chatIdToUse,
        message,
        file_id: fileId,
      });

      if (!currentChatId && response?.chat_id) {
        setCurrentChatId(response.chat_id);
      }
    } catch {
      setInputMessage(message);
    }
  };

  const startNewChat = () => {
    setCurrentChatId(null);
    setInputMessage("");
    setIsHistoryOpen(false);
  };

  const loadChat = (chatId: string) => {
    setCurrentChatId(chatId);
    setIsHistoryOpen(false);
  };

  const deleteChat = async (chatId: string) => {
    await deleteChatMutation.mutateAsync(chatId);

    if (currentChatId === chatId) {
      startNewChat();
    }
  };

  const clearChat = () => {
    startNewChat();
  };

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const showQuickQuestions = (messages?.length || 0) === 1;

  return (
    <>
      <ChatHeader
        isHistoryOpen={isHistoryOpen}
        savedChats={savedChats || []}
        setIsHistoryOpen={setIsHistoryOpen}
        onClearChat={clearChat}
        onDeleteChat={deleteChat}
        onLoadChat={loadChat}
        onStartNewChat={startNewChat}
      />

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto pb-20 sm:pb-24">
        <MaxWidthWrapper className="py-4 px-4 sm:py-6 md:py-10 !max-w-4xl">
          <div className="space-y-4 sm:space-y-6">
            {(messages || []).map((message, index) => (
              <ChatMessage key={index} message={message} onCopyMessage={copyMessage} />
            ))}

            {/* Loading Message */}
            {isLoading && (
              <div className="flex gap-2 sm:gap-3 justify-start">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="max-w-[calc(100%-3rem)] sm:max-w-3xl">
                  <div className="rounded-2xl px-3 py-2 sm:px-4 sm:py-3 bg-card border-2 border-b-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 animate-spin" />
                      <span className="text-xs sm:text-sm">MedAI düşünüyor...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </MaxWidthWrapper>
      </div>

      <ChatInput
        inputMessage={inputMessage}
        isLoading={isLoading}
        setInputMessage={setInputMessage}
        showQuickQuestions={showQuickQuestions}
        /* @ts-ignore */
        textareaRef={textareaRef}
        onSendMessage={sendMessage}
      />
    </>
  );
};

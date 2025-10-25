"use client";

import {Brain, Loader2} from "lucide-react";
import {useEffect, useRef, useState} from "react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

import {useChatMessages, useSendMessage} from "../hooks";

import {ChatHeader} from "./ChatHeader";
import {ChatInput} from "./ChatInput";
import {ChatMessage} from "./ChatMessage";

type ChatProps = {
  chatId?: string;
  fileId?: string;
};

export const Chat = ({chatId: initialChatId, fileId}: ChatProps) => {
  const [currentChatId, setCurrentChatId] = useState<string | null>(initialChatId || null);
  const [inputMessage, setInputMessage] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const {data: messages = [], isLoading: isMessagesLoading} = useChatMessages(currentChatId);
  const sendMessageMutation = useSendMessage();

  const isLoading = isMessagesLoading || sendMessageMutation.isPending;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || sendMessageMutation.isPending || !fileId) return;

    const message = inputMessage.trim();

    setInputMessage("");

    try {
      const chatIdToUse = currentChatId || undefined;

      const response = await sendMessageMutation.mutateAsync({
        message,
        file_id: fileId,
        chatId: chatIdToUse,
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
  };

  const clearChat = () => {
    startNewChat();
  };

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const showQuickQuestions = (messages?.length || 0) === 1;

  const isNewChat = !currentChatId;

  return (
    <>
      <ChatHeader onClearChat={clearChat} />

      {/* Messages Container */}
      <div className={`flex-1 overflow-y-auto ${isNewChat ? "pb-0" : "pb-20 sm:pb-24"}`}>
        <MaxWidthWrapper
          className={`py-4 px-4 sm:py-6 md:py-10 !max-w-4xl ${isNewChat ? "h-full flex flex-col justify-center" : ""}`}
        >
          {isNewChat ? (
            // Yeni chat için merkezi layout
            <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                    MedAI ile sohbete başla
                  </h2>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Dosyanız hakkında soru sorabilir ve detaylı analizler alabilirsiniz
                  </p>
                </div>
              </div>

              {fileId && (
                <div className="w-full max-w-2xl">
                  <ChatInput
                    autoFocus={true}
                    inputMessage={inputMessage}
                    isLoading={isLoading}
                    setInputMessage={setInputMessage}
                    showQuickQuestions={showQuickQuestions}
                    /* @ts-ignore */
                    textareaRef={textareaRef}
                    onSendMessage={sendMessage}
                  />
                </div>
              )}
            </div>
          ) : (
            // Mevcut chat için normal layout
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
          )}
        </MaxWidthWrapper>
      </div>

      {!isNewChat && fileId && (
        <ChatInput
          inputMessage={inputMessage}
          isLoading={isLoading}
          setInputMessage={setInputMessage}
          showQuickQuestions={showQuickQuestions}
          /* @ts-ignore */
          textareaRef={textareaRef}
          onSendMessage={sendMessage}
        />
      )}
    </>
  );
};

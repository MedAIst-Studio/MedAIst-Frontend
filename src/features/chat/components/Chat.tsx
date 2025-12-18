"use client";

import {Brain, ChevronLeft, Loader2} from "lucide-react";
import {useEffect, useRef, useState} from "react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Button} from "@/components/ui/button";
import {useGetFile} from "@/features/files/hooks";

import {useChatMessages, useSendMessage} from "../hooks";

import {ChatHeader} from "./ChatHeader";
import {ChatInput} from "./ChatInput";
import {ChatMessage} from "./ChatMessage";
import {PdfViewer} from "./PdfViewer";

type ChatProps = {
  chatId?: string;
  fileId?: string;
};

export const Chat = ({chatId: initialChatId, fileId}: ChatProps) => {
  const [currentChatId, setCurrentChatId] = useState<string | null>(initialChatId || null);
  const [inputMessage, setInputMessage] = useState("");
  const [isPdfPanelOpen, setIsPdfPanelOpen] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const {data: messages = [], isLoading: isMessagesLoading} = useChatMessages(currentChatId);
  const sendMessageMutation = useSendMessage();
  const {data: fileData} = useGetFile(fileId || "");

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
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="flex items-center justify-between bg-background">
        <ChatHeader
          fileData={fileData}
          fileId={fileId}
          isPdfPanelOpen={isPdfPanelOpen}
          setIsPdfPanelOpen={setIsPdfPanelOpen}
          onClearChat={clearChat}
        />
      </div>

      {/* Main Content Area - Fixed height container */}
      <div className="flex-1 flex overflow-hidden gap-2">
        {/* Chat Area - Left Side */}
        <div className="flex-1 flex flex-col min-w-0 h-full">
          {/* Chat Messages - Own scroll */}
          <div className={`flex-1 overflow-y-auto custom-scrollbar ${isNewChat ? "" : "pb-4"}`}>
            <MaxWidthWrapper
              className={`py-4 px-4 sm:py-6 md:py-10 !max-w-4xl ${isNewChat ? "h-full flex flex-col justify-center" : ""}`}
            >
              {isNewChat ? (
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

          {/* Chat Input - Fixed at bottom */}
          {!isNewChat && fileId && (
            <div className="flex-shrink-0 bg-background">
              <ChatInput
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

        {/* PDF Panel - Desktop (Animasyonlu) */}
        {fileId && fileData && (
          <div
            className={`
              hidden lg:block p-4 pl-0 flex-shrink-0 transition-all duration-300 ease-in-out
              ${
                isPdfPanelOpen
                  ? "lg:w-96 xl:w-3/5 opacity-100"
                  : "w-0 opacity-0 p-0 overflow-hidden"
              }
            `}
          >
            <div className="h-full bg-background rounded-lg">
              <PdfViewer fileUrl={fileData as string} />
            </div>
          </div>
        )}
      </div>

      {/* PDF Modal - Mobile */}
      {fileId && fileData && isPdfPanelOpen && (
        <div className="lg:hidden fixed inset-0 bg-background z-50 flex flex-col animate-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between p-2 border-b bg-background">
            <h3 className="text-lg font-semibold ml-2">PDF Görüntüleyici</h3>
            <Button
              className="h-8 w-8 p-0"
              variant="ghost"
              onClick={() => setIsPdfPanelOpen(false)}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex-1 w-full h-full overflow-hidden">
            <PdfViewer className="border-0 shadow-none" fileUrl={fileData as string} />
          </div>
        </div>
      )}
    </div>
  );
};

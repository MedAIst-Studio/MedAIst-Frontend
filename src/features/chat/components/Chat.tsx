import {Brain, Loader2} from "lucide-react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

import {useChat} from "../hooks/useChat";

import {ChatHeader} from "./ChatHeader";
import {ChatInput} from "./ChatInput";
import {ChatMessage} from "./ChatMessage";

export const Chat = () => {
  const {
    messages,
    inputMessage,
    isLoading,
    savedChats,
    isHistoryOpen,
    messagesEndRef,
    textareaRef,

    setInputMessage,
    setIsHistoryOpen,
    loadChat,
    deleteChat,
    startNewChat,
    sendMessage,
    copyMessage,
    clearChat,
  } = useChat();

  const showQuickQuestions = messages.length === 1;

  return (
    <>
      <ChatHeader
        isHistoryOpen={isHistoryOpen}
        savedChats={savedChats}
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
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} onCopyMessage={copyMessage} />
            ))}

            {/* Loading Message */}
            {isLoading && (
              <div className="flex gap-2 sm:gap-3 justify-start">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="max-w-[calc(100%-3rem)] sm:max-w-3xl">
                  <div className="rounded-2xl px-3 py-2 sm:px-4 sm:py-3 bg-card border-2 border-b-4 border-b-gray-300">
                    <div className="flex items-center gap-2 text-gray-600">
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

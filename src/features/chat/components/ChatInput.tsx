import {ArrowUp, Sparkles} from "lucide-react";
import {RefObject} from "react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Button} from "@/components/ui/button";
import {useSidebar} from "@/components/ui/sidebar";
import {Textarea} from "@/components/ui/textarea";
import {useIsMobile} from "@/hooks/use-mobile";
import {cn} from "@/lib/utils";

import {quickQuestions} from "../utils/chat-utils";

interface ChatInputProps {
  inputMessage: string;
  setInputMessage: (message: string) => void;
  onSendMessage: () => void;
  isLoading: boolean;
  textareaRef: RefObject<HTMLTextAreaElement>;
  showQuickQuestions: boolean;
}

export const ChatInput = ({
  inputMessage,
  setInputMessage,
  onSendMessage,
  isLoading,
  textareaRef,
  showQuickQuestions,
}: ChatInputProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSendMessage();
    }
  };

  const {open} = useSidebar();
  const isMobile = useIsMobile();

  return (
    <div
      className={cn(
        "flex-shrink-0 px-4 fixed bg-background bottom-0 right-0",
        open ? "left-[16rem]" : "left-[3rem]",
      )}
    >
      <MaxWidthWrapper className="pb-6 !max-w-4xl">
        {/* Quick Questions */}
        {showQuickQuestions && (
          <div className="mb-4 space-y-4">
            <div className="text-center">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Başlamak için hızlı sorulardan birini seçin veya kendi sorunuzla devam edin:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl mx-auto">
                {quickQuestions.map((question, index) => (
                  <Button key={index} variant="outline" onClick={() => setInputMessage(question)}>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span>{question}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="relative flex items-center border border-b-4 border-b-gray-300 rounded-xl pr-4 bg-white hover:shadow-sm transition-all duration-200">
          <Textarea
            ref={textareaRef}
            className="resize-none focus-visible:ring-none border p-6 shadow-none hover:shadow-none hover:border-none focus:shadow-none focus:border-none hover:translate-none focus:translate-none border-none"
            disabled={isLoading}
            placeholder={
              isMobile
                ? "Sorunuzu yazın..."
                : "MediAI'ye Sorunuzu Yazın... (Shift + Enter ile yeni satır)"
            }
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <Button
            className="rounded-lg"
            disabled={!inputMessage.trim() || isLoading}
            size="icon"
            onClick={onSendMessage}
          >
            <ArrowUp className="!w-5 !h-5" />
          </Button>
        </div>

        <div className="text-xs text-gray-500 mt-4 text-center">
          MedAI hata yapabilir. Cevapların doğruluğunu her zaman güvenilir kaynaklarla
          karşılaştırın.
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

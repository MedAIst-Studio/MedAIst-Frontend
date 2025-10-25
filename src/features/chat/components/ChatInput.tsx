import {ArrowUp} from "lucide-react";
import {RefObject} from "react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Button} from "@/components/ui/button";
import {useSidebar} from "@/components/ui/sidebar";
import {Textarea} from "@/components/ui/textarea";
import {useIsMobile} from "@/hooks/use-mobile";
import {cn} from "@/lib/utils";

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
        "flex-shrink-0 px-2 sm:px-4 fixed bg-background bottom-0 right-0",
        isMobile ? "left-0" : open ? "left-[16rem]" : "left-[3rem]",
      )}
    >
      <MaxWidthWrapper className="pb-4 sm:pb-6 !max-w-4xl">
        {/* Input Area */}
        <div className="relative flex items-center border-2 border-b-4 rounded-xl pr-2 sm:pr-4 bg-card hover:shadow-sm transition-all duration-200">
          <Textarea
            ref={textareaRef}
            autoFocus
            className="resize-none !bg-transparent focus-visible:ring-none border p-3 sm:p-4 text-sm shadow-none hover:shadow-none hover:!border-none focus:!shadow-none focus:!border-none hover:translate-none focus:!translate-none !border-none"
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
            className="rounded-lg h-8 w-8 sm:h-10 sm:w-10"
            disabled={!inputMessage.trim() || isLoading}
            size="icon"
            onClick={onSendMessage}
          >
            <ArrowUp className="!w-4 !h-4 sm:!w-5 sm:!h-5" />
          </Button>
        </div>

        <div className="text-xs text-gray-500 mt-2 sm:mt-4 text-center px-2">
          MedAI hata yapabilir. Cevapların doğruluğunu her zaman güvenilir kaynaklarla
          karşılaştırın.
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

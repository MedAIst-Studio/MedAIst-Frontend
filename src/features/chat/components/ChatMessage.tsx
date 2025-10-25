import {Brain, Copy} from "lucide-react";

import {Button} from "@/components/ui/button";

import {Message} from "../validations";

interface ChatMessageProps {
  message: Message;
  onCopyMessage: (content: string) => void;
}

export const ChatMessage = ({message, onCopyMessage}: ChatMessageProps) => {
  return (
    <div className={`flex gap-2 sm:gap-3 ${message.is_user ? "justify-end" : "justify-start"}`}>
      {!message.is_user && (
        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
        </div>
      )}

      <div className={`max-w-[calc(100%-3rem)] sm:max-w-3xl ${message.is_user ? "order-1" : ""}`}>
        <div
          className={`${
            message.is_user
              ? "border-b-4 rounded-2xl sm:px-4 sm:py-3 px-3 py-2 border-primary/30 bg-gradient-to-br from-primary via-primary/90 to-primary/85 text-primary-foreground"
              : "text-foreground"
          }`}
        >
          <div className="whitespace-pre-wrap text-xs sm:text-sm leading-relaxed">
            {message.content}
          </div>
        </div>

        {/* Message Actions */}
        <div
          className={`flex items-center gap-1 mt-1 sm:mt-2 text-xs text-muted-foreground ${
            message.is_user ? "justify-end mr-1 sm:mr-2" : "justify-start ml-1 sm:ml-2"
          }`}
        >
          <span className="text-xs">
            {new Date(message.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>

          {!message.is_user && (
            <div className="flex items-center gap-1 ml-1 sm:ml-2">
              <Button
                className="h-6 w-6 sm:h-7 sm:w-7"
                size="icon-sm"
                variant="secondary"
                onClick={() => onCopyMessage(message.content)}
              >
                <Copy />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

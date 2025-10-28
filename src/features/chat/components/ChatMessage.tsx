import {Copy} from "lucide-react";

import MarkdownRenderer from "@/components/shared/MarkdownRenderer";
import {Button} from "@/components/ui/button";

import {Message} from "../validations";

interface ChatMessageProps {
  message: Message;
  onCopyMessage: (content: string) => void;
}

export const ChatMessage = ({message, onCopyMessage}: ChatMessageProps) => {
  return (
    <div className={`flex gap-2 sm:gap-3 ${message.is_user ? "justify-end" : "justify-start"}`}>
      <div
        className={`flex flex-col w-full ${message.is_user ? "order-1 items-end" : "items-start"}`}
      >
        <div
          className={`${
            message.is_user
              ? "border-b-4 rounded-2xl max-w-[calc(100%-3rem)] sm:max-w-3xl w-max sm:px-4 sm:py-3 px-3 py-2 border-primary/30 bg-gradient-to-br from-primary via-primary/90 to-primary/85"
              : "text-foreground w-full"
          }`}
        >
          {!message.is_user ? (
            <MarkdownRenderer content={message.content} />
          ) : (
            <span className="text-primary-foreground">{message.content}</span>
          )}
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

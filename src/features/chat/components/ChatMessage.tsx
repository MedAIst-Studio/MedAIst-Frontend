import {Brain, Copy} from "lucide-react";

import {Button} from "@/components/ui/button";

import {Message} from "../types";

interface ChatMessageProps {
  message: Message;
  onCopyMessage: (content: string) => void;
}

export const ChatMessage = ({message, onCopyMessage}: ChatMessageProps) => {
  return (
    <div className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
      {message.role === "assistant" && (
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <Brain className="w-4 h-4 text-white" />
        </div>
      )}

      <div className={`max-w-3xl ${message.role === "user" ? "order-1" : ""}`}>
        <div
          className={`rounded-2xl px-4 py-3 ${
            message.role === "user"
              ? "border-b-4 border-primary/30 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground"
              : "bg-white border border-b-4 border-b-gray-300 text-gray-900"
          }`}
        >
          <div className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</div>
        </div>

        {/* Message Actions */}
        <div
          className={`flex items-center gap-1 mt-2 text-xs text-gray-500 ${
            message.role === "user" ? "justify-end mr-2" : "justify-start ml-2"
          }`}
        >
          <span>
            {message.timestamp.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}
          </span>

          {message.role === "assistant" && (
            <div className="flex items-center gap-1 ml-2">
              <Button
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

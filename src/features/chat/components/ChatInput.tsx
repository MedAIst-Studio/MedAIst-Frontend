import {ArrowUp, BookOpen, Brain, Sparkles, Stethoscope} from "lucide-react";
import {RefObject} from "react";

import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";

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

  return (
    <div className="flex-shrink-0 bg-background px-4 fixed bottom-0 left-0 right-0">
      <div className="max-w-4xl mx-auto pb-4">
        {/* Quick Questions */}
        {showQuickQuestions && (
          <div className="mb-4 space-y-4">
            <div className="text-center">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Quick Questions to Get Started:
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

            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Stethoscope className="w-3 h-3" />
                  <span>Medical Knowledge</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-3 h-3" />
                  <span>Study Support</span>
                </div>
                <div className="flex items-center gap-1">
                  <Brain className="w-3 h-3" />
                  <span>AI-Powered</span>
                </div>
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
            placeholder="Ask me about medical concepts, procedures, anatomy, or anything related to your studies..."
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
          MedAI can make mistakes. Please verify important medical information.
        </div>
      </div>
    </div>
  );
};

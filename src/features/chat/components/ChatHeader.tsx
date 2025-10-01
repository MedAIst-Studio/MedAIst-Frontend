import {Brain, History, RotateCcw} from "lucide-react";

import {Button} from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {SavedChat} from "../types";

import {ChatHistory} from "./ChatHistory";

interface ChatHeaderProps {
  isHistoryOpen: boolean;
  setIsHistoryOpen: (open: boolean) => void;
  savedChats: SavedChat[];
  onLoadChat: (chatId: string) => void;
  onDeleteChat: (chatId: string) => void;
  onStartNewChat: () => void;
  onClearChat: () => void;
}

export const ChatHeader = ({
  isHistoryOpen,
  setIsHistoryOpen,
  savedChats,
  onLoadChat,
  onDeleteChat,
  onStartNewChat,
  onClearChat,
}: ChatHeaderProps) => {
  return (
    <div className="border-b-4 border-gray-200 bg-white/95 backdrop-blur-sm flex-shrink-0 z-10">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-gray-900">MedAI Assistant</h1>
              <p className="text-xs text-gray-500">Your personal medical study companion</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Dialog open={isHistoryOpen} onOpenChange={setIsHistoryOpen}>
              <DialogTrigger asChild>
                <Button size="icon" title="Chat history" variant="outline">
                  <History className="w-4 h-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Chat History</DialogTitle>
                  <DialogDescription>Access your previous conversations</DialogDescription>
                </DialogHeader>
                <ChatHistory
                  savedChats={savedChats}
                  onDeleteChat={onDeleteChat}
                  onLoadChat={onLoadChat}
                  onStartNewChat={onStartNewChat}
                />
              </DialogContent>
            </Dialog>
            <Button size="icon" title="Clear chat" variant="outline" onClick={onClearChat}>
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

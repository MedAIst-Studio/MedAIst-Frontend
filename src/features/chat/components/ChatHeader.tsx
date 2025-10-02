import {Edit, History} from "lucide-react";

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
    <div className="py-3 px-4 flex-shrink-0 z-10 w-full sticky top-1.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Dialog open={isHistoryOpen} onOpenChange={setIsHistoryOpen}>
            <DialogTrigger asChild>
              <Button size="icon" title="Chat history" variant="outline">
                <History className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Sohbet Geçmişi</DialogTitle>
                <DialogDescription>Önceki konuşmalarınıza erişin</DialogDescription>
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
            <Edit className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

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
    <div className="py-2 sm:py-3 px-2 sm:px-4 flex-shrink-0 z-10 w-full ">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1 sm:space-x-2">
          <Dialog open={isHistoryOpen} onOpenChange={setIsHistoryOpen}>
            <DialogTrigger asChild>
              <Button
                className="h-8 w-8 sm:h-10 sm:w-10"
                size="icon"
                title="Chat history"
                variant="outline"
              >
                <History className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-base sm:text-lg">Sohbet Geçmişi</DialogTitle>
                <DialogDescription className="text-sm">
                  Önceki konuşmalarınıza erişin
                </DialogDescription>
              </DialogHeader>
              <ChatHistory
                savedChats={savedChats}
                onDeleteChat={onDeleteChat}
                onLoadChat={onLoadChat}
                onStartNewChat={onStartNewChat}
              />
            </DialogContent>
          </Dialog>
          <Button
            className="h-8 w-8 sm:h-10 sm:w-10"
            size="icon"
            title="Clear chat"
            variant="outline"
            onClick={onClearChat}
          >
            <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

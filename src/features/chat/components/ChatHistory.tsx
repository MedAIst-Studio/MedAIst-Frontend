import {MessageSquare, Trash2} from "lucide-react";

import {Button} from "@/components/ui/button";

import {SavedChat} from "../types";

interface ChatHistoryProps {
  savedChats: SavedChat[];
  onLoadChat: (chatId: string) => void;
  onDeleteChat: (chatId: string) => void;
  onStartNewChat: () => void;
}

export const ChatHistory = ({
  savedChats,
  onLoadChat,
  onDeleteChat,
  onStartNewChat,
}: ChatHistoryProps) => {
  if (savedChats.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <MessageSquare className="w-12 h-12 mx-auto mb-2 text-gray-300" />
        <p>Kaydedilmiş sohbet yok</p>
        <p className="text-sm">Bir konuşma başlatın ve burada görmek için kaydedin</p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {savedChats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center justify-between p-3 rounded-lg border border-b-4 border-b-gray-300 hover:bg-gray-50 hover:-translate-y-0.5 group transition-all duration-200"
          >
            <button
              className="flex-1 cursor-pointer text-start"
              onClick={() => onLoadChat(chat.id)}
            >
              <h4 className="font-medium text-sm group-hover:text-blue-600">{chat.title}</h4>
              <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                <span>{chat.messageCount} mesaj</span>
                <span>•</span>
                <span>{chat.lastUpdated.toLocaleDateString()}</span>
              </div>
            </button>
            <Button
              size="icon-sm"
              variant="destructive"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteChat(chat.id);
              }}
            >
              <Trash2 />
            </Button>
          </div>
        ))}
      </div>
      <div className="flex gap-2 pt-4 border-t">
        <Button className="flex-1" variant="outline" onClick={onStartNewChat}>
          <MessageSquare className="w-4 h-4 mr-2" />
          Yeni Sohbet
        </Button>
      </div>
    </>
  );
};

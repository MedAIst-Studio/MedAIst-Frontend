import {Edit} from "lucide-react";

import {Button} from "@/components/ui/button";

interface ChatHeaderProps {
  onClearChat: () => void;
}

export const ChatHeader = ({onClearChat}: ChatHeaderProps) => {
  return (
    <div className="py-2 sm:py-3 px-2 sm:px-4 flex-shrink-0 z-10 w-full ">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1 sm:space-x-2">
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

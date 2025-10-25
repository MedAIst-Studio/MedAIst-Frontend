import {ChevronLeft, ChevronRight, Edit, FileText} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

interface ChatHeaderProps {
  onClearChat: () => void;
  fileId?: string;
  fileData?: any;
  isPdfPanelOpen: boolean;
  setIsPdfPanelOpen: (open: boolean) => void;
}

export const ChatHeader = ({
  onClearChat,
  fileId,
  fileData,
  isPdfPanelOpen,
  setIsPdfPanelOpen,
}: ChatHeaderProps) => {
  return (
    <div className="py-2 sm:py-3 px-2 sm:px-4 flex-shrink-0 z-10 w-full ">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1 sm:space-x-2">
          <Tooltip>
            <TooltipProvider>
              <TooltipTrigger asChild>
                <Button
                  className="h-8 w-8 sm:h-10 sm:w-10"
                  size="icon"
                  title="Clear chat"
                  variant="outline"
                  onClick={onClearChat}
                >
                  <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Yeni Sohbet Oluştur</p>
              </TooltipContent>
            </TooltipProvider>
          </Tooltip>
        </div>

        {fileId && fileData && (
          <Button
            className="flex items-center gap-2"
            size="sm"
            variant="outline"
            onClick={() => setIsPdfPanelOpen(!isPdfPanelOpen)}
          >
            <FileText className="w-4 h-4" />
            <span className="hidden sm:inline">
              {isPdfPanelOpen ? "PDF'yi Gizle" : "PDF'yi Göster"}
            </span>
            {isPdfPanelOpen ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

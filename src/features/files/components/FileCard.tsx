import {FileText, MoreVertical, Trash2} from "lucide-react";
import Link from "next/link";
import {useState} from "react";

import {Button} from "@/components/ui/button";
import {Card, CardAction, CardHeader} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {formatFileSize} from "../utils/fileValidation";

interface FileCardProps {
  id: string;
  title: string;
  size: number;
  created_at: string;
  onDelete: (id: string) => void;
  onOpen: (id: string) => void;
  isDeleting?: boolean;
}

export const FileCard = ({
  id,
  title,
  size,
  created_at,
  onDelete,
  onOpen,
  isDeleting = false,
}: FileCardProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const formattedDate = new Date(created_at).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(id);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(id);
    }
  };

  return (
    <Card hoverable tabIndex={0} onClick={() => onOpen(id)} onKeyDown={handleKeyDown}>
      <CardHeader className="flex items-start gap-3 flex-1 min-w-0">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <FileText className="w-5 h-5 text-primary" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm mb-1 truncate">{title}</h3>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{formatFileSize(size)}</span>
            <span>•</span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </CardHeader>

      <CardAction>
        <Button asChild variant={`outline`}>
          <Link href={`/files/${id}`}>Sohbet Başlat</Link>
        </Button>
        <DropdownMenu open={showMenu} onOpenChange={setShowMenu}>
          <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
            <Button
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              size="icon"
              variant="ghost"
            >
              <MoreVertical className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="text-destructive" onClick={handleDelete}>
              <Trash2 className="w-4 h-4 mr-2" />
              Sil
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardAction>
    </Card>
  );
};

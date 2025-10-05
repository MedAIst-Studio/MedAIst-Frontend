import type {Document} from "../types";

import {FileText, MessageSquare} from "lucide-react";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader} from "@/components/ui/card";

interface DocumentCardProps {
  document: Document;
  onChatClick: (documentId: string) => void;
}

const getStatusBadge = (status: Document["status"]) => {
  switch (status) {
    case "processed":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Hazır</Badge>;
    case "processing":
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">İşleniyor</Badge>;
    case "error":
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Hata</Badge>;
    default:
      return <Badge variant="secondary">Bilinmiyor</Badge>;
  }
};

export const DocumentCard = ({document, onChatClick}: DocumentCardProps) => {
  const handleChatClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChatClick(document.id);
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="h-5 w-5 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-slate-900 truncate group-hover:text-primary transition-colors">
                {document.title}
              </h3>
              <p className="text-sm text-slate-500 truncate">{document.fileName}</p>
            </div>
          </div>
          {getStatusBadge(document.status)}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex justify-between text-sm text-slate-600">
            <span>Boyut: {document.size}</span>
            <span>{new Date(document.uploadDate).toLocaleDateString("tr-TR")}</span>
          </div>

          {document.status === "processed" && (
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <div className="flex items-center space-x-2 text-sm text-slate-600">
                <MessageSquare className="h-4 w-4" />
                <span>{document.messageCount} mesaj</span>
              </div>
              <Button size="sm" variant="outline" onClick={handleChatClick}>
                Chat Başlat
              </Button>
            </div>
          )}

          {document.status === "processing" && (
            <div className="flex items-center space-x-2 pt-2 border-t border-slate-100">
              <div className="animate-spin h-4 w-4 border-2 border-yellow-600 border-t-transparent rounded-full" />
              <span className="text-sm text-yellow-600">Döküman işleniyor...</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

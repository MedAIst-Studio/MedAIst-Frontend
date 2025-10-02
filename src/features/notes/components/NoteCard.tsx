"use client";

import {ChevronDown, ChevronUp, Clock, FileText, Tag, Trash2} from "lucide-react";
import {useState} from "react";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

import {Note} from "../types";

interface NoteCardProps {
  note: Note;
  onDelete: (noteId: string) => void;
}

export function NoteCard({note, onDelete}: NoteCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status: Note["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "processing":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "failed":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-primary" />
            <span className="line-clamp-1">{note.title}</span>
          </CardTitle>
          <Button
            className="h-8 w-8 border-b-2 border-destructive/30 bg-gradient-to-br from-destructive via-destructive/90 to-destructive/80 text-destructive-foreground shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-destructive/50 hover:shadow-lg"
            size="sm"
            variant="outline"
            onClick={() => onDelete(note.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Badge className={getStatusColor(note.status)} variant="outline">
            {note.status}
          </Badge>
          <Badge variant="secondary">{note.subject}</Badge>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{note.uploadDate}</span>
          </div>
          <Badge variant="outline">{note.fileType}</Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3">
          {note.summary && (
            <div className="rounded-md bg-muted/50 p-3">
              <h4 className="mb-2 text-sm font-medium text-muted-foreground">Özet:</h4>
              <div className="whitespace-pre-line text-sm">{note.summary}</div>
            </div>
          )}

          <div>
            <Button
              className="mb-2 h-8 border-b-2 border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
              size="sm"
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="mr-1 h-3 w-3" />
                  İçeriği Gizle
                </>
              ) : (
                <>
                  <ChevronDown className="mr-1 h-3 w-3" />
                  İçeriği Göster
                </>
              )}
            </Button>

            {isExpanded && (
              <div className="rounded-md border bg-background/50 p-4">
                <div className="whitespace-pre-wrap text-sm">{note.content}</div>
              </div>
            )}
          </div>

          {note.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-1">
              <Tag className="h-3 w-3 text-muted-foreground" />
              {note.tags.map((tag, index) => (
                <Badge key={index} className="text-xs" variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

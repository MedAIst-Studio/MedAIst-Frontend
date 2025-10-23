import type {File} from "../types";

import {FileText} from "lucide-react";

import {FileCard} from "./FileCard";

interface FileListProps {
  files: File[];
  onDelete: (id: string) => void;
  onOpen: (id: string) => void;
  deletingFileId?: string | null;
}

export const FileList = ({files, onDelete, onOpen, deletingFileId}: FileListProps) => {
  if (files.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
          <FileText className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Henüz dosya yok</h3>
        <p className="text-muted-foreground max-w-sm">
          Başlamak için PDF dosyalarınızı yükleyin ve yapay zeka ile etkileşime geçin.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {files.map((file) => (
        <FileCard
          key={file.id}
          created_at={file.created_at}
          id={file.id}
          isDeleting={deletingFileId === file.id}
          size={file.size}
          title={file.title}
          onDelete={onDelete}
          onOpen={onOpen}
        />
      ))}
    </div>
  );
};

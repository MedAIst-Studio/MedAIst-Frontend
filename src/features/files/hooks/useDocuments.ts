import type {Document} from "../types";

import {useState} from "react";

// Mock data - gerçek uygulamada API'den gelecek
const mockDocuments: Document[] = [
  {
    id: "1",
    title: "Kardiyoloji Ders Notları",
    fileName: "kardiyoloji.pdf",
    uploadDate: "2024-10-01",
    size: "2.4 MB",
    status: "processed",
    messageCount: 15,
    fileType: "pdf",
    tags: ["kardiyoloji", "ders"],
  },
  {
    id: "2",
    title: "Anatomi Kitabı - Bölüm 3",
    fileName: "anatomi-bolum3.pdf",
    uploadDate: "2024-09-28",
    size: "5.1 MB",
    status: "processing",
    messageCount: 0,
    fileType: "pdf",
    tags: ["anatomi"],
  },
  {
    id: "3",
    title: "Fizyoloji Çalışma Kılavuzu",
    fileName: "fizyoloji.docx",
    uploadDate: "2024-09-25",
    size: "1.8 MB",
    status: "processed",
    messageCount: 8,
    fileType: "docx",
    tags: ["fizyoloji"],
  },
];

export const useDocuments = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(false);

  const deleteDocument = (id: string) => {
    setDocuments((prev) => prev.filter((doc) => doc.id !== id));
  };

  const getDocument = (id: string) => {
    return documents.find((doc) => doc.id === id);
  };

  const searchDocuments = (query: string) => {
    if (!query.trim()) return documents;

    return documents.filter(
      (doc) =>
        doc.title.toLowerCase().includes(query.toLowerCase()) ||
        doc.fileName.toLowerCase().includes(query.toLowerCase()) ||
        doc.tags?.some((tag) => tag.toLowerCase().includes(query.toLowerCase())),
    );
  };

  return {
    documents,
    loading,
    deleteDocument,
    getDocument,
    searchDocuments,
  };
};

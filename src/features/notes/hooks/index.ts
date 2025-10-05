"use client";

import {useEffect, useState} from "react";

import {FileUploadState, Note, NoteFormData} from "../types";
import {handleFileUpload, mockNotes, processNoteFormData} from "../utils";

// New hooks
export {useChat} from "./useChat";
export {useDocuments} from "./useDocuments";
export {useFileUpload as useDocumentUpload} from "./useFileUpload";

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading notes from API
    const loadNotes = async () => {
      setLoading(true);
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setNotes(mockNotes);
      setLoading(false);
    };

    loadNotes();
  }, []);

  const addNote = async (noteData: NoteFormData) => {
    const newNote = await processNoteFormData(noteData);

    setNotes((prev) => [newNote, ...prev]);

    return newNote;
  };

  const deleteNote = (noteId: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== noteId));
  };

  const updateNote = (noteId: string, updates: Partial<Note>) => {
    setNotes((prev) => prev.map((note) => (note.id === noteId ? {...note, ...updates} : note)));
  };

  return {
    notes,
    loading,
    addNote,
    deleteNote,
    updateNote,
  };
};

export const useFileUpload = () => {
  const [fileUploadState, setFileUploadState] = useState<FileUploadState>({
    files: [],
    isUploading: false,
    progress: 0,
  });

  const uploadFiles = async (files: FileList | null) => {
    if (!files) return;

    setFileUploadState({
      files: Array.from(files),
      isUploading: true,
      progress: 0,
    });

    try {
      // Simulate upload progress
      for (let i = 0; i <= 100; i += 20) {
        setFileUploadState((prev) => ({...prev, progress: i}));
        await new Promise((resolve) => setTimeout(resolve, 300));
      }

      await handleFileUpload(files);

      setFileUploadState({
        files: Array.from(files),
        isUploading: false,
        progress: 100,
      });
    } catch {
      // Handle file upload error
      setFileUploadState((prev) => ({...prev, isUploading: false, progress: 0}));
    }
  };

  const resetUpload = () => {
    setFileUploadState({
      files: [],
      isUploading: false,
      progress: 0,
    });
  };

  return {
    fileUploadState,
    uploadFiles,
    resetUpload,
  };
};

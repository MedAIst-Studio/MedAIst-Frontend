"use client";

import {BookOpen, Search} from "lucide-react";
import {useState} from "react";

import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";

import {Note, NoteFilters} from "../types";
import {filterNotes, subjects} from "../utils";

import {NoteCard} from "./NoteCard";

interface NotesListProps {
  notes: Note[];
  onDeleteNote: (noteId: string) => void;
  loading?: boolean;
}

export function NotesList({notes, onDeleteNote, loading = false}: NotesListProps) {
  const [filters, setFilters] = useState<NoteFilters>({
    searchTerm: "",
    selectedSubject: "all",
  });

  const filteredNotes = filterNotes(notes, filters.searchTerm, filters.selectedSubject);

  const handleSearchChange = (value: string) => {
    setFilters((prev) => ({...prev, searchTerm: value}));
  };

  const handleSubjectChange = (subject: string) => {
    setFilters((prev) => ({...prev, selectedSubject: subject}));
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <div className="animate-spin rounded-full border-4 border-primary border-t-transparent h-8 w-8 mx-auto mb-4" />
          <p className="text-muted-foreground">Notlarınız yükleniyor...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            className="pl-10"
            placeholder="Notları ara..."
            value={filters.searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {subjects.map((subject) => (
            <Button
              key={subject}
              size="sm"
              variant={filters.selectedSubject === subject ? "default" : "outline"}
              onClick={() => handleSubjectChange(subject)}
            >
              {subject === "all" ? "Tümü" : subject}
            </Button>
          ))}
        </div>
      </div>

      {/* Notes List */}
      {filteredNotes.length === 0 ? (
        <div className="text-center py-12">
          <BookOpen className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
          <h3 className="mb-2 text-lg font-semibold">Not bulunamadı</h3>
          <p className="text-muted-foreground">
            {notes.length === 0
              ? "İlk notunuzu oluşturun veya dosya yükleyin"
              : "Arama kriterlerinizi değiştirin"}
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredNotes.map((note) => (
            <NoteCard key={note.id} note={note} onDelete={onDeleteNote} />
          ))}
        </div>
      )}

      {filteredNotes.length > 0 && filteredNotes.length !== notes.length && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {filteredNotes.length} / {notes.length} not gösteriliyor
          </p>
        </div>
      )}
    </div>
  );
}

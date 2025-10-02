"use client";

import {BookOpen, Filter, Search} from "lucide-react";
import {useState} from "react";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
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
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-primary" />
            <span>Notları Filtrele</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                className="pl-10 border-b-4 border-primary/20 bg-gradient-to-br from-background via-background/95 to-background/90 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md focus:border-primary/50 focus:shadow-lg"
                placeholder="Notları ara..."
                value={filters.searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {subjects.map((subject) => (
                <Button
                  key={subject}
                  className={`border-b-4 transition-all duration-300 hover:-translate-y-0.5 ${
                    filters.selectedSubject === subject
                      ? "border-primary/50 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground shadow-lg hover:border-primary/70 hover:shadow-xl"
                      : "border-primary/20 bg-gradient-to-br from-background via-background/95 to-background/90 text-foreground shadow-sm hover:border-primary/30 hover:shadow-md"
                  }`}
                  size="sm"
                  variant="outline"
                  onClick={() => handleSubjectChange(subject)}
                >
                  {subject === "all" ? "Tüm Konular" : subject}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notes List */}
      {filteredNotes.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <BookOpen className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="mb-2 text-lg font-semibold">Not bulunamadı</h3>
            <p className="text-muted-foreground">
              {notes.length === 0
                ? "İlk notunuzu oluşturmak veya çalışma materyalleri yüklemekle başlayın."
                : "Arama veya filtre kriterlerinizi ayarlamayı deneyin."}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {filteredNotes.map((note) => (
            <NoteCard key={note.id} note={note} onDelete={onDeleteNote} />
          ))}
        </div>
      )}

      {filteredNotes.length > 0 && (
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-sm text-muted-foreground">
              {filteredNotes.length} / {notes.length} not gösteriliyor
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

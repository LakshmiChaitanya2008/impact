import { DocumentData } from "firebase/firestore";
import { useAtom } from "jotai";
import React from "react";
import { currentNote, notesAtom } from "../../../store/atoms";
import { Note as NoteType } from "../../../types";
import Note from "./Note";

export default function NoCategoryNotes({
  notes,
}: {
  notes: NoteType[] | DocumentData[];
}) {
  return (
    <div className="mt-5">
      <h1 className="uppercase font-semibold mb-3 select-none">No Category</h1>
      {notes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
    </div>
  );
}

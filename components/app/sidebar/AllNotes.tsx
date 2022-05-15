import { DocumentData } from "firebase/firestore";
import React from "react";
import { Note as NoteType } from "../../../types";
import Note from "./Note";

export default function AllNotes({
  notes,
}: {
  notes: NoteType[] | DocumentData[];
}) {
  return (
    <div className="mt-5">
      <h1 className="uppercase font-semibold mb-3 select-none">All notes</h1>
      {notes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
    </div>
  );
}

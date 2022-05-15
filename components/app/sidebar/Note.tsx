import { DocumentData } from "firebase/firestore";
import { useAtom } from "jotai";
import React from "react";
import { currentNote, showSidebarAtom } from "../../../store/atoms";
import { Note as NoteType } from "../../../types";

interface NoteProps {
  note: NoteType | DocumentData;
}

export default function Note({ note }: NoteProps) {
  const [curNote, setCurNote] = useAtom(currentNote);
  const [showSidebar, setShowSideBar] = useAtom(showSidebarAtom);
  return (
    <div
      onClick={() => {
        setCurNote(note);
        setShowSideBar(false);
      }}
      className="text-lg p-2 my-2 bg-gray rounded-md"
    >
      {note.title}
    </div>
  );
}

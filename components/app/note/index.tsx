import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { Divide } from "react-feather";
import { currentNote, notesAtom } from "../../../store/atoms";
import Editor from "./Editor";
import NoteNavbar from "./NoteNavbar";

export default function NoteEditor() {
  const [curNote, setCurNote] = useAtom(currentNote);

  useEffect(() => {
    if (curNote) {
      setCurNote(curNote);
    }
  }, [curNote]);
  return curNote ? (
    <div className="lg:w-[77%] w-full h-screen inline">
      <NoteNavbar />
      <Editor />
    </div>
  ) : (
    <div className="text-xl my-5 mx-2 lg:m-5">No Note Selected</div>
  );
}

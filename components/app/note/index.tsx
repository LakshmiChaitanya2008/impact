import React from "react";
import Editor from "./Editor";
import NoteNavbar from "./NoteNavbar";

export default function NoteEditor() {
  return (
    <div className="lg:w-[77%] w-full h-screen">
      <NoteNavbar />
      <Editor />
    </div>
  );
}

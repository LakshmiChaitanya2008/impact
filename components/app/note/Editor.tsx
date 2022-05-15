import { useAtom } from "jotai";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { currentNote, notesAtom } from "../../../store/atoms";
import { useNote } from "../../../hooks/useNote";

const QuillEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
});
export default function Editor() {
  const [curNote, setCurNote] = useAtom(currentNote);
  const { updateNote } = useNote();

  return (
    <div>
      <QuillEditor
        controls={[
          ["bold", "italic", "underline"],
          ["unorderedList", "h1", "h2", "h3"],
          ["sup", "sub", "blockquote", "code"],
          ["alignLeft", "alignCenter", "alignRight"],
        ]}
        value={curNote?.body}
        onChange={(val) => setCurNote({ ...curNote, body: val })}
        onBlur={() =>
          updateNote({ title: curNote?.title, body: curNote?.body })
        }
        className="h-screen border-none text-xl bg-base w-screen"
        autoCorrect="off"
      />
    </div>
  );
}

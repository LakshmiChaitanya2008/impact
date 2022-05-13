import { atom, useAtom } from "jotai";
import React, { useEffect, useMemo } from "react";
import { Copy, Edit2, Save, Trash } from "react-feather";
import { currentNote, manageNoteModal, notesAtom } from "../../../store/atoms";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useNote } from "../../../hooks/useNote";

export default function NoteNavbar() {
  const [isOpen, setIsOpen] = useAtom(manageNoteModal);
  const [curNote, setCurNote] = useAtom(currentNote);
  const [notes, setNotes] = useAtom(notesAtom);
  const { deleteNote, createNote, updateNote } = useNote();

  const handleDelete = async function () {
    const confirm = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (confirm) {
      deleteNote(curNote?.id);
    }
  };

  const handleCopy = async function () {
    const newNote = await createNote(curNote?.title + " (copy)", curNote?.body);
    setCurNote(newNote);
  };

  const handleSave = async function () {
    updateNote({ title: curNote?.title, body: curNote?.body });
  };

  return (
    <div className="m-3 flex justify-between ">
      <h1 className="text-2xl">{curNote?.title}</h1>
      <div className="flex">
        <button title="Save">
          <Save
            className="mx-2 hover:text-purple-500 cursor-pointer"
            size={23}
            onClick={handleSave}
          />
        </button>
        <button title="Clone Note">
          <Copy
            className="mx-2 hover:text-green-500 cursor-pointer"
            size={23}
            onClick={handleCopy}
          />
        </button>
        <button title="Manage Note">
          <Edit2
            className="mx-2 hover:text-blue-500 cursor-pointer"
            size={23}
            onClick={() => setIsOpen(!isOpen)}
          />
        </button>
        <button title="Delete Note">
          <Trash
            className="mx-2 hover:text-red-500 cursor-pointer"
            size={23}
            onClick={handleDelete}
          />
        </button>
      </div>
    </div>
  );
}

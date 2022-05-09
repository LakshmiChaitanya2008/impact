import { useAtom } from "jotai";
import React from "react";
import { Copy, Edit2, Trash } from "react-feather";
import { manageNoteModal } from "../../../jotai/atoms";

export default function NoteNavbar() {
  const [isOpen, setIsOpen] = useAtom(manageNoteModal);

  return (
    <div className="m-3 flex justify-between">
      <h1 className="text-2xl">Supanote</h1>
      <div className="flex">
        <Copy className="mx-2 hover:text-green-500 cursor-pointer" size={23} />
        <Edit2
          className="mx-2 hover:text-blue-500 cursor-pointer"
          size={23}
          onClick={() => setIsOpen(!isOpen)}
        />
        <Trash className="mx-2 hover:text-red-500 cursor-pointer" size={23} />
      </div>
    </div>
  );
}

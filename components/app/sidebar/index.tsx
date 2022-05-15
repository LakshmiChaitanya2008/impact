import { useAtom } from "jotai";
import React from "react";
import { currentUser, newNoteModal, notesAtom } from "../../../store/atoms";
import NoCategoryNotes from "./AllNotes";
import { PlusSquare, LogOut } from "react-feather";
import { signOut } from "firebase/auth";
import router from "next/router";
import { auth } from "../../../lib/firebase";

export default function SideBar() {
  const [notes, setNotes] = useAtom(notesAtom);
  const [user, setUser] = useAtom(currentUser);
  const [newNoteOpen, setNewNoteOpen] = useAtom(newNoteModal);

  const handleLogOut = async () => {
    await signOut(auth);
    setUser(null);
    localStorage.removeItem("user");
    router.push("/");
  };

  return (
    <>
      <div className="flex justify-between mb-7">
        <h1 className="text-xl">{user?.displayName}</h1>
        <div className="flex">
          <PlusSquare
            className="hover:text-blue-400 cursor-pointer mx-4"
            size={24}
            onClick={() => setNewNoteOpen(!newNoteOpen)}
          />
          <LogOut
            className="hover:text-red-400 cursor-pointer"
            size={24}
            onClick={handleLogOut}
          />
        </div>
      </div>

      <NoCategoryNotes notes={notes} />
    </>
  );
}

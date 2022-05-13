import { useAtom } from "jotai";
import React from "react";
import { currentUser, notesAtom } from "../../../store/atoms";
import SettingsDD from "../../dropdowns/SettingsDD";
import CategoryNotes from "./CategoryNotes";
import NoCategoryNotes from "./NoCategoryNotes";

export default function SideBar() {
  const [notes, setNotes] = useAtom(notesAtom);
  const [user, setUser] = useAtom(currentUser);
  return (
    <div className="lg:w-[23%] w-full border-r-primary border-r-2 h-screen p-5 ">
      <div className="flex justify-between mb-7">
        <h1 className="text-xl">{user?.displayName}</h1>
        <SettingsDD />
      </div>
      <CategoryNotes />
      <NoCategoryNotes notes={notes} />
    </div>
  );
}

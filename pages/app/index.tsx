import { useAtomValue } from "jotai";
import React from "react";
import NoteEditor from "../../components/app/note";
import SideBar from "../../components/app/sidebar";
import Modals from "../../components/modals";
import { currentUser } from "../../jotai/atoms";

export default function index() {
  const user = useAtomValue(currentUser);
  console.log(user);
  return (
    <div className="flex flex-wrap">
      <SideBar />
      <NoteEditor />
      <Modals />
    </div>
  );
}

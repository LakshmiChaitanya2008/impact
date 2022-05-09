import React from "react";
import NoteEditor from "../../components/app/note";
import SideBar from "../../components/app/sidebar";
import Modals from "../../components/modals";

export default function index() {
  return (
    <div className="flex flex-wrap">
      <SideBar />
      <NoteEditor />
      <Modals />
    </div>
  );
}

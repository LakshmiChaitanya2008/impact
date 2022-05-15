import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NoteEditor from "../../components/app/note";
import SideBar from "../../components/app/sidebar";
import Modals from "../../components/modals";
import { currentUser, notesAtom, showSidebarAtom } from "../../store/atoms";
import { Note } from "../../types";
import { useNote } from "../../hooks/useNote";
import { Loader, Menu } from "react-feather";

export default function index({ userNotes }: { userNotes: Note[] }) {
  const [notes, setNotes] = useAtom(notesAtom);
  const [user, setUser] = useAtom(currentUser);
  const [showSidebar, setShowSideBar] = useAtom(showSidebarAtom);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { getNotes } = useNote();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      router.push("/auth/login");
    }

    const getNotesFromFirebase = async () => {
      const notes = await getNotes();
      setNotes(notes);
      setLoading(false);
    };

    setUser(JSON.parse(localStorage.getItem("user")!));
    getNotesFromFirebase();
  }, []);

  return loading ? (
    <div className="flex flex-col justify-center items-center h-screen">
      <Loader size={55} className="animate-spin-slow" />
      <h1 className="text-2xl block mt-2">Loading...</h1>
    </div>
  ) : (
    <div className="flex flex-wrap">
      <div
        className={`lg:w-[23%] w-[80%] border-r-primary border-r-2 h-screen p-5 lg:block ${
          showSidebar ? "" : "hidden w-1/2"
        } transition-all duration-300 ease-in-out`}
      >
        <SideBar />
      </div>
      <div className="lg:hidden inline">
        <Menu
          size={30}
          className="my-4 mx-2 cursor-pointer"
          onClick={() => setShowSideBar(!showSidebar)}
        />
      </div>
      <NoteEditor />
      <Modals />
    </div>
  );
}

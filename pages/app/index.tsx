import { collection, getDocs } from "firebase/firestore";
import { useAtom } from "jotai";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NoteEditor from "../../components/app/note";
import SideBar from "../../components/app/sidebar";
import Modals from "../../components/modals";
import { currentUser, notesAtom } from "../../store/atoms";
import { auth, db } from "../../lib/firebase";
import { Note } from "../../types";
import { useNote } from "../../hooks/useNote";
import { Loader } from "react-feather";
import Image from "next/image";

export default function index({ userNotes }: { userNotes: Note[] }) {
  const [notes, setNotes] = useAtom(notesAtom);
  const [user, setUser] = useAtom(currentUser);
  const router = useRouter();
  const { getNotes } = useNote();
  const [loading, setLoading] = useState(true);
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
      <SideBar />
      <NoteEditor />
      <Modals />
    </div>
  );
}

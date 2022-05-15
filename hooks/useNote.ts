import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useAtom } from "jotai";
import { currentNote, notesAtom } from "../store/atoms";
import { db } from "../lib/firebase";

export const useNote = function () {
  const [notes, setNotes] = useAtom(notesAtom);
  const [curNote, setCurNote] = useAtom(currentNote);

  return {
    getNotes: async () => {
      const notesCollec = collection(
        db,
        `users/${JSON.parse(localStorage.getItem("user")!)!.uid}/notes`
      );

      const notes = await (
        await getDocs(notesCollec)
      ).docs.map((doc) => {
        return doc.data();
      });

      return notes;
    },

    createNote: async (title: string, body?: string) => {
      const randomID = Math.random().toString(36).substring(2, 15);
      const note = {
        id: randomID,
        title,
        body,
      };
      await setDoc(
        doc(
          db,
          `users/${JSON.parse(localStorage.getItem("user")!)!.uid}/notes`,
          randomID
        ),
        note
      );

      setNotes([...notes, note]);

      return note;
    },

    deleteNote: async (id: string) => {
      await deleteDoc(
        doc(
          db,
          `users/${JSON.parse(localStorage.getItem("user")!)!.uid}/notes`,
          id
        )
      );
      setCurNote(null);
      setNotes(notes.filter((note) => note.id !== id));
    },

    updateNote: async ({ title, body }: { title: string; body: string }) => {
      await updateDoc(
        doc(
          db,
          `users/${JSON.parse(localStorage.getItem("user")!)!.uid}/notes`,
          curNote?.id
        ),
        {
          title: title,
          body: body,
        }
      );

      setNotes([curNote!, ...notes.filter((note) => note.id !== curNote?.id)]);
    },
  };
};

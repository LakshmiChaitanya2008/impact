import { User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";
import { atom } from "jotai";
import { Note } from "../types";

export const newNoteModal = atom(false);
export const newCategoryModal = atom(false);
export const manageNoteModal = atom(false);
export const manageCategory = atom(false);

export const currentUser = atom<User | null>(null);
export const notesAtom = atom<Note[] | DocumentData[]>([]);
export const currentNote = atom<Note | null | DocumentData>(null);

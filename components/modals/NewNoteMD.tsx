import { Modal } from "@mantine/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";
import { useNote } from "../../hooks/useNote";
import { newNoteModal, notesAtom } from "../../store/atoms";

type FormData = {
  title: string;
};

export default function NewNoteMD() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();
  const [isOpen, setIsOpen] = useAtom(newNoteModal);
  const [notes, setNotes] = useAtom(notesAtom);
  const { createNote } = useNote();
  const handleCreate = handleSubmit(async function ({ title }) {
    await createNote(title, "");
    setIsOpen(false);
  });

  return (
    <Modal
      opened={isOpen}
      onClose={() => setIsOpen(!isOpen)}
      centered
      title="Create New Note"
      overlayOpacity={0.55}
      onSubmit={handleCreate}
    >
      <div>
        <form className="">
          <input
            type="text"
            className="mt-6"
            placeholder="Name"
            {...register("title")}
          />
          <select className="mt-4">
            <option value="no-category">No Category</option>
            <option value="supabase">Supabase</option>
          </select>
          <div className="float-right mt-6">
            <button
              className="bg-gray px-5 py-2 rounded-md mx-3"
              onClick={() => setIsOpen(!isOpen)}
            >
              Cancel
            </button>
            <button className="bg-primary px-5 py-2 rounded-md">Create</button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

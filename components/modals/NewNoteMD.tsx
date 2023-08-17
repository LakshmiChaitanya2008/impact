import { Modal } from "@mantine/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";
import { useNote } from "../../hooks/useNote";
import { newNoteModal } from "../../store/atoms";

type FormData = {
  title: string;
  body: string;
};

export default function NewNoteMD() {
  const { handleSubmit, register, formState } = useForm<FormData>();
  const [isOpen, setIsOpen] = useAtom(newNoteModal);
  const { createNote } = useNote();

  const handleCreate = handleSubmit(async function ({ title, body }) {
    await createNote(title, body ? body : "");
    setIsOpen(false);
  });

  return (
    <Modal
      opened={isOpen}
      onClose={() => setIsOpen(!isOpen)}
      centered
      title="Create New Note"
      overlayOpacity={0.55}
    >
      <div>
        <form onSubmit={handleCreate}>
          <input
            type="text"
            className="mt-6"
            placeholder="Name"
            {...register("title")}
            required
          />
          <textarea
            className="mt-3 h-[240px]"
            placeholder="Body"
            {...register("body")}
          ></textarea>
          <div className="float-right mt-6">
            <button
              className="bg-gray px-5 py-2 rounded-md mx-3"
              onClick={() => setIsOpen(!isOpen)}
            >
              Cancel
            </button>
            <button className="btn">Create</button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

import { Modal } from "@mantine/core";
import { useAtom } from "jotai";
import React from "react";
import { currentNote, manageNoteModal } from "../../store/atoms";
import { useForm } from "react-hook-form";
import { useNote } from "../../hooks/useNote";

type FormData = {
  name: string;
};

export default function () {
  const [isOpen, setIsOpen] = useAtom(manageNoteModal);
  const { formState, register, handleSubmit } = useForm<FormData>();
  const { updateNote } = useNote();
  const [curNote, setCurNote] = useAtom(currentNote);

  const handleUpdate = handleSubmit(async (e) => {
    updateNote({ title: e.name, body: curNote?.body });
    setIsOpen(!isOpen);
  });

  return (
    <Modal
      opened={isOpen}
      onClose={() => setIsOpen(!isOpen)}
      centered
      title="Manage Note"
      overlayOpacity={0.55}
    >
      <div>
        <form className="" onSubmit={handleUpdate}>
          <input
            type="text"
            className="mt-6"
            placeholder="Name"
            {...register("name")}
            defaultValue={curNote?.title}
            onChange={(val) =>
              setCurNote({ ...curNote, title: val.target.value })
            }
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
            <button type="submit" className="bg-primary px-5 py-2 rounded-md">
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

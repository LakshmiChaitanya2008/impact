import { Modal } from "@mantine/core";
import { useAtom } from "jotai";
import React from "react";
import { manageNoteModal } from "../../jotai/atoms";

export default function () {
  const [isOpen, setIsOpen] = useAtom(manageNoteModal);

  return (
    <Modal
      opened={isOpen}
      onClose={() => setIsOpen(!isOpen)}
      centered
      title="Manage Note"
      overlayOpacity={0.55}
    >
      <div>
        <form className="">
          <input type="text" className="mt-6" placeholder="Name" />
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
            <button className="bg-primary px-5 py-2 rounded-md">Save</button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

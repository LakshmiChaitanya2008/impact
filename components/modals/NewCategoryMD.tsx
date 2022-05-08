import { Modal } from "@mantine/core";
import { useAtom } from "jotai";
import React from "react";
import { newCategoryModal } from "../../jotai/atoms";

export default function NewCategoryMD() {
  const [isOpen, setIsOpen] = useAtom(newCategoryModal);

  return (
    <Modal
      opened={isOpen}
      onClose={() => setIsOpen(!isOpen)}
      centered
      title="Create New Category"
      overlayOpacity={0.55}
    >
      <div>
        <form className="">
          <input type="text" className="mt-6" placeholder="Name" />
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
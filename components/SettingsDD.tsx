import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useAtom } from "jotai";
import { MoreHorizontal } from "react-feather";
import { newCategoryModal, newNoteModal } from "../jotai/atoms";

export default function SettingsDD() {
  const [newNoteOpen, setNewNoteOpen] = useAtom(newNoteModal);
  const [newCategoryOpen, setNewCategoryOpen] = useAtom(newCategoryModal);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <MoreHorizontal size={25} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        side="bottom"
        align="start"
        className="bg-[#242425] p-2 rounded-md w-[260px]"
      >
        <DropdownMenu.Item
          className="p-2 hover:bg-gray "
          onClick={() => setNewNoteOpen(!newNoteOpen)}
        >
          Create New Note
        </DropdownMenu.Item>

        <DropdownMenu.Item
          className="p-2 hover:bg-gray "
          onClick={() => setNewCategoryOpen(!newCategoryOpen)}
        >
          Create New Category
        </DropdownMenu.Item>
        <DropdownMenu.Item className="p-2 hover:bg-gray ">
          Settings
        </DropdownMenu.Item>
        <DropdownMenu.Item className="p-2 hover:bg-red-600 bg-red-500 rounded-md mb-2">
          Log out
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

import { useAtom } from "jotai";
import React from "react";
import { ChevronRight, Copy, Edit2, Trash } from "react-feather";
import Editor from "../../components/Editor";
import Modals from "../../components/modals";
import SettingsDD from "../../components/SettingsDD";
import { manageCategory, manageNoteModal } from "../../jotai/atoms";
export default function index() {
  const [isOpen, setIsOpen] = useAtom(manageNoteModal);
  const [manageCategoryOpen, setManageCategoryOpen] = useAtom(manageCategory);

  return (
    <div className="flex flex-wrap">
      <div className="lg:w-[23%] w-full  border-r-primary border-r-2 h-screen p-5 ">
        <div className="flex justify-between mb-7">
          <h1 className="text-xl">Lakshmi Chaitanya</h1>
          <SettingsDD />
        </div>
        <div className="mt-5">
          <h1 className="uppercase font-semibold mb-3 flex justify-between">
            <div className="flex">
              <ChevronRight className="" />
              Persons
            </div>
            <div>
              <Edit2
                size={20}
                onClick={() => setManageCategoryOpen(!manageCategoryOpen)}
              />
            </div>
          </h1>
          {/* <div className="ml-3">
            <div className="text-lg p-2 my2 bg-gray rounded-md">Sri</div>
            <div className="text-lg p-2 my-2 bg-gray rounded-md">Vamsi</div>
            <div className="text-lg p-2 my-2 bg-gray rounded-md">Sri Vamsi</div>
          </div> */}
        </div>
        <div className="mt-5">
          <h1 className="uppercase font-semibold mb-3 select-none">
            No Category
          </h1>

          <div className="text-lg p-2 my2 bg-gray rounded-md">Supanote</div>
          <div className="text-lg p-2 my-2 bg-gray rounded-md">Supanote</div>
          <div className="text-lg p-2 my-2 bg-gray rounded-md">Supanote</div>
        </div>
      </div>
      <div className="lg:w-[77%] w-full h-screen">
        <div className="m-3 flex justify-between">
          <h1 className="text-2xl">Supanote</h1>
          <div className="flex">
            <Copy
              className="mx-2 hover:text-green-500 cursor-pointer"
              size={23}
            />
            <Edit2
              className="mx-2 hover:text-blue-500 cursor-pointer"
              size={23}
              onClick={() => setIsOpen(!isOpen)}
            />
            <Trash
              className="mx-2 hover:text-red-500 cursor-pointer"
              size={23}
            />
          </div>
        </div>
        <Editor />
      </div>
      <Modals />
    </div>
  );
}

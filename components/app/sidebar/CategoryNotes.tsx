import { useAtom } from "jotai";
import React from "react";
import { ChevronRight, Edit2 } from "react-feather";
import { manageCategory } from "../../../store/atoms";
import Note from "./Note";

export default function CategoryNotes() {
  const [manageCategoryOpen, setManageCategoryOpen] = useAtom(manageCategory);

  return (
    <div className="mt-5">
      <h1 className="uppercase font-semibold mb-3 flex justify-between">
        <div className="flex">
          <ChevronRight className="" />
          Persons
        </div>
        y
        <div>
          <Edit2
            size={20}
            onClick={() => setManageCategoryOpen(!manageCategoryOpen)}
          />
        </div>
      </h1>
      <div className="ml-3"></div>
    </div>
  );
}

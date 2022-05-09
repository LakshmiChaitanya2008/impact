import { useAtom } from "jotai";
import React from "react";
import { ChevronRight, Edit2 } from "react-feather";
import { manageCategory } from "../../../jotai/atoms";
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
        <div>
          <Edit2
            size={20}
            onClick={() => setManageCategoryOpen(!manageCategoryOpen)}
          />
        </div>
      </h1>
      <div className="ml-3">
        <Note name="YoNote" />
        <Note name="BoopNote" />
      </div>
    </div>
  );
}

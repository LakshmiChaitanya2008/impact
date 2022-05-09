import React from "react";
import SettingsDD from "../../dropdowns/SettingsDD";
import CategoryNotes from "./CategoryNotes";
import NoCategoryNotes from "./NoCategoryNotes";

export default function SideBar() {
  return (
    <div className="lg:w-[23%] w-full border-r-primary border-r-2 h-screen p-5 ">
      <div className="flex justify-between mb-7">
        <h1 className="text-xl">Lakshmi Chaitanya</h1>
        <SettingsDD />
      </div>
      <CategoryNotes />
      <NoCategoryNotes />
    </div>
  );
}

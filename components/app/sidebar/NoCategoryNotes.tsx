import React from "react";
import Note from "./Note";

export default function NoCategoryNotes() {
  return (
    <div className="mt-5">
      <h1 className="uppercase font-semibold mb-3 select-none">No Category</h1>

      <Note name="Supanote" />
      <Note name="NextNote" />
    </div>
  );
}

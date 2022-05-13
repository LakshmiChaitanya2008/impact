import { useAtom } from "jotai";
import React from "react";
import { notesAtom } from "../../store/atoms";
import ManageCategoryMD from "./ManageCategoryMD";
import ManageNoteMD from "./ManageNoteMD";
import NewCategoryMD from "./NewCategoryMD";
import NewNoteMD from "./NewNoteMD";

export default function index() {
  return (
    <>
      <ManageNoteMD />
      <NewCategoryMD />
      <NewNoteMD />
      <ManageCategoryMD />
    </>
  );
}

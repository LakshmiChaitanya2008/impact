import dynamic from "next/dynamic";
import React from "react";

const QuillEditor = dynamic(() => import("react-quill"), {
  ssr: false,
});
export default function Editor() {
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: "" }, { align: "center" }, { align: "right" }],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "align",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  return (
    <div>
      <QuillEditor
        modules={modules}
        formats={formats}
        className="h-screen border-none text-xl"
      />
    </div>
  );
}

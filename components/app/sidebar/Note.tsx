import React from "react";

interface NoteProps {
  name: string;
}

export default function Note({ name }: NoteProps) {
  return (
    <div>
      <div className="text-lg p-2 my-2 bg-gray rounded-md">{name}</div>
    </div>
  );
}

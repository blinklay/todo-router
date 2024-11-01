import { useState } from "react";
import styled from "./AddButton.module.css";
export default function AddButton({ isAddNoteMode, setIsAddNoteMode }) {
  return (
    <button
      onClick={() => {
        setIsAddNoteMode(!isAddNoteMode);
      }}
      className={` ${styled.add} ${isAddNoteMode ? styled.animate : ""}`}
    >
      +
    </button>
  );
}

import { useContext, useState } from "react";
import styled from "./AddButton.module.css";
import { AppContext } from "../../context";
export default function AddButton({ isAddNoteMode, setIsAddNoteMode }) {
  const { dispatch } = useContext(AppContext);

  return (
    <button
      onClick={() => {
        setIsAddNoteMode(!isAddNoteMode);
        dispatch({ type: "CREATE_NOTE", payload: false });
      }}
      className={` ${styled.add} ${isAddNoteMode ? styled.animate : ""}`}
    >
      +
    </button>
  );
}

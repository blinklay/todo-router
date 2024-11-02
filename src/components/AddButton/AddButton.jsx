import { useContext, useState } from "react";
import styled from "./AddButton.module.css";
import { AppContext } from "../../context";
import { useNavigate } from "react-router-dom";
export default function AddButton({ isAddNoteMode, setIsAddNoteMode }) {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        setIsAddNoteMode(!isAddNoteMode);
        navigate("/");
        dispatch({ type: "CREATE_NOTE", payload: false });
      }}
      className={` ${styled.add} ${isAddNoteMode ? styled.animate : ""}`}
    >
      +
    </button>
  );
}

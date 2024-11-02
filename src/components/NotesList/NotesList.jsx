import { useContext, useState } from "react";
import Note from "../Note/Note";
import styled from "./NotesList.module.css";
import { AppContext } from "../../context";
import Loader from "../Loader/Loader";
import { FaCheck } from "react-icons/fa";
export default function NotesList() {
  const { notes, isCreateNoteMode, isLoading, dispatch } =
    useContext(AppContext);
  const [value, setValue] = useState("");

  const onClick = () => {
    dispatch({
      type: "SUBMIT_CREATE_NOTE",
      payload: { text: value, color: isCreateNoteMode },
    });
    setValue("");
  };

  return (
    <>
      {isLoading && <Loader style={{ marginTop: "30px" }} />}
      {!isLoading && (
        <ul className={styled.notes}>
          {isCreateNoteMode && (
            <li
              className={styled["new-note"]}
              style={{
                background: isCreateNoteMode,
              }}
            >
              <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                name="text"
                className={styled.area}
                placeholder="Enter your note here..."
              ></textarea>

              <button className={styled.save} onClick={onClick}>
                <FaCheck />
              </button>
            </li>
          )}

          {notes.map((note) => (
            <Note key={note.id} {...note} />
          ))}
        </ul>
      )}
    </>
  );
}

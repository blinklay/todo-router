import { useContext, useState } from "react";
import Note from "../Note/Note";
import styled from "./NotesList.module.css";
import { AppContext } from "../../context";
import Loader from "../Loader/Loader";
import { FaCheck } from "react-icons/fa";

const warningDelay = 1000;

export default function NotesList({ notes }) {
  const { isCreateNoteMode, isLoading, isEditing, dispatch } =
    useContext(AppContext);
  const [value, setValue] = useState("");
  const [isWarning, setIsWarning] = useState(false);

  const onClick = () => {
    if (value === "") {
      setIsWarning(true);

      setTimeout(() => {
        setIsWarning(false);
      }, warningDelay);

      return;
    }
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
              className={`${styled["new-note"]} ${
                isWarning ? styled.warning : ""
              } ${isEditing ? styled.edit : ""}`}
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
          {!isCreateNoteMode && notes.length === 0 && (
            <div>Nothing found...</div>
          )}
          {notes.length > 0 &&
            notes.map((note) => <Note key={note.id} {...note} />)}
        </ul>
      )}
    </>
  );
}

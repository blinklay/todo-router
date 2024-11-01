import { useContext } from "react";
import Note from "../Note/Note";
import styled from "./NotesList.module.css";
import { AppContext } from "../../context";
import Loader from "../Loader/Loader";
export default function NotesList() {
  const { notes, isLoading } = useContext(AppContext);

  return (
    <>
      {isLoading && <Loader style={{marginTop: "30px"}}/>}
      {!isLoading && (
        <ul className={styled.notes}>
          {notes.map((note) => (
            <Note key={note.id} {...note} />
          ))}
        </ul>
      )}
    </>
  );
}

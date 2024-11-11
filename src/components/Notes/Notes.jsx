import { useSelector } from "react-redux";
import Note from "../Note/Note";
import styled from "./Notes.module.css";
import { notesSelect } from "../../selectors/notesSelec";
export default function Notes() {
  const notes = useSelector(notesSelect);

  return (
    <ul className={styled.notes}>
      {notes.map((note) => (
        <Note key={note.id} {...note} />
      ))}
    </ul>
  );
}

import Note from "../Note/Note";
import styled from "./Notes.module.css";

export default function Notes({ notes }) {
  return (
    <ul className={styled.notes}>
      {notes.map((note, index) => (
        <Note key={note.id} {...note} index={index} />
      ))}
    </ul>
  );
}

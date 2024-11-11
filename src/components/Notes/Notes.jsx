import Note from "../Note/Note";
import styled from "./Notes.module.css";

export default function Notes({ notes }) {
  return (
    <ul className={styled.notes}>
      {notes.map((note) => (
        <Note key={note.id} {...note} />
      ))}
    </ul>
  );
}

import Note from "../Note/Note";
import styled from "./Notes.module.css";
export default function Notes() {
  return (
    <ul className={styled.notes}>
      <Note />
    </ul>
  );
}

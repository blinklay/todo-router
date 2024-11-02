import { useContext } from "react";
import { COLORS } from "../../constants";
import styled from "./ColorsList.module.css";
import { AppContext } from "../../context";
export default function ColorsList({ isAddNoteMode, setIsAddNoteMode }) {
  const { dispatch } = useContext(AppContext);

  const createNote = (color) => {
    dispatch({ type: "CREATE_NOTE", payload: color });
    setIsAddNoteMode(false);
  };

  return (
    <ul className={`${styled.colors} ${isAddNoteMode ? styled.show : ""}`}>
      {COLORS.map((color) => (
        <li
          className={styled.color}
          key={color}
          style={{
            background: color,
          }}
        >
          <button onClick={() => createNote(color)}></button>
        </li>
      ))}
    </ul>
  );
}

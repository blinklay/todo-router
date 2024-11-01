import { useState } from "react";
import AddButton from "../AddButton/AddButton";
import ColorsList from "../ColorsList/ColorsList";
import styled from "./Menu.module.css";
export default function Menu() {
  const [isAddNoteMode, setIsAddNoteMode] = useState(false);

  return (
    <div className={styled.menu}>
      <span className={styled.logo}>.notebook</span>

      <AddButton
        isAddNoteMode={isAddNoteMode}
        setIsAddNoteMode={setIsAddNoteMode}
      />

      <ColorsList isAddNoteMode={isAddNoteMode} />
    </div>
  );
}

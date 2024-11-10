import { Link } from "react-router-dom";
import styled from "./Menu.module.css";
import AddButton from "../AddButton/AddButton";
import { useState } from "react";
import ColorsList from "../ColorsList/ColorsList";

export default function Menu() {
  const [colorsShow, setColorsShow] = useState(false);

  const show = () => {
    setColorsShow((prev) => !prev);
  };

  return (
    <div className={styled.menu}>
      <Link to="/" className={styled.logo}>
        .notebook
      </Link>

      <AddButton onClick={show} />

      <ColorsList className={colorsShow ? "show" : ""} />
    </div>
  );
}

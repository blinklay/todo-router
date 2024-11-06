import { Link } from "react-router-dom";
import styled from "./Menu.module.css";
import AddButton from "../AddButton/AddButton";

export default function Menu() {
  return (
    <div className={styled.menu}>
      <Link to="/" className={styled.logo}>
        .notebook
      </Link>

      <AddButton />
    </div>
  );
}

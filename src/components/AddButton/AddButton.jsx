import { Link } from "react-router-dom";
import styled from "./AddButton.module.css";
import { FaPlus } from "react-icons/fa";

export default function AddButton() {
  return (
    <Link className={styled.add} to="/add-note">
      <FaPlus />
    </Link>
  );
}

import styled from "./AddButton.module.css";
import { FaPlus } from "react-icons/fa";

export default function AddButton({ onClick }) {
  return (
    <button className={styled.add} onClick={onClick}>
      <FaPlus />
    </button>
  );
}

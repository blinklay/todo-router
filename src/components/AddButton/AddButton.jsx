import styled from "./AddButton.module.css";
import { FaPlus } from "react-icons/fa";

export default function AddButton() {
  return (
    <button className={styled.add}>
      <FaPlus />
    </button>
  );
}

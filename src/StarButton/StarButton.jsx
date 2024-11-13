import styled from "./StarButton.module.css";
import { FaStar } from "react-icons/fa6";

export default function StarButton({ isActive, style, onClick }) {
  return (
    <button
      style={style}
      className={`${styled.star} ${isActive ? styled.active : ""}`}
      onClick={onClick}
    >
      <FaStar />
    </button>
  );
}

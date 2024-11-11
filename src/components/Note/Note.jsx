import styled from "./Note.module.css";
import { MdEdit } from "react-icons/md";

const changeString = (string, limit) => {
  if (string.length > limit) {
    return string.split("").slice(0, limit).join("") + "...";
  }
  return string;
};

export default function Note({ text, color, title }) {
  return (
    <li
      className={styled.note}
      style={{
        background: color,
      }}
    >
      <h3 className={styled.title}>{changeString(title, 15)}</h3>
      <div className={styled.text}>{changeString(text, 145)}</div>
      <button className={styled.edit}>
        <MdEdit />
      </button>
    </li>
  );
}

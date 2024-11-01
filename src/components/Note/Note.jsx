import styled from "./Note.module.css";
export default function Note({ text, color }) {
  return (
    <li
      className={styled.note}
      style={{
        background: color,
      }}
    >
      <div className={styled.text}>{text}</div>
    </li>
  );
}

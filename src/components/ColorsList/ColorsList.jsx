import { COLORS } from "../../constants/colors";
import styled from "./ColorsList.module.css";

export default function ColorsList({ className }) {
  return (
    <ul className={`${styled.colors} ${styled[className]}`}>
      {COLORS.map((color) => (
        <li
          key={color}
          className={styled.color}
          style={{
            background: color,
          }}
        >
          <button></button>
        </li>
      ))}
    </ul>
  );
}

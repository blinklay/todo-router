import { Link } from "react-router-dom";
import styled from "./TaskItem.module.css";

const changeLengthText = (text, limit) => {
  if (text.length > limit) {
    return text.split("").splice(0, limit).join("") + "...";
  }

  return text;
};

export default function TaskItem({ id, title, description }) {
  return (
    <li className={styled["task"]}>
      <Link className={styled.link} to={`/${id}`}>
        <h3>{changeLengthText(title, 15)}</h3>

        <div className={styled["description"]}>
          {changeLengthText(description, 65)}
        </div>
      </Link>
    </li>
  );
}

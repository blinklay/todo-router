import { Link } from "react-router-dom";
import styled from "./TaskItem.module.css";
import { MdDelete } from "react-icons/md";

const changeLengthText = (text, limit) => {
  if (text.length > limit) {
    return text.split("").splice(0, limit).join("") + "...";
  }

  return text;
};

export default function TaskItem({
  id,
  title,
  description,
  removeTask,
  isDeleting,
}) {
  return (
    <li
      className={`${styled["task"]}`}
      style={{
        opacity: isDeleting ? "0.5" : "1",
        cursor: isDeleting ? "default" : "pointer",
        pointerEvents: isDeleting ? "none" : "default",
      }}
    >
      <Link className={styled.link} to={`/tasks/${id}`}>
        <h3>{changeLengthText(title, 15)}</h3>

        <div className={styled["description"]}>
          {changeLengthText(description, 65)}
        </div>
      </Link>
      <button onClick={() => removeTask(id)} className={styled.remove}>
        <MdDelete />
      </button>
    </li>
  );
}

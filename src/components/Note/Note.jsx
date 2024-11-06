import styled from "./Note.module.css";
import { MdEdit } from "react-icons/md";

export default function Note() {
  return (
    <li className={styled.note}>
      <div className={styled.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magni
        quasi amet tenetur temporibus dolores necessitatibus voluptatibus atque
        sunt voluptate eius magnam animi aliquam ut deserunt aliquid itaque
        quaerat, quo fugit iusto? Saepe veniam, repellat iusto reprehenderit
        nihil, adipisci, quis facilis incidunt sunt officiis numquam expedita
        delectus corporis facere id dolorem a alias minus maxime?
      </div>
      <button className={styled.edit}>
        <MdEdit />
      </button>
    </li>
  );
}

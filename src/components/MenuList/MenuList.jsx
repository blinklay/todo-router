import styled from "./MenuList.module.css";
import { NavLink } from "react-router-dom";

export default function MenuList() {
  return (
    <ul className={styled["menu-list"]}>
      <li className={styled["menu-item"]}>
        <NavLink className={styled["link"]} to="/">
          Главная
        </NavLink>
      </li>
      <li className={styled["menu-item"]}>
        <NavLink className={styled["link"]} to="/add-task">
          Добавить задачу
        </NavLink>
      </li>
    </ul>
  );
}

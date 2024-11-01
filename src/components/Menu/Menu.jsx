import AddButton from "../AddButton/AddButton";
import styled from "./Menu.module.css";
export default function Menu() {
  return (
    <div className={styled.menu}>
      <span className={styled.logo}>.notebook</span>

      <AddButton />
    </div>
  );
}

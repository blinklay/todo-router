import styled from "./Search.module.css";
import { IoSearchSharp } from "react-icons/io5";

export default function Search() {
  return (
    <div className={styled.wrapper}>
      <div className={styled.icon}>
        <IoSearchSharp />
      </div>
      <input type="text" placeholder="Search" className={styled.search} />
    </div>
  );
}

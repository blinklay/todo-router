import { IoSearch } from "react-icons/io5";
import styled from "./Search.module.css";

export default function Search() {
  return (
    <div className={styled.wrapper}>
      <IoSearch className={styled.icon} />
      <input type="text" placeholder="Search" className={styled.search} />
      <div className={styled.line}></div>
    </div>
  );
}

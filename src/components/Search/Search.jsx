import { useState } from "react";
import styled from "./Search.module.css";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Search() {
  const [value, setValue] = useState("");

  return (
    <div className={styled.wrapper}>
      <div className={styled.icon}>
        <IoSearchSharp />
      </div>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        placeholder="Search"
        className={styled.search}
      />

      <Link
        to={`/search/${value}`}
        className={`${styled.link} ${value.length > 0 ? styled.show : ""}`}
      >
        search
      </Link>
    </div>
  );
}

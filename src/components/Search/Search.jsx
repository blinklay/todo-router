import { IoSearch } from "react-icons/io5";
import styled from "./Search.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Search() {
  const [value, setValue] = useState("");

  return (
    <div className={styled.wrapper}>
      <IoSearch className={styled.icon} />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Search"
        className={styled.search}
      />
      <div className={styled.line}></div>

      {value !== "" && (
        <Link to={`search/${value}`} className={styled.button}>
          Search
        </Link>
      )}
    </div>
  );
}

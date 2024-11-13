import { useState } from "react";
import styled from "./Search.module.css";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Search() {
  const [value, setValue] = useState("");

  return (
    <motion.div
      className={styled.wrapper}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
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
        to={`/search/${value.trim()}`}
        className={`${styled.link} ${value.length > 0 ? styled.show : ""}`}
      >
        search
      </Link>
    </motion.div>
  );
}

import styled from "./Note.module.css";
import { MdEdit } from "react-icons/md";
import { motion } from "framer-motion";

const changeString = (string, limit) => {
  if (string.length > limit) {
    return string.split("").slice(0, limit).join("") + "...";
  }
  return string;
};

export default function Note({ index, text, color, title }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={styled.note}
      style={{
        background: color,
      }}
    >
      <h3 className={styled.title}>{changeString(title, 15)}</h3>
      <div className={styled.text}>{changeString(text, 145)}</div>
      <button className={styled.edit}>
        <MdEdit />
      </button>
    </motion.li>
  );
}

import { Link } from "react-router-dom";
import styled from "./Menu.module.css";
import AddButton from "../AddButton/AddButton";
import { motion } from "framer-motion";

export default function Menu() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className={styled.menu}
    >
      <Link to="/" className={styled.logo}>
        .notebook
      </Link>

      <AddButton />
    </motion.div>
  );
}

import styled from "./PageTitle.module.css";
import { motion } from "framer-motion";

export default function PageTitle({ children }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={styled.header}
    >
      {children}
    </motion.h1>
  );
}

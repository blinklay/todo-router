import { Outlet, useLocation } from "react-router";
import styled from "./Layout.module.css";
import Menu from "../Menu/Menu";
import { motion } from "framer-motion";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <Menu />

      <motion.div
        className={styled.main}
        key={location.pathname} // Новый ключ для каждого пути, чтобы анимация срабатывала при смене страницы
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.div>
    </>
  );
}

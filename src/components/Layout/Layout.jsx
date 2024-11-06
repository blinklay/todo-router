import { Outlet } from "react-router";
import styled from "./Layout.module.css";
import Menu from "../Menu/Menu";

export default function Layout() {
  return (
    <>
      <Menu />

      <div className={styled.main}>
        <Outlet />
      </div>
    </>
  );
}

import { Outlet } from "react-router-dom";
import MenuList from "../MenuList/MenuList";
import styled from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={`${styled["wrapper"]}`}>
      <div className={styled["menu"]}>
        <MenuList />
      </div>
      <div
        style={{
          padding: "40px",
          width: "100%",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

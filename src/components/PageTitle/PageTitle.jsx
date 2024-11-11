import styled from "./PageTitle.module.css";
export default function PageTitle({ children }) {
  return <h1 className={styled.header}>{children}</h1>;
}

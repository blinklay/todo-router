import styled from "./Loader.module.css";

export default function Loader({ style }) {
  return <div className={styled.loader} style={style}></div>;
}

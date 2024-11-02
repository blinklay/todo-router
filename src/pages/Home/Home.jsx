import { useContext } from "react";
import NotesList from "../../components/NotesList/NotesList";
import Search from "../../components/Search/Search";
import styled from "./Home.module.css";
import { AppContext } from "../../context";

export default function Home() {
  const { notes } = useContext(AppContext);

  return (
    <div className={styled.home}>
      <Search />

      <h1 className={styled.header}>Notes</h1>
      <NotesList notes={notes} />
    </div>
  );
}

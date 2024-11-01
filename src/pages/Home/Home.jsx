import NotesList from "../../components/NotesList/NotesList";
import Search from "../../components/Search/Search";
import styled from "./Home.module.css";

export default function Home() {
  return (
    <div className={styled.home}>
      <Search />

      <h1 className={styled.header}>Notes</h1>
      <NotesList />
    </div>
  );
}

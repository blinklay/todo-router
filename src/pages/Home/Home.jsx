import { useDispatch } from "react-redux";
import Notes from "../../components/Notes/Notes";
import Search from "../../components/Search/Search";
import styled from "./Home.module.css";
import { useEffect } from "react";
import { setNotesAction } from "../../actions/setNotesAction";
export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNotesAction());
  }, []);

  return (
    <div className={styled.home}>
      <Search />

      <h1 className={styled.header}>Notes</h1>

      <Notes />
    </div>
  );
}

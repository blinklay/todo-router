import { useDispatch, useSelector } from "react-redux";
import Notes from "../../components/Notes/Notes";
import Search from "../../components/Search/Search";
import styled from "./Home.module.css";
import { useEffect } from "react";
import { setNotesAction } from "../../actions/setNotesAction";
import PageTitle from "../../components/PageTitle/PageTitle";
import { notesSelect, notesSelectLoading } from "../../selectors/notesSelec";
import Loader from "../../components/Loader/Loader";
export default function Home() {
  const dispatch = useDispatch();
  const isLoading = useSelector(notesSelectLoading);
  const notes = useSelector(notesSelect);

  useEffect(() => {
    dispatch(setNotesAction());
  }, []);

  return (
    <div className={styled.home}>
      <Search />

      <PageTitle>Notes</PageTitle>

      {isLoading && (
        <Loader
          style={{
            marginTop: "40px",
          }}
        />
      )}
      {!isLoading && <Notes />}
      {!isLoading && notes.length === 0 && <div>Nothing here...</div>}
    </div>
  );
}

import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { notesSelect, notesSelectLoading } from "../../selectors/notesSelec";
import styled from "./Search.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setNotesAction } from "../../actions/setNotesAction";
import { useParams } from "react-router";
import Notes from "../../components/Notes/Notes";
import Loader from "../../components/Loader/Loader";
export default function Search() {
  const { query } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(notesSelectLoading);
  const notes = useSelector(notesSelect);
  const filteredNotes = notes.filter(
    (note) => note.title.includes(query) || note.text.includes(query)
  );

  useEffect(() => {
    dispatch(setNotesAction());
  }, []);

  return (
    <div className={styled.search}>
      <PageTitle>Search</PageTitle>

      {isLoading && <Loader style={{ marginTop: "40px" }} />}
      {!isLoading && <Notes notes={filteredNotes} />}
      {!isLoading && filteredNotes.length === 0 && <div>Nothing found...</div>}
    </div>
  );
}

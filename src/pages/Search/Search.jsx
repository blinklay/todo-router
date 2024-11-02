import { useContext } from "react";
import styled from "./Search.module.css";
import { AppContext } from "../../context";
import NotesList from "../../components/NotesList/NotesList";
import { useNavigate, useParams } from "react-router-dom";
export default function Search() {
  const { notes } = useContext(AppContext);
  const { query } = useParams();
  const navigate = useNavigate();

  const filteredNotes = notes.filter((note) => note.text.includes(query));

  return (
    <div className={styled.search}>
      <h1 className={styled.header}>Search</h1>

      <div>
        Search by description - "<strong>{query}</strong>"
      </div>

      {filteredNotes.length === 0 && (
        <div className={styled["not-found"]}>
          Nothing found{" "}
          <button onClick={() => navigate("/")} className={styled.button}>
            to main
          </button>
        </div>
      )}
      {filteredNotes.length > 0 && <NotesList notes={filteredNotes} />}
    </div>
  );
}

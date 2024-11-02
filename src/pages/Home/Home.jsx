import { useContext } from "react";
import NotesList from "../../components/NotesList/NotesList";
import Search from "../../components/Search/Search";
import styled from "./Home.module.css";
import { AppContext } from "../../context";

export default function Home() {
  const { notes, isChoiceMode, choiced, dispatch } = useContext(AppContext);

  const onClick = () => {
    if (isChoiceMode) {
      dispatch({ type: "CLEAR_CHOICED", payload: null });
      dispatch({ type: "SET_CHOICE_MODE", payload: false });
      return;
    }
    if (!isChoiceMode) {
      dispatch({ type: "SET_CHOICE_MODE", payload: true });
      return;
    }
  };

  const deleteNotes = () => {
    dispatch({ type: "DELETE_NOTES", payload: null });
  };

  return (
    <div className={styled.home}>
      <Search />

      <div className={styled.wrapper}>
        <h1 className={styled.header}>Notes</h1>
        <button
          onClick={onClick}
          className={`${styled.choice} ${isChoiceMode ? styled.active : ""}`}
        >
          {isChoiceMode
            ? `Выбрано ${choiced.length} из ${notes.length}`
            : "Выбрать"}
        </button>

        {choiced.length > 0 && (
          <button onClick={deleteNotes} className={styled.delete}>
            Удалить
          </button>
        )}
      </div>

      <NotesList notes={notes} />
    </div>
  );
}

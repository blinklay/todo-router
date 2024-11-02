import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import { AppContext } from "./context";
import { useEffect, useState } from "react";
import Search from "./pages/Search/Search";

function App() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [refreshPage, setRefreshPage] = useState(false);
  const [isCreateNoteMode, setIsCreateNoteMode] = useState(false);
  const [isChoiceMode, setIsChoiseMode] = useState(false);
  const [choiced, setChoiced] = useState([]);

  const dispatch = (action) => {
    const { type, payload } = action;

    switch (type) {
      case "CREATE_NOTE":
        setIsCreateNoteMode(payload);
        break;

      case "SUBMIT_CREATE_NOTE":
        setIsEditing(true);
        fetch("http://localhost:3000/notes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: payload.text,
            isImportant: false,
            color: payload.color,
          }),
        })
          .then((res) => res.json())
          .then(() => setRefreshPage(!refreshPage))
          .finally(() => {
            setIsEditing(false);
            setIsCreateNoteMode(false);
          });
        break;

      case "SET_IMPORTANT_NTOE":
        setIsEditing(true);
        fetch(`http://localhost:3000/notes/${payload.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: payload.text,
            isImportant: payload.isImportant,
            color: payload.color,
          }),
        })
          .then((res) => res.json())
          .then(() => setRefreshPage(!refreshPage))
          .finally(() => {
            setIsEditing(false);
          });
        break;

      case "SUBMIT_CHANGES_NOTE":
        setIsEditing(true);
        fetch(`http://localhost:3000/notes/${payload.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: payload.text,
            isImportant: payload.isImportant,
            color: payload.color,
          }),
        })
          .then((res) => res.json())
          .then(() => setRefreshPage(!refreshPage))
          .finally(() => {
            setIsEditing(false);
          });
        break;

      case "SET_CHOICE_MODE":
        setIsChoiseMode(payload);
        break;

      case "ADD_TO_CHOICED":
        if (choiced.includes(payload)) {
          setChoiced(choiced.filter((item) => item !== payload));
        } else {
          setChoiced([...choiced, payload]);
        }
        break;

      case "DELETE_NOTES":
        setIsEditing(true);

        Promise.all(
          choiced.map((item) =>
            fetch(`http://localhost:3000/notes/${item}`, {
              method: "DELETE",
            }).then((res) => res.json())
          )
        )
          .then(() => {
            setRefreshPage(!refreshPage);
          })
          .finally(() => {
            dispatch({ type: "CLEAR_CHOICED", payload: null });
            dispatch({ type: "SET_CHOICE_MODE", payload: false });
            setIsEditing(false);
          });
        break;

      case "CLEAR_CHOICED":
        setChoiced([]);
        break;
      default:
      // nothing
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/notes")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [refreshPage]);

  return (
    <AppContext.Provider
      value={{
        notes,
        isLoading,
        isEditing,
        isCreateNoteMode,
        isChoiceMode,
        choiced,
        dispatch,
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search/:query" element={<Search />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;

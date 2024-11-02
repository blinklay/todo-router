import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import { AppContext } from "./context";
import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [refreshPage, setRefreshPage] = useState(false);
  const [isCreateNoteMode, setIsCreateNoteMode] = useState(false);

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
      value={{ notes, isLoading, isEditing, isCreateNoteMode, dispatch }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;

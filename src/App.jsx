import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import { AppContext } from "./context";
import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
  }, []);

  return (
    <AppContext.Provider value={{ notes, isLoading }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;

import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import AddNote from "./pages/AddNote/AddNote";
import Search from "./pages/Search/Search";
import SingleNote from "./pages/SingleNote/SingleNote";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/add-note" element={<AddNote />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/note/:id" element={<SingleNote />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import AddNote from "./pages/AddNote/AddNote";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/add-note" element={<AddNote />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

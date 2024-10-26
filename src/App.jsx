import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import AddTask from "./pages/AddTask/AddTask";
import SingleTask from "./pages/SingleTask/SingleTask";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<SingleTask />} />
          <Route path="/add-task" element={<AddTask />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Note } from "./components/Note/Note";
import { Create } from "./components/Create/Create";
import { About } from "./components/About/About";
import { NoteText } from "./components/Note/NoteText/NoteText";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Note />} />
          <Route path="create" element={<Create />} />
          <Route path="about" element={<About />} />
          <Route path="/note/:noteURL" element={<NoteText />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

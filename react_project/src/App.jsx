import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./components/Home/Home";
import { Note } from "./components/Note/Note";
import { Create } from "./components/Create/Create";
import { About } from "./components/About/About";
import { NoteText } from "./components/Note/NoteText/NoteText";
import { Error } from "./components/Error/Error";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="note" element={<Note />} />
          <Route path="create" element={<Create />} />
          <Route path="about" element={<About />} />
          <Route path="/note/:noteURL" element={<NoteText />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { URLBACK } from "../../../constants/constants";
import { getNote } from "../../../utils/getNote";
import { Button } from "../../Button/Button";
import "./NoteText.css";

export function NoteText() {
  const text = "Просмотреть другую заметку";
  const [out, setOut] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const navigate = useNavigate();
  const { noteURL } = useParams();

  useEffect(() => {
    getNote(URLBACK, noteURL, setOut, setFetchError);
  }, []);

  return (
    <main>
      <div className="container">
        {fetchError && <p className="fetch-error">{fetchError}</p>}

        {out && (
          <div className="note-text__wrapper">
            <div className="note__block">
              <h4 className="note__title">Заметка</h4>
              <p className="note__text">{out}</p>
            </div>
            <Button text={text} onClick={() => navigate("/")} />
          </div>
        )}
      </div>
    </main>
  );
}

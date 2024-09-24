import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Button } from "../Button/Button";
import "./Note.css";
export function Note() {
  const text = "Просмотреть заметку";
  const [value, setValue] = useState("");
  const navigation = useNavigate();
  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
    navigation(`/note/${value}`);
    setValue("");
  }
  return (
    <main>
      <div className="container">
        <div className="form__wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="search" className="text__label text__label--input">
              Введите hash заметки:
            </label>
            <input
              className="form__input"
              name="search"
              id="search"
              placeholder="Hash заметки"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button text={text} />
          </form>
        </div>
      </div>
    </main>
  );
}

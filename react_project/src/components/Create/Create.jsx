import { useState, useEffect } from "react";
import { URLBACK, URL } from "../../constants/constants";
import { sendData } from "../../utils/sendData";
import { ShowUrl } from "./ShowUrl/ShowUrl";
import { Button } from "../Button/Button";
import "./Create.css";
export function Create() {
  const text = "Создать заметку";
  const [value, setValue] = useState("");
  const [url, setUrl] = useState("");
  const [fetchError, setFetchError] = useState(null);

  // Получаем данные из LocalStorage и после монтирования компонента вставляем их в текстовое поле
  useEffect(() => {
    const savedNote = JSON.parse(localStorage.getItem("note"));
    if (savedNote) {
      setValue(savedNote);
    }
  }, []);

  // Добавляем данные в LocalStorage при изменении value в textArea
  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(value));
  }, [value]);

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim() != "") {
      sendData(URLBACK, URL, value, setFetchError, setUrl); // Вызов функции отправки запроса
      setValue(""); // очищаем поле ввода
    } else {
      alert("Заполните поля");
      return false;
    }
  }

  return (
    <main>
      <div className="container">
        <div className="form__wrapper">
          {fetchError && <p className="fetch-error">{fetchError}</p>}
          {url && (
            <ShowUrl url={url} setUrl={setUrl} setFetchError={setFetchError} />
          )}
          {!fetchError && !url && (
            <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="note" className="text__label">
                Введите текст заметки:
              </label>
              <textarea
                className="form__text"
                name="note"
                id="note"
                maxLength="1000"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <p className="note-info">
                Внимание! Максимальная длина заметки 1000 символов.
              </p>
              <Button text={text} />
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

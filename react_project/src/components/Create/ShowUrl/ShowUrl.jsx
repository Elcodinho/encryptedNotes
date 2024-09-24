import { useState } from "react";
import { CopyNotification } from "./CopyNotification";
import { Button } from "../../Button/Button";
import "./ShowUrl.css";

export function ShowUrl({ url, setUrl, setFetchError }) {
  const text = "Создать новую заметку";
  const noteHash = url.replace("http://localhost:5173/note/", "");
  const [copyNotification, setCopyNotification] = useState(false);

  // Функция копирования текста при клике
  function handleCopy(location) {
    if (url) {
      navigator.clipboard
        .writeText(location)
        .then(() => {
          setCopyNotification(true);
          setTimeout(() => {
            setCopyNotification(false);
          }, 2000);
        })
        .catch((err) => {
          console.error("Ошибка при копировании адреса: ", err);
        });
    }
  }

  // Функция показа формы для новой заметки
  function showForm() {
    setUrl("");
    setFetchError(null);
  }
  return (
    <div className="url-block">
      <p className="url-block__text">Скопируйте адресс заметки</p>
      <p className="note-url" onClick={() => handleCopy(url)}>
        {url}
      </p>
      <p className="url-block__text">Или ее hash</p>
      <p className="note-url" onClick={() => handleCopy(noteHash)}>
        {noteHash}
      </p>

      <Button text={text} onClick={showForm} />
      {copyNotification && <CopyNotification />}
    </div>
  );
}

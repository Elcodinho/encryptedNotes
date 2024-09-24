import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Home.css";

export function Home() {
  return (
    <main>
      <div className="container">
        <div className="home__wrappper">
          <h1 className="home__title">
            EncryptedNotes-Сервис для обмена зашифрованными заметками
          </h1>
          <p className="home__subtitle">Как работает сервис</p>
          <ul className="home__list">
            <li>Создаете заметку</li>
            <li>Копируете ее URL или Hash</li>
            <li>Отправляете человеку, который должен прочесть заметку</li>
            <li>
              Для чтения заметки нужно вставить ее URL или Hash в поисковую
              строку
            </li>
          </ul>
          <div className="home-button-block">
            <Link to="/note">
              <Button text="Просмотреть заметку" />
            </Link>
            <Link to="/create">
              <Button text="Создать заметку" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

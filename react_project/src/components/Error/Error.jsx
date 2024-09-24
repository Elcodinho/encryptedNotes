import { Link } from "react-router-dom";
import "./Error.css";
export function Error() {
  return (
    <main>
      <div className="container">
        <div className="error__wrapper">
          <h2 className="error__title">Ошибка: страница не найдена</h2>
          <Link to="/" className="error__link">
            Вернуться на главную
          </Link>
        </div>
      </div>
    </main>
  );
}

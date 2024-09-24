import { Nav } from "../Nav/Nav";
import "./Header.css";
export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="logo">EncryptedNotes</div>
          <Nav />
        </div>
      </div>
    </header>
  );
}

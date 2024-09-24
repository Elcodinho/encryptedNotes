import { NavLink } from "react-router-dom";
import "./Nav.css";
export function Nav() {
  function getActiveClass({ isActive }) {
    if (isActive) {
      return "active";
    }
    return "";
  }
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/" className={getActiveClass}>
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/note" className={getActiveClass}>
            Note
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/create" className={getActiveClass}>
            Create
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/about" className={getActiveClass}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

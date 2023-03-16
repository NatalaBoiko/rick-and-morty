import "./menu.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <ul className="menu-list">
      <li>
        <NavLink className="link" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="link" to="/list">
          List
        </NavLink>
      </li>
      <li>
        <NavLink className="link" to="/character">
          Character
        </NavLink>
      </li>
    </ul>
  );
};
export default Menu;

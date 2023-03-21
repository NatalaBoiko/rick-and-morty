import s from "./Menu.module.css";
import { Outlet } from "react-router-dom";

const Menu = () => {
  <div className={s.menu}>
    <h1>Menu</h1>
    <Outlet />
  </div>;
};
export default Menu;

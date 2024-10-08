import clsx from "clsx";
import s from './Navigation.module.css'
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  const changeClassLink = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div>
      <Link to="/">
        <h2>
          Good<span>Cinema</span>
        </h2>
      </Link>
      <nav>
        <NavLink to="/" className={changeClassLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={changeClassLink}>
          Movies
        </NavLink>
      </nav>
    </div>
  );
};
export default Navigation;

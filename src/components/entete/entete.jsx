import { NavLink } from "react-router-dom";
import "./_header.scss";
import logo from "../../assets/LOGO.svg";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo-kasa" />
      </div>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/About">A propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;

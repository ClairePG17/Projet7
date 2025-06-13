import { Link } from "react-router-dom";
import "./header.scss";
import logo from '../../assets/LOGO.svg';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo-kasa" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A Propos</Link>
      </nav>
      </div>
    </header>
  );
}

export default Header;
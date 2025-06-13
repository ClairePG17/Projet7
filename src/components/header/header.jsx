import { Link } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <header className="header">
      <div className="logo">Kasa</div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;
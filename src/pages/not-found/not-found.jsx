import { Link } from "react-router-dom";
import './_not-found.scss';

export default function NotFound() {
  return (
    <div className="Notfound">
      <p className="Notfound__404">404</p>
      <p className="Notfound__text">Oups! La page que <span className="mobile-break"></span> vous demandez n'existe pas.</p>
      <Link to="/" className="Notfound__LinkToHome">Retourner sur la page d’accueil</Link>
    </div>
  );
}

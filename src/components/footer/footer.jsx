import "./_footer.scss";
import logo from "../../assets/logo_footer.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
              <img src={logo} alt="logo-kasa" />
            </div>
      <p>© 2020 Kasa. All <span className="mobile-break"></span> rights reserved</p>
    </footer>
  );
}
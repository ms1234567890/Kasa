import logo from "../assets/images/LOGO.png"
import "../assets/css/Header.css"
import {Link, useLocation} from "react-router-dom"

function Header() {
    const location = useLocation();

    return (
      <div className="header">
        <Link to="/"><img src={logo} alt="logo"></img></Link>
        <nav className="navigation">
          {/* Vérifier qu'on est sur la bonne page */}
          <Link to="/" className={location.pathname === '/' ? 'underline' : ''}>
            <h2 className="acceuil">Accueil</h2>
          </Link>
          <Link to="/about" className={location.pathname === '/about' ? 'underline' : ''}>
            <h2 className="propos">A Propos</h2>
          </Link>
        </nav>
      </div>
    );
  }

export default Header;
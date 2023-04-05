import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/user/index";
import "../Styles/main.css";

function Navbar() {
  const navRef = useRef();
  const navigate = useNavigate();
  const { userData } = useContext(UserContext) ?? { userData: null };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleLogin = () => {
    if (userData) {
      // Déconnecter l'utilisateur
    } else {
      // Rediriger vers le formulaire de connexion
      navigate('/login');
    }
  };

  return (
    <header>
      <img src="src\assets\logo.svg" alt="Logo" className="logo-img" />
      <nav ref={navRef}>
        <a href="/">Accueil</a>
        <a href="/scan">Scan</a>
        <button className="nav-link" onClick={handleLogin}>
          {userData ? "Déconnexion" : "Connexion"}
        </button>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;

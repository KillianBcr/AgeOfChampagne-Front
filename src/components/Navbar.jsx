import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/user/index";
import "../Styles/main.css";
import UserButton from "./UserButton";



function Navbar() {
  const navRef = useRef();
  const navigate = useNavigate();
  const { userData } = useContext(UserContext) ?? { userData: null };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };


  return (
    <header>
      <a href="/"><img src="src\assets\logo.svg" alt="Logo" className="logo-img" /></a>
      <nav ref={navRef}>
        <a href="/">Accueil</a>
        <a href="/collection">Collection</a>
        <a href="/scan">Scan</a>
        <UserButton/>
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

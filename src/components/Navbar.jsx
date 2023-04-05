import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
		<img src="src\assets\logo.svg" alt="Logo" className="logo-img" />
			<nav ref={navRef}>
				<a href="/#">Acceuil</a>
				<a href="/#">Connexion</a>
				<a href="/#">Contact</a>
				<a href="/#">A propos</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
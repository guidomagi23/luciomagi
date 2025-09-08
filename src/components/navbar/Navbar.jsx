import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import aboutImagen from "../../media/logo192.png";

const Navbar = ({ isScrolling }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toTheTop = () => {
    window.scrollTo(0, 0);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Cierra el menú después de hacer clic
    }
  };

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : ""}`}>
      <div className="navbar-logo" onClick={toTheTop}>
        <Link to="/">
          <img src={aboutImagen} alt="Lucio Magi" title="Logo Lucio Magi" />
        </Link>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <li onClick={() => scrollToSection("about")}>Acerca de</li>
        <li onClick={() => scrollToSection("projects")}>Lanzamientos</li>
        <li onClick={() => scrollToSection("contact")}>Contacto</li>
      </ul>
    </nav>
  );
};

export default Navbar;

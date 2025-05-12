import React, { useState } from 'react';
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
        <img src={aboutImagen} alt="about" />
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import aboutImagen from "../../media/logo192.png";

const menuItems = [
  { id: "about", label: "Acerca de" },
  { id: "projects", label: "Lanzamientos" },
  { id: "contact", label: "Contacto" },
];

const Navbar = ({ isScrolling }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((currentValue) => !currentValue);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toTheTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMenu();
    }
  };

  return (
    <nav
      className={`navbar ${isScrolling > 20 ? "scrolling" : ""} ${
        isMenuOpen ? "menu-open" : ""
      }`}
    >
      <div className="navbar-shell">
        <div className="navbar-logo" onClick={toTheTop}>
          <Link to="/" aria-label="Volver al inicio">
            <img src={aboutImagen} alt="Lucio Magi" title="Logo Lucio Magi" />
          </Link>
        </div>

        <button
          type="button"
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? "×" : "☰"}
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className="navbar-link"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

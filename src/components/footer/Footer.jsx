import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="design-by">
        <p>Desarrollado por Guido Magi.</p>
      </div>

      <div className="sns-links-footer">
        <a
          href="https://www.linkedin.com/in/guidomagi/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin linkedin"></i>
        </a>
        <a
          href="https://github.com/guidomagi23"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

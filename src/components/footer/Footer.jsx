import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="design-by">
        <p>
          © Copyright 2025 - {currentYear} | All Rights Reserved | Powered by{" "}
          <a
            href="https://www.linkedin.com/in/guidomagi/"
            target="_blank"
            rel="noreferrer"
            className="sns-links-footer"
            title="Linkedin Guido Magi"
          >
            <span style={{ lineHeight: "1.5", fontWeight: 900 }}>
              Guido Magi
            </span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

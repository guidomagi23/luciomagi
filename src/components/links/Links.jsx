import React from "react";
import "./Links.css";
import lucioImage from "../../media/lucio-magi-link.jpg";
import {
  FaYoutube,
  FaSoundcloud,
  FaInstagram,
  FaSpotify,
  FaGithub,
} from "react-icons/fa";

const Links = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@luciomagi",
      icon: FaYoutube,
      color: "#FF0000",
    },
    {
      name: "SoundCloud",
      url: "https://soundcloud.com/magi-set",
      icon: FaSoundcloud,
      color: "#FF5500",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/luciomagi/",
      icon: FaInstagram,
      color: "#E4405F",
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/intl-es/artist/71Z20965pNEjGlGnzIZEak?si=XUTW_HcQTTWekDlAWWtYoA",
      icon: FaSpotify,
      color: "#1DB954",
    },
    {
      name: "Sitio Web",
      url: "https://luciomagi.github.io/luciomagi/",
      icon: FaGithub,
      color: "#333333",
    },
  ];

  return (
    <div className="links-container">
      <div className="links-content">
        <div className="profile-section">
          <img
            src={lucioImage}
            alt="Lucio Magi"
            className="profile-image"
            title="Lucio Magi - DJ y Productor"
          />
          <h1 className="profile-name">LUCIO MAGI</h1>
          <p className="profile-description">DJ | Productor</p>
        </div>

        <div className="links-section">
          {links.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-item"
                style={{ "--link-color": link.color }}
                title={`${link.name} - Lucio Magi`}
              >
                <div className="link-icon">
                  <IconComponent />
                </div>
                <span className="link-text">{link.name}</span>
              </a>
            );
          })}
        </div>

        <div className="links-footer">
          <div>
            <p>
              © Copyright 2025 - {currentYear} | All Rights Reserved | Powered
              by{" "}
              <a
                href="https://www.linkedin.com/in/guidomagi/"
                target="_blank"
                rel="noreferrer"
                className="sns-links-footer-link"
                title="Linkedin Guido Magi"
              >
                <span style={{ lineHeight: "1.5", fontWeight: 900 }}>
                  Guido Magi
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;

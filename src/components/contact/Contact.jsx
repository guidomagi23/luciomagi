import React from "react";
import "./Contact.css";
import {
  FaYoutube,
  FaInstagram,
  FaSoundcloud,
  FaSpotify,
  FaEnvelope,
  FaLink,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-wrapper">
        {/* SOCIAL MEDIA */}
        <div className="social-media-section">
          <h2>Redes Sociales</h2>
          <div className="social-content">
            <div className="social-icons">
              <a
                href="https://open.spotify.com/intl-es/artist/71Z20965pNEjGlGnzIZEak?si=XUTW_HcQTTWekDlAWWtYoA"
                target="_blank"
                rel="noopener noreferrer"
                title="Spotify Lucio Magi"
              >
                <FaSpotify className="icon" />
              </a>
              <a
                href="https://www.youtube.com/@luciomagi"
                target="_blank"
                rel="noopener noreferrer"
                title="Youtube Lucio Magi"
              >
                <FaYoutube className="icon" />
              </a>
              <a
                href="https://soundcloud.com/magi-set"
                target="_blank"
                rel="noopener noreferrer"
                title="Soundcloud Lucio Magi"
              >
                <FaSoundcloud className="icon" />
              </a>
              <a
                href="https://www.instagram.com/luciomagi"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram Lucio Magi"
              >
                <FaInstagram className="icon" />
              </a>
              <a
                href="/links"
                target="_blank"
                rel="noopener noreferrer"
                title="Links Lucio Magi"
              >
                <FaLink className="icon" />
              </a>
            </div>
          </div>
        </div>

        {/* BOOKING CONTACT */}
        <div className="booking-section">
          <h2>Contacto de Reservas</h2>
          <div className="booking-content">
            <a href="mailto:luciiomagi@gmail.com" className="email-link" title="Email Lucio Magi">
              <FaEnvelope className="icon email-icon" />
              <span className="email-text" >luciiomagi@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

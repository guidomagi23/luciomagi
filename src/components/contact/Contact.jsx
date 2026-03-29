import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";
import {
  FaEnvelope,
  FaInstagram,
  FaLink,
  FaSoundcloud,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-wrapper">
        <div className="social-media-section" data-aos="fade-right">
          <p className="contact-kicker">Redes & comunidad</p>
          <h2>Conectá con Lucio Magi</h2>
          <p className="contact-copy">
            Encuentra novedades, lanzamientos, videos y todos los links
            oficiales desde las plataformas principales.
          </p>
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
                href="https://www.tiktok.com/@luciomagi_"
                target="_blank"
                rel="noopener noreferrer"
                title="TikTok Lucio Magi"
              >
                <FontAwesomeIcon icon={faTiktok} className="icon" />
              </a>
              <Link to="/links" title="Links Lucio Magi">
                <FaLink className="icon" />
              </Link>
            </div>
          </div>
        </div>

        <div className="booking-section" data-aos="fade-left">
          <p className="contact-kicker">Booking</p>
          <h2>Contacto directo</h2>
          <p className="contact-copy">
            Para consultas, fechas, colaboraciones o contrataciones, este es el
            canal directo.
          </p>
          <div className="booking-content">
            <a
              href="mailto:luciomagi@gmail.com"
              className="email-link"
              title="Email Lucio Magi"
            >
              <FaEnvelope className="icon email-icon" />
              <span className="email-text">luciomagi@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

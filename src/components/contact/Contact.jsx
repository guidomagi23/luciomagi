import React from "react";
import "./Contact.css";
import qrImage from "../../media/QR.png";
import {
  FaYoutube,
  FaInstagram,
  FaSoundcloud,
  FaEnvelope,
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
                href="https://www.youtube.com/@luciomagi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="icon" />
              </a>
              <a
                href="https://soundcloud.com/magi-set"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSoundcloud className="icon" />
              </a>
              <a
                href="https://www.instagram.com/luciomagi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icon" />
              </a>
            </div>
            <img src={qrImage} alt="QR Lucio Magi" className="qr" />
          </div>
        </div>

        {/* BOOKING CONTACT */}
        <div className="booking-section">
          <h2>Contacto de Reservas</h2>
          <div className="booking-content">
            <a href="mailto:luciiomagi@gmail.com" className="email-link">
            <FaEnvelope className="icon email-icon"/>
            <span className="email-text">luciiomagi@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

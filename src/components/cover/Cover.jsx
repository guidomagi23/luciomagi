import React from "react";
import "../cover/Cover.css";
import coverVideo from "../../media/coverVideo.mp4";
import LucioMagiTitle from "./LucioMagiTitle";

// Importación de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faYoutube,
  faSoundcloud,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Cover = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="cover-container">
      <video
        className="video"
        src={coverVideo}
        autoPlay
        loop
        muted
        playsInline
        type="video/mp4"
        title="Lucio Magi - Productor y DJ"
      />
      <LucioMagiTitle />
      <h2 data-aos="zoom-out">DJ | Productor</h2>
      <div className="social-icons-cover" data-aos="zoom-in">
        <a
          href="https://open.spotify.com/intl-es/artist/71Z20965pNEjGlGnzIZEak?si=XUTW_HcQTTWekDlAWWtYoA"
          target="_blank"
          rel="noopener noreferrer"
          title="Spotify Lucio Magi"
        >
          <FontAwesomeIcon icon={faSpotify} />
        </a>
        <a
          href="https://soundcloud.com/magi-set"
          target="_blank"
          rel="noopener noreferrer"
          title="Soundcloud Lucio Magi"
        >
          <FontAwesomeIcon icon={faSoundcloud} />
        </a>
        <a
          href="https://www.youtube.com/@luciomagi"
          target="_blank"
          rel="noopener noreferrer"
          title="Youtube Lucio Magi"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a
          href="https://www.instagram.com/luciomagi"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram Lucio Magi"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.tiktok.com/@luciomagi_"
          target="_blank"
          rel="noopener noreferrer"
          title="TikTok Lucio Magi"
        >
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a href="mailto:luciomagi@gmail.com" title="Email Lucio Magi">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <button
        type="button"
        className="scroll-indicator"
        onClick={scrollToAbout}
        aria-label="Desplazarse hacia abajo"
        title="Ver más"
      >
        <span className="scroll-indicator-mouse">
          <span className="scroll-indicator-wheel"></span>
        </span>
      </button>
    </div>
  );
};

export default Cover;

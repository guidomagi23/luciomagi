import React from "react";
import "../cover/Cover.css";
import coverVideo from "../../media/coverVideo.mp4";
import LucioMagiTitle from "./LucioMagiTitle";

// Importación de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Cover = () => {
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
      <h2 data-aos="zoom-out" >Dj | Productor</h2>
      <div className="social-icons-cover" data-aos="zoom-in">
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
        <a href="mailto:luciomagi@gmail.com" title="Email Lucio Magi">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
};

export default Cover;

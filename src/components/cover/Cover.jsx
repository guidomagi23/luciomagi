import React from "react";
import "../cover/Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

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
      />
      <h1>LUCIO MAGI</h1>
      <h2>Dj | Productor</h2>
      <div className="social-icons-cover">
        <a
          href="https://soundcloud.com/magi-set"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faSoundcloud} />
        </a>
        <a
          href="https://www.youtube.com/@luciomagi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a
          href="https://www.instagram.com/luciomagi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="mailto:luciomagi@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
};

export default Cover;

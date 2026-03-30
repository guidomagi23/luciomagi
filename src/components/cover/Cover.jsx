import React, { useEffect, useRef, useState } from "react";
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

const socialLinks = [
  {
    href: "https://open.spotify.com/intl-es/artist/71Z20965pNEjGlGnzIZEak?si=XUTW_HcQTTWekDlAWWtYoA",
    title: "Spotify Lucio Magi",
    icon: faSpotify,
    color: "#1db954",
    rgb: "29, 185, 84",
  },
  {
    href: "https://soundcloud.com/magi-set",
    title: "Soundcloud Lucio Magi",
    icon: faSoundcloud,
    color: "#ff5500",
    rgb: "255, 85, 0",
  },
  {
    href: "https://www.youtube.com/@luciomagi",
    title: "Youtube Lucio Magi",
    icon: faYoutube,
    color: "#ff0000",
    rgb: "255, 0, 0",
  },
  {
    href: "https://www.instagram.com/luciomagi",
    title: "Instagram Lucio Magi",
    icon: faInstagram,
    color: "#e4405f",
    rgb: "228, 64, 95",
  },
  {
    href: "https://www.tiktok.com/@luciomagi_",
    title: "TikTok Lucio Magi",
    icon: faTiktok,
    color: "#7b2cff",
    rgb: "123, 44, 255",
  },
  {
    href: "mailto:luciomagi@gmail.com",
    title: "Email Lucio Magi",
    icon: faEnvelope,
    color: "#60a5fa",
    rgb: "96, 165, 250",
  },
];

const Cover = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isWaveActive, setIsWaveActive] = useState(false);
  const resetTimeoutRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 960);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        window.clearTimeout(resetTimeoutRef.current);
      }
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      triggerWave();
    }, isMobile ? 850 : 700);

    return () => window.clearTimeout(timeoutId);
  }, [isMobile]);

  const triggerWave = () => {
    if (resetTimeoutRef.current) {
      window.clearTimeout(resetTimeoutRef.current);
    }
    if (frameRef.current) {
      window.cancelAnimationFrame(frameRef.current);
    }

    setIsWaveActive(false);

    frameRef.current = window.requestAnimationFrame(() => {
      setIsWaveActive(true);
      resetTimeoutRef.current = window.setTimeout(() => {
        setIsWaveActive(false);
      }, 2150);
    });
  };

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
      <div
        className="social-icons-cover"
        data-aos="zoom-in"
        onTouchStart={() => {
          if (isMobile) triggerWave();
        }}
      >
        {socialLinks.map((social, index) => (
          <a
            key={social.title}
            className={isWaveActive ? "social-wave-icon-active" : ""}
            href={social.href}
            target={social.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            title={social.title}
            style={{
              "--social-color": social.color,
              "--social-rgb": social.rgb,
              "--wave-delay": `${index * 0.14}s`,
            }}
          >
            <FontAwesomeIcon icon={social.icon} />
          </a>
        ))}
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

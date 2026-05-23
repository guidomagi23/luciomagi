import React, { useEffect, useRef, useState } from "react";
import "./Links.css";
import lucioImage from "../../media/aboutImagenLinks.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import {
  FaFacebookF,
  FaYoutube,
  FaSoundcloud,
  FaInstagram,
  FaSpotify,
  FaGithub,
  FaLink,
  FaShareAlt,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

const Links = () => {
  const currentYear = new Date().getFullYear();
  const [shareMessage, setShareMessage] = useState("");
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const shareTimeoutRef = useRef(null);
  const shareMenuRef = useRef(null);

  useEffect(() => {
    return () => {
      if (shareTimeoutRef.current) {
        window.clearTimeout(shareTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isShareMenuOpen) {
      return undefined;
    }

    const handleOutsideClick = (event) => {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target)) {
        setIsShareMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isShareMenuOpen]);

  const showShareMessage = (message) => {
    setShareMessage(message);
    if (shareTimeoutRef.current) {
      window.clearTimeout(shareTimeoutRef.current);
    }
    shareTimeoutRef.current = window.setTimeout(() => {
      setShareMessage("");
    }, 2500);
  };

  const getShareUrl = () => {
    const path = window.location.pathname.endsWith("/")
      ? window.location.pathname
      : `${window.location.pathname}/`;

    return new URL("links.html", `${window.location.origin}${path}`).toString();
  };

  const shouldUseNativeShare = () => {
    return (
      typeof navigator.share === "function" &&
      window.matchMedia("(pointer: coarse)").matches
    );
  };

  const handleShare = async () => {
    const shareData = {
      title: "Lucio Magi | Links Oficiales",
      text: "Escucha, mira y seguí a Lucio Magi en todas sus plataformas oficiales.",
      url: getShareUrl(),
    };

    try {
      if (shouldUseNativeShare()) {
        await navigator.share(shareData);
        showShareMessage("Listo para compartir");
        setIsShareMenuOpen(false);
        return;
      }
      setIsShareMenuOpen((currentValue) => !currentValue);
    } catch (error) {
      if (error?.name !== "AbortError") {
        showShareMessage("No se pudo compartir");
      }
    }
  };

  const handleCopyShareUrl = async () => {
    const shareUrl = getShareUrl();

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
        showShareMessage("Link copiado");
      } else {
        window.prompt("Copia este link:", shareUrl);
        showShareMessage("Link listo");
      }
      setIsShareMenuOpen(false);
    } catch (error) {
      showShareMessage("No se pudo copiar");
    }
  };

  const links = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@luciomagi",
      icon: <FaYoutube />,
      color: "#FF0000",
      rgb: "255, 0, 0",
    },
    {
      name: "SoundCloud",
      url: "https://soundcloud.com/magi-set",
      icon: <FaSoundcloud />,
      color: "#FF5500",
      rgb: "255, 85, 0",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/luciomagi/",
      icon: <FaInstagram />,
      color: "#E4405F",
      rgb: "228, 64, 95",
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/intl-es/artist/71Z20965pNEjGlGnzIZEak?si=XUTW_HcQTTWekDlAWWtYoA",
      icon: <FaSpotify />,
      color: "#1DB954",
      rgb: "29, 185, 84",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@luciomagi_",
      icon: <FontAwesomeIcon icon={faTiktok} />,
      color: "#7B2CFF",
      rgb: "123, 44, 255",
    },
    {
      name: "Sitio Web",
      url: "https://luciomagi.github.io/luciomagi/",
      icon: <FaGithub />,
      color: "#333333",
      rgb: "51, 51, 51",
    },
  ];

  const shareUrl = getShareUrl();
  const shareText = "Escucha, mira y seguí a Lucio Magi en todas sus plataformas oficiales.";
  const encodedShareUrl = encodeURIComponent(shareUrl);
  const encodedShareText = encodeURIComponent(shareText);
  const shareTargets = [
    {
      name: "WhatsApp",
      url: `https://wa.me/?text=${encodedShareText}%20${encodedShareUrl}`,
      icon: <FaWhatsapp />,
    },
    {
      name: "Telegram",
      url: `https://t.me/share/url?url=${encodedShareUrl}&text=${encodedShareText}`,
      icon: <FaTelegramPlane />,
    },
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedShareUrl}`,
      icon: <FaFacebookF />,
    },
  ];

  return (
    <div className="links-container">
      <div className="links-content">
        <div className="share-floating" ref={shareMenuRef}>
          <button
            type="button"
            className="share-icon-button"
            onClick={handleShare}
            aria-label="Compartir perfil"
            title="Compartir perfil"
          >
            <FaShareAlt />
          </button>

          {isShareMenuOpen ? (
            <div className="share-popover">
              <p className="share-popover-title">Compartir perfil</p>
              <div className="share-popover-links">
                {shareTargets.map((target) => (
                  <a
                    key={target.name}
                    href={target.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-popover-link"
                    title={`Compartir en ${target.name}`}
                  >
                    <span className="share-popover-icon">{target.icon}</span>
                    <span>{target.name}</span>
                  </a>
                ))}
                <button
                  type="button"
                  className="share-popover-link share-copy-button"
                  onClick={handleCopyShareUrl}
                  title="Copiar link"
                >
                  <span className="share-popover-icon">
                    <FaLink />
                  </span>
                  <span>Copiar link</span>
                </button>
              </div>
            </div>
          ) : null}
        </div>

        <div className="profile-section">
          <p className="profile-badge">Official Links</p>
          <div className="profile-image-frame">
            <img
              src={lucioImage}
              alt="Lucio Magi"
              className="profile-image"
              title="Lucio Magi - DJ y Productor"
            />
          </div>
          <h1 className="profile-name">LUCIO MAGI</h1>
          <p className="profile-handle">@luciomagi</p>
          <p className="profile-description">DJ | Productor</p>
          <p className="profile-copy">
            Escucha, mira y seguime en cada plataforma.
          </p>
        </div>

        {shareMessage ? <p className="share-feedback">{shareMessage}</p> : null}

        <div className="links-section">
          {links.map((link, index) => {
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-item"
                style={{
                  "--link-color": link.color,
                  "--link-color-rgb": link.rgb,
                }}
                title={`${link.name} - Lucio Magi`}
              >
                <div className="link-icon">{link.icon}</div>
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
                href="https://www.guidomagi.com.ar"
                target="_blank"
                rel="noreferrer"
                className="sns-links-footer-link"
                title="Sitio web de Guido Magi"
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

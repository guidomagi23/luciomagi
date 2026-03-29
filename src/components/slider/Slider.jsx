import React from "react";
import "./Slider.css";
import { FaSpotify, FaSoundcloud, FaYoutube } from "react-icons/fa";

const platforms = [
  {
    name: "Spotify",
    label: "Lanzamientos",
    description: "Escuchá lanzamientos y novedades en Spotify.",
    href: "https://open.spotify.com/intl-es/artist/71Z20965pNEjGlGnzIZEak?si=XUTW_HcQTTWekDlAWWtYoA",
    icon: FaSpotify,
    color: "#1DB954",
    rgb: "29, 185, 84",
    frameClass: "spotify-frame",
    iframe: {
      src: "https://open.spotify.com/embed/artist/71Z20965pNEjGlGnzIZEak?utm_source=generator&theme=0",
      title: "Lucio Magi Spotify",
      allow:
        "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
      allowFullScreen: true,
    },
  },
  {
    name: "YouTube",
    label: "Sets y videos",
    description: "Mirá sets, videos y contenido del proyecto.",
    href: "https://www.youtube.com/@luciomagi",
    icon: FaYoutube,
    color: "#FF0000",
    rgb: "255, 0, 0",
    frameClass: "youtube-frame",
    iframe: {
      src: "https://www.youtube.com/embed/videoseries?si=wMvdzJJE2W_yRs-g&list=PLcmHq1zwllpNrOSxeB57uNDl4Hp6P-ZS3",
      title: "Lucio Magi YouTube Playlist",
      allow: "autoplay; encrypted-media",
      allowFullScreen: true,
    },
  },
  {
    name: "SoundCloud",
    label: "Extended mixes",
    description: "Encontrá mixes, sets y sesiones completas.",
    href: "https://soundcloud.com/magi-set",
    icon: FaSoundcloud,
    color: "#FF5500",
    rgb: "255, 85, 0",
    frameClass: "soundcloud-frame",
    iframe: {
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2007077184&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      title: "Lucio Magi SoundCloud",
      allow: "autoplay",
      scrolling: "no",
    },
  },
];

const Slider = () => {
  return (
    <section className="media-library" id="projects">
      <div className="media-library-intro" data-aos="fade-up">
        <p className="media-library-kicker">Plataformas</p>
        <h2>Escucha lanzamientos, playlists y sets desde cada canal</h2>
        <p>Elegí la plataforma que prefieras para escuchar o ver.</p>
      </div>

      <div className="platform-grid">
        {platforms.map((platform, index) => {
          const IconComponent = platform.icon;

          return (
            <article
              key={platform.name}
              className="platform-card"
              style={{
                "--platform-color": platform.color,
                "--platform-rgb": platform.rgb,
              }}
              data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
            >
              <div className="platform-content">
                <div className="platform-card-top">
                  <div className="platform-icon-wrap">
                    <IconComponent className="platform-icon" />
                  </div>
                  <div className="platform-heading">
                    <p>{platform.label}</p>
                    <h3>{platform.name}</h3>
                  </div>
                </div>

                <p className="platform-description">{platform.description}</p>

                <a
                  className="platform-cta"
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir en {platform.name}
                </a>
              </div>

              <div className={`embed-shell ${platform.frameClass}`}>
                <iframe
                  src={platform.iframe.src}
                  title={platform.iframe.title}
                  frameBorder="0"
                  allow={platform.iframe.allow}
                  allowFullScreen={platform.iframe.allowFullScreen}
                  loading="lazy"
                  scrolling={platform.iframe.scrolling}
                ></iframe>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Slider;

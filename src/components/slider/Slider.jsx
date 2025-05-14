import React from "react";
import "./Slider.css";
import { FaYoutube, FaSoundcloud } from "react-icons/fa";

const Slider = () => {
  return (
    <section className="media-library" id="projects">
      <div className="embed-container seccion-negra">
        <div
          className="embed-title"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
        >
          <FaYoutube className="platform-icon youtube-icon" />
          <h2>En YouTube</h2>
        </div>
        <div
          className="youtube-embed"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
        >
          <iframe
            width="800"
            height="800"
            src="https://www.youtube.com/embed/videoseries?si=wMvdzJJE2W_yRs-g&amp;list=PLcmHq1zwllpNrOSxeB57uNDl4Hp6P-ZS3"
            title="Lucio Magi YouTube Playlist"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <div className="youtube-embed-mobile">
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/videoseries?si=wMvdzJJE2W_yRs-g&amp;list=PLcmHq1zwllpNrOSxeB57uNDl4Hp6P-ZS3"
            title="Lucio Magi YouTube Playlist"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="embed-container">
        <div
          className="embed-title"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
        >
          <FaSoundcloud className="platform-icon soundcloud-icon" />
          <h2>En SoundCloud</h2>
        </div>
        <div
          className="soundcloud-embed"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
        >
          <iframe
            width="800"
            height="800"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title="Lucio Magi SoundCloud"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2007077184&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>
        <div className="soundcloud-embed-mobile">
          <iframe
            width="100%"
            height="600"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title="Lucio Magi SoundCloud"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2007077184&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>
      </div>
      <div className="gradiente-transicion"></div>
    </section>
  );
};

export default Slider;

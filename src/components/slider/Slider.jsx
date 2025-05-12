import React from 'react'
import "./Slider.css"

const Slider = () => {
  return (
    <section className="media-library" id="projects">
      <div className="youtube-embed">
        <iframe
          width="100%"
          height="700"
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
          height="400"
          src="https://www.youtube.com/embed/videoseries?si=wMvdzJJE2W_yRs-g&amp;list=PLcmHq1zwllpNrOSxeB57uNDl4Hp6P-ZS3"
          title="Lucio Magi YouTube Playlist"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      <div className="soundcloud-embed">
        <iframe
          width="100%"
          height="700"
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
          height="400"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          title="Lucio Magi SoundCloud"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2007077184&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </div>
    </section>
  );
}

export default Slider

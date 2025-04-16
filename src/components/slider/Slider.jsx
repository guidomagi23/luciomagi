import React from 'react'
import "./Slider.css"

const Slider = () => {
  return (
    <section className="media-library" id="projects">
      <div className="youtube-embed">
        <iframe
          width="100%"
          height="700"
          src="https://www.youtube.com/embed/videoseries?si=okyhce0Y5QX40Ym8&amp;list=PL1uK9zxRKreu_SpQ3DbcENBrBrBha77x2"
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
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2007027228&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </div>
    </section>
  );
}

export default Slider

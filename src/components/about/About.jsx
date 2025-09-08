import React, { useState, useEffect } from "react";
import "./About.css";
import aboutImagen from "../../media/aboutImagen.png";

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 960);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-countainer">
        <div className="about-desc" data-aos="fade-right">
          <h1>Dj | Productor</h1>

          <p>
            Creando sets cargados de <b>atmósferas profundas</b> y{" "}
            <b>progresiones cuidadosamente construidas</b> para generar una{" "}
            <b>experiencia inmersiva</b> en la pista de baile.
          </p>

          {/* Mostrar botón solo si es móvil y no se está mostrando todo */}
          {isMobile && !showMore && (
            <button className="read-more-btn" onClick={() => setShowMore(true)}>
              Leer más
            </button>
          )}

          {/* Contenido extra solo si no es móvil o ya se hizo clic en "Leer más" */}
          {(!isMobile || showMore) && (
            <>
              <br />
              <p>
                Desde sus inicios, su <b>pasión por la música electrónica</b> lo
                llevó a explorar distintos escenarios, logrando presentarse en
                diversos puntos del país. Ha compartido su música en reconocidos
                destinos como <b>Mar del Plata (Playa Grande)</b> y{" "}
                <b>Bariloche (Cerro Catedral)</b>, además de ser parte de{" "}
                <b>Ciclos de Musica Electrónica como MUSHROOM</b> y eventos
                organizados por <b>Cloud Producciones</b>, realizados en
                espacios emblemáticos como <b>Altos de Okcidenta</b>,{" "}
                <b>Azopardo Club</b> y <b>Pinta</b>. También formó parte de la{" "}
                <b>14° Bienal de Arte Joven</b> en la{" "}
                <b>Manzana Histórica de la UNL</b>, uno de los eventos
                culturales más relevantes de la región.
              </p>
              <br />
              <p>
                A nivel local, su talento ha sido reconocido en la{" "}
                <b>escena nocturna de Santa Fe</b>, donde ha tocado en bares y
                clubes icónicos como <b>One Six</b>, <b>La Grieta</b>,{" "}
                <b>Monkey Bar</b>, <b>Peñón del Águila</b>, <b>Liverpool</b> y{" "}
                <b>Hammer</b>, así como en paradores de playa y eventos privados
                tanto en <b>Santa Fe</b> como en <b>Gualeguaychú</b>. Su
                capacidad para <b>leer la pista</b> y construir{" "}
                <b>sets dinámicos</b> lo ha llevado a consolidarse como una{" "}
                <b>figura en ascenso</b> dentro del{" "}
                <b>circuito electrónico nacional</b>.
              </p>
              <br />
              <p>
                Además de su trabajo como <b>DJ</b>, ha desarrollado su faceta
                como <b>productor musical</b>, lanzando <b>tracks propios</b>{" "}
                que han definido su <b>identidad artística</b>. Entre sus
                producciones más destacadas se encuentran <b>Break The Loop</b>,{" "}
                <b>Dirty Talking</b>, <b>Evolving Rhythm</b> y{" "}
                <b>Unlock Your Mind</b>, piezas que reflejan su{" "}
                <b>visión sonora</b> y la <b>esencia de su estilo</b>. Su
                música, caracterizada por una{" "}
                <b>cuidadosa selección de sonidos</b> y una{" "}
                <b>estética pulida</b>, busca transportar al oyente a un{" "}
                <b>viaje sensorial único</b>.
              </p>
              <br />
              <p>
                Con una <b>proyección en constante crecimiento</b>,{" "}
                <b>Lucio Magi</b> continúa explorando nuevas formas de expresión
                dentro de la <b>música electrónica</b>, manteniéndose fiel a su{" "}
                <b>identidad</b> y evolucionando con cada <b>set</b> y{" "}
                <b>producción</b>.
              </p>
            </>
          )}
        </div>

        <div className="about-img" data-aos="fade-left">
          <img
            src={aboutImagen}
            alt="Retrato de Lucio Magi actuando en vivo"
            title="Lucio Magi Dj y Productor"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

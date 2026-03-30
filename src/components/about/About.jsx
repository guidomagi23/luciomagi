import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import aboutFront from "../../media/aboutFront.webp";
import aboutBack from "../../media/aboutBack.webp";

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [shouldAutoSpin, setShouldAutoSpin] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 960);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.45,
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) {
      setShouldAutoSpin(false);
      return undefined;
    }

    setShouldAutoSpin(false);

    const frameId = window.requestAnimationFrame(() => {
      setShouldAutoSpin(true);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className={`about ${isInView ? "about-in-view" : ""}`}
      id="about"
    >
      <div className="about-countainer">
        <div className="about-desc" data-aos="fade-right">
          <h1>DJ | Productor</h1>

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
          <div
            className={`about-portrait ${
              shouldAutoSpin ? "about-portrait-auto-spin" : ""
            }`}
          >
            <div
              className="about-portrait-card"
              onAnimationEnd={() => setShouldAutoSpin(false)}
            >
              <div className="about-portrait-face about-portrait-front">
                <img
                  src={aboutFront}
                  alt="Lucio Magi de frente"
                  title="Lucio Magi Dj y Productor"
                />
              </div>
              <div className="about-portrait-face about-portrait-back">
                <img
                  src={aboutBack}
                  alt="Lucio Magi de perfil"
                  title="Lucio Magi Dj y Productor"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

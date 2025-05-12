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
    <div className="about-countainer" id="about">
      <div className="about-desc">
        <h1>Dj|Productor</h1>

        <p>
          Lucio Magi es un DJ y productor nacido en la ciudad de Santa Fe. Su
          propuesta musical se distingue por la fusión de melodías hipnóticas y
          vocales envolventes, combinadas con un groove minimalista que define
          su estilo. Su enfoque sonoro transita entre los géneros:
        </p>
        <br />
        <p>
          <b>Minimal Melodic Techno | Techno</b>
        </p>
        <br />
        <p>
          Creando sets cargados de atmósferas profundas y progresiones
          cuidadosamente construidas para generar una experiencia inmersiva en
          la pista de baile.
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
              Desde sus inicios, su pasión por la música electrónica lo llevó a
              explorar distintos escenarios, logrando presentarse en diversos
              puntos del país. Ha compartido su música en reconocidos destinos
              como Mar del Plata (Playa Grande) y Bariloche (Cerro Catedral),
              además de ser parte de eventos organizados por Cloud Producciones,
              realizados en espacios emblemáticos como Altos de Okcidenta,
              Azopardo Club y Pinta. También formó parte de la 14° Bienal de
              Arte Joven en la Manzana Histórica de la UNL, uno de los eventos
              culturales más relevantes de la región.
            </p>
            <br />
            <p>
              A nivel local, su talento ha sido reconocido en la escena nocturna
              de Santa Fe, donde ha tocado en bares y clubes icónicos como One
              Six, La Grieta, Monkey Bar, Peñón del Águila, Liverpool y Hammer,
              así como en paradores de playa y eventos privados tanto en Santa
              Fe como en Gualeguaychú. Su capacidad para leer la pista y
              construir sets dinámicos lo ha llevado a consolidarse como una
              figura en ascenso dentro del circuito electrónico nacional.
            </p>
            <br />
            <p>
              Además de su trabajo como DJ, ha desarrollado su faceta como
              productor musical, lanzando tracks propios que han definido su
              identidad artística. Entre sus producciones más destacadas se
              encuentran Inside Demon, Unlock Your Mind y Flow With Yourself,
              piezas que reflejan su visión sonora y la esencia de su estilo. Su
              música, caracterizada por una cuidadosa selección de sonidos y una
              estética pulida, busca transportar al oyente a un viaje sensorial
              único.
            </p>
            <br />
            <p>
              Con una proyección en constante crecimiento, Lucio Magi continúa
              explorando nuevas formas de expresión dentro de la música
              electrónica, manteniéndose fiel a su identidad y evolucionando con
              cada set y producción.
            </p>
          </>
        )}
      </div>

      <div className="about-img">
        <img src={aboutImagen} alt="about" />
      </div>
    </div>
  );
};

export default About;

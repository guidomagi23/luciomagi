import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Slider from "./components/slider/Slider";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Links from "./components/links/Links";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  useEffect(() => {
    AOS.init({
      duration: 2300, // duración de la animación
      once: true, // si quieres que se ejecute solo una vez
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar isScrolling={scrollHeight} />
                <Cover />
                <About />
                <Slider />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/links" element={<Links />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

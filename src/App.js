import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Slider from "./components/slider/Slider";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Links from "./components/links/Links";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      setScrollHeight(window.scrollY);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
      offset: 40,
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

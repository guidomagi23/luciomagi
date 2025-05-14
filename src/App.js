import React, {useState, useEffect} from 'react';
import './App.css';
import Cover from "./components/cover/Cover";
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Slider from './components/slider/Slider';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY ;
    setScrollHeight(position);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scrollHeight])

  useEffect(() => {
    AOS.init({
      duration: 2300, // duración de la animación
      once: true,     // si quieres que se ejecute solo una vez
    });
  }, []);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight}/>
      <Cover />
      <About />
      <Slider />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

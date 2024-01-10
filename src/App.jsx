import "./App.css";

import { Element } from "react-scroll";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Feature from "./components/Feature";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Element name="header">
        <Header />
      </Element>
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="feature">
        <Feature />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="testimonials">
        <Testimonials />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </>
  );
}

export default App;

import { useEffect } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import { useState } from "react";

function App() {
  const [scrollBtn, setScrollBtn] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScrollBtn(1);
      } else {
        setScrollBtn(0);
      }
    });
  }, []);

  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a style={{ opacity: scrollBtn ? 1 : 0, transition: "0.5s" }} href="#up">
        <button className="scroll-to-top icon-keyboard_arrow_up"></button>
      </a>
    </div>
  );
}

export default App;

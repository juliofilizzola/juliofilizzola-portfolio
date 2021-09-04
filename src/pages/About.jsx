import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Skills from "../components/Skills";
import AboutIcon from "../image/About.svg";
import './about.css';

function About() {
  const location = useLocation();
  
  React.useEffect(() => {
    if (location.pathname === '/about'){
      document.title='Sobre';
      document.getElementById("favicon").href = AboutIcon;
    }
  });
  
  return (
    <div>
      <Header />
      <div className="aboutALL">
      <div className="aboutContainer">
        <img src="https://avatars.githubusercontent.com/u/65046505?s=400&u=ea9628f923188d9161d1745f22cd3216b01a381c&v=4" alt="Julio Filizzola" />

          <section>

            <h1>Sobre Mim</h1>
            <p>
              Sou estudante de Web Developer na <a
                className="aTrybe"
                href="https://www.betrybe.com/"
                alt="Link para o site da trybe"
                target="_blank"
                rel="noreferrer"
              >
                Trybe
              </a>
            </p>
            <Skills />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About

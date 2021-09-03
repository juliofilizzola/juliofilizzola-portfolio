import React from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
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

          <div>
            <h1>Sobre Mim</h1>

            <p>
              Sou estudande
              <Link to="/skills"> Mais sobre mim </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About

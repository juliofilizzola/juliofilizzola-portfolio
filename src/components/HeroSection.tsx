import React from 'react';
import './style/about/about.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="aboutALL">
          <div className="aboutContainer">
            <img src="https://avatars.githubusercontent.com/u/65046505?s=400&u=ea9628f923188d9161d1745f22cd3216b01a381c&v=4" alt="Julio Filizzola" />

            <section>

              <h1>Sobre Mim</h1>
              <p>
                Olá, sou Julio Filizzola, tenho 25 anos. Sou estudante de Web Developer na <a
                className="aTrybe"
                href="https://www.betrybe.com/"
                // alt="Link para o site da trybe"
                target="_blank"
                rel="noreferrer"
              >
                Trybe
              </a>, fascinado por tecnologia e o modo ao qual lidamos com elas. Gosto bastante de ficção cientifica e suas complexidades: Amo Café ☕!
              </p>
              <p>
                Me especializando no Front End, mas não deixando de ver o Backend
              </p>
              <p>
                Atuei em um podcast sobre a cultura pop, conversando sobre vários assuntos de entretenimento e experiências vividas.
              </p>
              {/* <Skills /> */}
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

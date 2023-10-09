import Footer from "../components/Footer";
import React from "react";
// import { useLocation } from "react-router-dom";
// import AboutIcon from '../image/About.svg';
import './style/about/about.css';

function About() {
  // const location = useLocation();
  //
  // React.useEffect(() => {
  //   if (location.pathname === '/about'){
  //     document.title='Sobre';
  //     // if (document.getElementById('favicon').innerHTML) {
  //
  //     //   // document.getElementById("favicon"). = AboutIcon;
  //     // }
  //
  //   }
  // });

  return (
    <div>
      {/*<Header />*/}
      <div className="aboutALL">
      <div className="aboutContainer">
        <img src="https://i2.wp.com/media.giphy.com/media/KziKCpvrGngHbYjaUF/giphy.gif?w=800&ssl=1" alt="Julio Filizzola" />

          <section>

            <h1>Sobre Mim</h1>

          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;

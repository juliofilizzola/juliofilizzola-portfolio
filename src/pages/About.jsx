import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import './about.scss';

function About() {
  return (
    <div>
      <Header />
      <div className="aboutContainer">
        <img src="https://avatars.githubusercontent.com/u/65046505?s=400&u=ea9628f923188d9161d1745f22cd3216b01a381c&v=4" alt="Julio Filizzola" />

        <div>
          <h1>Sobre Mim</h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Mais sobre mim <Link to="/skills"> Hard </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About

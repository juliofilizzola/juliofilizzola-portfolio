import { Link } from 'react-router-dom';
import "./style/AboutMyself/aboutMyself.css";

function AboutMyself() {
  return (
    <div  className="container-myself">
      <img src={'https://i2.wp.com/media.giphy.com/media/KziKCpvrGngHbYjaUF/giphy.gif?w=800&ssl=1'} alt="baby yoda" />
      <h1>Ola estranho!</h1>
      <p>
        Sou um ser curioso e audacioso...
        <Link className="link_git" to='/about'>Para saber um pouco sobre mim...</Link>
      </p>
    </div>
  );
}

export default AboutMyself;

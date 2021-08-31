import { Link } from 'react-router-dom';
import './aboutMyself.scss';

function AboutMyself() {
  return (
    <div  className="container-myself">
      <img src={'https://i2.wp.com/media.giphy.com/media/KziKCpvrGngHbYjaUF/giphy.gif?w=800&ssl=1'} alt="baby yoda" />
      <h1>Um pouco sobre mim</h1>
      <p> Olá, Meu nome é Julio Filizzola
        <Link to='/about'>PARA Saber mais...</Link>
      </p>
    </div>
  )
}

export default AboutMyself;

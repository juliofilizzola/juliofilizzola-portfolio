import { Link } from 'react-router-dom';
import './aboutMyself.css';

function AboutMyself() {
  return (
    <div  className="container-myself">
      <img src={'https://i2.wp.com/media.giphy.com/media/KziKCpvrGngHbYjaUF/giphy.gif?w=800&ssl=1'} alt="baby yoda" />
      <h1>Um pouco sobre mim</h1>
      <p>
      Olá, meu nome é Julio Filizzola, sou estudante de Web desenvolvimento na Trybe. Usei todos os meu conhecimentos adquiridos lá para criar esse portfólio. 
        <Link className="link_git" to='/about'>Para Saber Mais sobre mim...</Link>
      </p>
    </div>
  )
}

export default AboutMyself;

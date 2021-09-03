import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header>
      <p className="text">Julio Filizzola</p>
      <div className="container">
        
        <Link to="/">
          <span></span>
          <span></span>
          Home
          <span></span>
          <span></span>
        </Link>
        <Link to="/about">  
          <span></span>
          <span></span>
          Sobre
          <span></span>
          <span></span>
        </Link>
        <Link to="/projects">
          <span></span>
          <span></span>
          Projetos
          <span></span>
          <span></span>
        </Link>
        <Link to="/contacts">
          <span></span>
          <span></span>
          Contatos
          <span></span>
          <span></span>
        </Link>
      </div>
    </header>
  );
}

export default Header;

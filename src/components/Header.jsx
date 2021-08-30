import { Link } from 'react-router-dom';
import './header.scss';

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
          About
          <span></span>
          <span></span>
        </Link>
        <Link to="/projects">
          <span></span>
          <span></span>
          Projects
          <span></span>
          <span></span>
        </Link>
        <Link to="/contacts">
          <span></span>
          <span></span>
          Contacts
          <span></span>
          <span></span>
        </Link>
      </div>
    </header>
  );
}

export default Header;

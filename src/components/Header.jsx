import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header>
      <p>Filizzola</p>
      <div className="container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
    </header>
  );
}

export default Header;

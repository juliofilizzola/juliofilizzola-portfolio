import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      Filizzola
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
    </header>
  );
}

export default Header;

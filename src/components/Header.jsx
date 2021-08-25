import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      Filizzola
      <div>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Projects</Link>
        <Link to="/">Contacts</Link>
      </div>
    </div>
  );
}

export default Header;

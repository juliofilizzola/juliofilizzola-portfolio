import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      Filizzola
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default Header;

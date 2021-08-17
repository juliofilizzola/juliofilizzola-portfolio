import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
      <div>
        <div class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <Link class="navbar-item" to="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28" />
            </Link>

            <Link role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </Link>
          </div>
        </div>
      </div>
  );
}

export default Header;

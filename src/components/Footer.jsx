import { BsHeartFill } from 'react-icons/bs';
import { DiSass, DiReact } from "react-icons/di";

import './footer.scss';

function Footer() {
  return (
    <footer>
      <p>Pagina feita com <DiReact/> e <DiSass/>. since 2021 <BsHeartFill/></p>
    </footer>
  );
}

export default Footer;

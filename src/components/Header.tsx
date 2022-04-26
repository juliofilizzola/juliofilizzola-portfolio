import React from 'react';
import "./style/Header/header.css";
import ButtomMenu from "./ButtomMenu";

function Header() {
  const MaxWidth = 700;
  const [width, setWidth] = React.useState(window.innerWidth);
  const [toggle, setToggle] = React.useState(true);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    if (width >= MaxWidth) {
      setToggle(true);
    }
  },[width]);


  return (
    <header>
      <p className="text">Julio Filizzola</p>
      <button
        onClick={() => setToggle(!toggle)}
        className="btn-menu"
      >
      <span></span>
      <span></span>
      Menu
      <span></span>
      <span></span>
      </button>

      <div className={ toggle? "container" : "activeContainer"}>
        <ButtomMenu />
      </div>
    </header>
  );
}

export default Header;

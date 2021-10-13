import React from 'react';
import { Link } from 'react-router-dom';
import "./style/Header/header.css";

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

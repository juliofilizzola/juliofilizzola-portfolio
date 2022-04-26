import React from "react";
import { Link } from "react-router-dom";

const ButtomMenu = () => {
  return (
    <>
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
    </>
  );
};

export default ButtomMenu;

import React from 'react';
import { DiGithubBadge } from 'react-icons/di';
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Todo from '../image/todoList.png';
import ProjectsImg from '../image/project.png';
import Avenges from "../image/avengers.png";
import logo from "../image/logo.svg";
import shoppingCart from "../image/shopping-cart.png";
import './style/projects/projects.css';

function Projects() {
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/projects') {
      document.title = 'Projects';
      document.getElementById("favicon").href = ProjectsImg;
    }
  });

  return (
    <div className="pageProjects">
      <Header />

      <div className="project-container">
        <main>
          <h1>Meus projetos</h1>
          <div>
            Algum desses projetos são de cunho avaliativo da Trybe, e outros são projetos pessoais.
          </div>
          <p>Link do meu
            <a href="https://github.com/juliofilizzola" target="_blank" rel="noreferrer">
              <span></span>
              <span></span>
              Github
              <span></span>
              <span></span>
            </a>
          </p>
        </main>
        <section>
          <div className="Project">
            <h3 className="h3Project">To-do List</h3>
            <div className="containerProject">
              <img className="img-projects" src={Todo} alt='imagem do projeto' />
              <div className="text_Container">
                <p>
                  O To-do List é o primeiro projeto pessoal usando React, fiz quando comecei o modulo de Front-end na Trybe.

                </p>
                <p>
                  Esse projeto foi feito em React, usando as tecnologias: de React Router Dom, React Redux e foi estilizado usando CSS.
                  <a href="https://github.com/juliofilizzola/Project-todo-list" className="link_git" target="_blank" rel="noreferrer" >Link do Repositorio <DiGithubBadge /></a>
                </p>
              </div>
            </div>
          </div>
          <div className="Project">
            <h3 className="h3Project">Shopping Cart</h3>
            <div className="containerProject">
              <div className="text_Container">
                <p>O Shopping Cart foi um porjeto que foi feito baseado em um projeto da Trybe, do modulo de front-end. Consiste na manipulação de informações provinientes de uma API do Mercado Livre.
                </p>
                <p>
                  Esse projeto foi feito em React, usando as tecnologias: React Router Dom, React Redux e Bootstrap.
                  <a href="https://github.com/juliofilizzola/site-de-compras" className="link_git" target="_blank" rel="noreferrer" >Link do Repositorio <DiGithubBadge /></a>
                </p>
              </div>
              <img className="img-projects" src={shoppingCart} alt='imagem do projeto' />
            </div>
          </div>

          <div className="Project">
            <h3 className="h3Project">Marvel Heros</h3>
            <div className="containerProject">
              <img className="img-projects" src={Avenges} alt='imagem do projeto' />
              <div className="text_Container">
                <p>
                  Esse foi um dos primeiros projetos que fiz usando API. Foi feito com o meu Amigo Rodolfo Rezende;

                </p>
                <p>
                  Usamos HTML e CSS nesse projeto.
                  <a href="https://github.com/juliofilizzola/Repo-Marvels" className="link_git" target="_blank" rel="noreferrer" >Link do Repositorio <DiGithubBadge /></a>
                </p>
              </div>
            </div>
          </div>

          <div className="Project">
            <h3 className="h3Project">LetMeAsk</h3>
            <div className="containerProject">
              <div className="text_Container">
                <p>
                  Projeto feito na Next Level Week da Rocketseat, foi uma semana imersiva de React que abordou os conceitos de React, useContext, Hooks e ligação com servidor do Firebase.  
                </p>
                <p>
                  Esse projeto foi feito em React, usando as tecnologias: React Router Dom, useContext, SASS, Hooks e Firebase.
                  <a href="https://github.com/juliofilizzola/letmeask" className="link_git" target="_blank" rel="noreferrer" >Link do Repositorio <DiGithubBadge /></a>
                </p>
              </div>
              <img className="img-projects" src={logo} alt='imagem do projeto' />
            </div>
          </div>

          <div className="Project">
            <h3 className="h3Project">Clone Netflix</h3>
            <div className="containerProject">
              <img className="img-projects" src="https://user-images.githubusercontent.com/65046505/134977534-7f40d12b-c4e3-4603-867a-2dd572937bd7.png" alt='imagem do projeto' />
              <div className="text_Container">
                <p>
                    Esse projeto é um clone da pagina inicial da Netflix. Ele foi feito com um tutorial, mas com algumas modificações. Deixando claro que todos o direitos são reservados a Netflix e os dados são proveniente do site
                </p>
                <p>
                  Nesse projeto foi utilizado React, CSS e manipulação de API.
                  <a href="https://github.com/juliofilizzola/clone-netflix" className="link_git" target="_blank" rel="noreferrer" >Link do Repositorio <DiGithubBadge /></a>
                </p>
              </div>
            </div>
          </div>

        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;

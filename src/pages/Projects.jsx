import React from 'react';
import {DiGithubBadge} from 'react-icons/di';
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Space from '../image/block_big.jpg';
import Todo from '../image/todoList.png';
import ProjectsImg from '../image/icons8-código-80.png';
import './projects.scss';



function Projects() {
  const location = useLocation();
  
  React.useEffect(() => {
    if (location.pathname === '/projects'){
      document.title='Projects';
      document.getElementById("favicon").href = ProjectsImg;
    }
  });

  return (
    <div>
      <Header />
      
      <div className="project-container">
        <main>
          <h1>Meus projetos</h1>
          <div>
            Algum desses projetos são de conho avaliativo da Trybe que fiz, e outros são projetos pessoais.
          </div>
          <p>Link to my 
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
            <h3>Todo-List</h3> 
            <div className="containerProject">
              <img className="img-projects" src={Todo} alt='imagem do projeto'/>
              <div className="text_Container">
              <p>O To-do List é o primeiro projeto pessoal, fiz quando comecei o modulo de Front-end;</p>
              <p>
                Esse projeto foi feito em React, usnado as tecnologia de React Router Dom, React Redux e foi estilizado usando CSS.
                <a href="https://github.com/juliofilizzola/Project-todo-list" className="link_git" target="_blank" rel="noreferrer" >Link do Repositorio <DiGithubBadge/></a>
              </p>
              </div>
            </div>
          </div>
          <div className="Project">
            <h3>Todo-List</h3> 
            <div className="containerProject">
              <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              <span>Repositorio git</span> <span>site</span>
              </p>
              <img className="img-projects" src={Todo} alt='imagem do projeto'/>
            </div>
          </div>
          <div className="Project">
            <h3>Todo-List</h3> 
            <div className="containerProject">
              <img className="img-projects" src={Space} alt='imagem do projeto'/>
              <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              <span>Repositorio git</span> <span>site</span>
              </p>
            </div>
          </div>

   
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Projects

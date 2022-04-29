import React from 'react';
import { useLocation } from 'react-router-dom';
import './style/projects/projects.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import context from './context.json';
import RenderLeft from 'src/components/RenderLeft';
import RenderRight from 'src/components/RenderRight';
import { IItem } from 'src/dto/ProjectsItens';

function Projects() {
  const location = useLocation();
  const [projectItens, setProjectItens] = React.useState<IItem[] | []>([]);

  React.useEffect(() => {

    if (location.pathname === '/projects') {
      document.title = 'Projects';
      // document.getElementById("favicon").href = ProjectsImg;
    }
  });
  React.useEffect(() => {
    if(context.projects.length) {

      context.projects && setProjectItens([...context.projects]);
    }
  }, []);

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
          {
            projectItens.length &&
              projectItens.map((value: IItem, index: number) => (
              index % 2 === 0 ? RenderLeft(value) : RenderRight(value)
            ))
          }
        </section>

      </div>
      <Footer />
    </div>
  );
}

export default Projects;

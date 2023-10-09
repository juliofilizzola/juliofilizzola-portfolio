import React from 'react';
import './style/projects/projects.css';
import Footer from '../components/Footer';
import context from './context.json';
import RenderLeft from 'src/components/RenderLeft';
import RenderRight from 'src/components/RenderRight';
import { IItem } from 'src/dto/ProjectsItens';

function Projects() {
  const [projectItens, setProjectItens] = React.useState<IItem[] | []>([]);

  React.useEffect(() => {
    if(context.projects.length) {

      context.projects && setProjectItens([...context.projects]);
    }
  }, []);

  return (
    <div className="pageProjects">
      {/*<Header />*/}

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
              index % 2 === 0 ? RenderLeft(value, index) : RenderRight(value, index)
            ))
          }
        </section>

      </div>
      <Footer />
    </div>
  );
}

export default Projects;

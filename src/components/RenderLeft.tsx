import React from 'react';
import { DiGithubBadge } from 'react-icons/di';
import { IItem } from 'src/dto/ProjectsItens';

const RenderLeft = (value: IItem, key: number) => {
  return (
    <div className="Project" key={key}>
      <h3 className="h3Project">{value.project}</h3>
      <div className="containerProject">
        <img className="img-projects"
        src={require('../image/' + value.imageSource)}
        alt='imagem do projeto' />
          <div className="text_Container">
          <p> {value.aboutProject.text1}</p>
            <p>{value.aboutProject.text2}
            <a href={value.url}
              className="link_git"
              target="_blank" rel="noreferrer">
              Link do Repositorio <DiGithubBadge />
            </a>
            </p>
        </div>
      </div>
    </div>
  );
}

export default RenderLeft;

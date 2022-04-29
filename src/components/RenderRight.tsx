import React from 'react';
import { DiGithubBadge } from 'react-icons/di';
import { IItem } from 'src/dto/ProjectsItens';
import { RequireImage } from 'src/utils/requireImage';

const RenderRight = (value: IItem) => {
  const img = RequireImage(value.imageSource);
  return (
    <div className="Project">
      <h3 className="h3Project">{value.project}</h3>
      <div className="containerProject">
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
        <img className="img-projects"
        src={img}
        alt='imagem do projeto' />
      </div>
    </div>
  );
}

export default RenderRight;

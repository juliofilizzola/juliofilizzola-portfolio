import { Link } from 'react-router-dom';
import "./style/ProjectReview/projectReview.css";

function ProjectReview() {
  return (
    <div className="projectReview">
      <h1>Projetos</h1>
      <p>Aqui está alguns dos projetos que eu tenho mais orgulho!
        <Link to="/projects">Veja todo os projetos aqui!</Link>
      </p>
    </div>
  );
}

export default ProjectReview;

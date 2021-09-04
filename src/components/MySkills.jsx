import { Link } from 'react-router-dom';

function MySkills() {
  return (
    <div className="my-skill-review">
      <h1>Skills</h1>
      <p>
        Minhas Skills, que adiquiri durante os estudos na Trybe!
        <Link to="/projects">Veja elas por completo!</Link>
      </p>
    </div>
  );
}

export default MySkills;

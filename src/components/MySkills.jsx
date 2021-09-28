import { Link } from 'react-router-dom';
import "./style/MySkills/mySkills.css";

function MySkills() {
  return (
    <div className="my-skill-review">
      <h1>Skills</h1>
      <p>
        Minhas Skills, que adiquiri durante os estudos na Trybe!
        <Link to="/skills">Veja elas por completo!</Link>
      </p>
    </div>
  );
}

export default MySkills;

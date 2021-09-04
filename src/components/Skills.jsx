import React from "react";
import './skills.css';
import {DiHtml5, 
  DiCss3, DiGit, DiGithubBadge, DiReact, DiSass, DiNpm, DiJsBadge, DiTerminal} from "react-icons/di";

function Skills() {
   
  return (
    <div>
      <div className="skills">
        <h1>Minhas Hards Skills</h1>

        <div className="skills-hard">
          <h1>Languages</h1>
          <div>
            <DiJsBadge />
            <DiHtml5 />
            <DiCss3 />

          </div>
        </div>

        <div className="skills-hard-frameworks">
        

          <h2> Frameworks</h2>
          <div>
            <DiGithubBadge />
            <DiTerminal />
            <DiReact />
            <DiSass />
            <DiNpm />
            <DiGit />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;

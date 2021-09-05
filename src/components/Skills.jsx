import React from "react";
import './skills.css';
import {DiHtml5, 
  DiCss3, DiGit, DiGithubBadge, DiReact, DiSass, DiNpm, DiUbuntu, DiJsBadge, DiTerminal} from "react-icons/di";


function Skills() {
   
  return (
    <div>
      <div className="skills">
        <h2>Minhas Hards Skills</h2>

        <div className="skills-hard">
          <h3>Languages</h3>
          <div className="languages">
            <DiJsBadge />
            <DiHtml5 />
            <DiCss3 />

          </div>
        </div>

        <div className="skills-hard-frameworks">
        

          <h2> Frameworks</h2>
          <div className="Frameworks">
            <DiGithubBadge />
            <DiTerminal />
            <DiUbuntu/>
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

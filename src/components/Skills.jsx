import React from "react";
import "./style/Skills/skills.css";
import {
  DiHtml5, 
  DiBootstrap,
  DiCss3, DiGit,
  DiGithubBadge,
  DiReact,
  DiSass,
  DiNpm,
  DiUbuntu,
  DiJsBadge,
  DiTerminal
} from "react-icons/di";


function Skills() {
   
  return (
    <div>
      <div className="skills">
        <h2>Minhas Hards Skills</h2>

        <div className="skills-hard">
          <h3>Linguagens</h3>
          <div className="languages">
            <DiJsBadge />
            <DiHtml5 />
            <DiCss3 />

          </div>
        </div>

        <div className="skills-hard-frameworks">
        

          <h2>Frameworks</h2>
          <div className="Frameworks">
            <DiReact />
            <DiBootstrap />
            <DiSass />
          </div>
        </div>
        <div className="skills-hard-frameworks">
        

          <h2>Outros</h2>
          <div className="Others">

            <DiTerminal />
            <DiNpm />
            <DiGit />
            <DiGithubBadge />
            <DiUbuntu/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;

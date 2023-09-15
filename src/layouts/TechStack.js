// IMPORTING ASSETS
import React from "../assets/react.svg";
import Css3 from "../assets/css3.svg";
import Git from "../assets/git.svg";
import Html5 from "../assets/html5.svg";
import JavaScript from "../assets/javascript.svg";
import Npm from "../assets/npm.svg";
import Yarn from "../assets/yarn.svg";
import Github from "../assets/github.svg";

function TechStack() {
  return (
    <div id="tech-stack">
      <h1 className="section-heading">My Tech Stack</h1>
      <div className="tabular">
        <div>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img src={React} alt="react icon" />
          </a>
        </div>

        <div>
          <a
            href="https://www.javascript.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={JavaScript} alt="javascript icon" />
          </a>
        </div>

        <div>
          <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">
            <img src={Npm} alt="npm icon" />
          </a>
        </div>

        <div>
          <a href="https://yarnpkg.com/" target="_blank" rel="noreferrer">
            <img src={Yarn} alt="yarn icon" />
          </a>
        </div>

        <div>
          <a href="https://html.com/" target="_blank" rel="noreferrer">
            <img src={Html5} alt="html icon" />
          </a>
        </div>

        <div>
          <a
            href="https://www.w3schools.com/css/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Css3} alt="css icon" />
          </a>
        </div>

        <div>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <img src={Git} alt="git icon" />
          </a>
        </div>

        <div>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <img src={Github} alt="github icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TechStack;

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
    <>
      <h1 className="section-heading">My Tech Stack</h1>
      <div className="tabular">
        <div>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img src={React} alt="react icon" />
          </a>
          <p>
            All of the UIs I build are built with react, it is the foundation of
            my tech stack
          </p>
        </div>

        <div>
          <a
            href="https://www.javascript.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={JavaScript} alt="javascript icon" />
          </a>
          <p>I use ES6 version of JavaScript for all of my web rojects</p>
        </div>

        <div>
          <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">
            <img src={Npm} alt="npm icon" />
          </a>

          <p>
            Projects which are purely front-end projects are built using npm
          </p>
        </div>

        <div>
          <a href="https://yarnpkg.com/" target="_blank" rel="noreferrer">
            <img src={Yarn} alt="yarn icon" />
          </a>
          <p>
            For projects which require a little bit of backend, I prefer
            monorepos. These monorepos are built using yarn workspaces
          </p>
        </div>

        <div>
          <img src={Html5} alt="" />
          <p>
            Although not used in its raw format, it is unaviodable to be a
            front-end develoepr and not know HTML
          </p>
        </div>

        <div>
          <img src={Css3} alt="" />
          <p>
            There are many CSS frameworks out there, but I still prefer vanilla
            CSS. I think it is the best approach to styling the UI
          </p>
        </div>

        <div>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <img src={Git} alt="git icon" />
          </a>
          <p>
            I use the official git-scm terminal for managing my
            local-repositories
          </p>
        </div>

        <div>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <img src={Github} alt="github icon" />
          </a>
          <p>All of my repositories are hosted on Github.</p>
        </div>
      </div>
    </>
  );
}

export default TechStack;

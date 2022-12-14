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
          <img src={React} alt="" />
          <p>
            All of the UIs I build are built with react, it is the foundation of
            my tech stack
          </p>
        </div>

        <div>
          <img src={JavaScript} alt="" />
          <p>I use ES6 version of JavaScript for all of my web rojects</p>
        </div>

        <div>
          <img src={Npm} alt="" />
          <p>
            Projects which are purely front-end projects are built using npm
          </p>
        </div>

        <div>
          <img src={Yarn} alt="" />
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
          <img src={Git} alt="" />
          <p>
            I use the official git-scm terminal for managing my
            local-repositories
          </p>
        </div>

        <div>
          <img src={Github} alt="" />
          <p>All of my repositories are hosted on Github.</p>
        </div>
      </div>
    </>
  );
}

export default TechStack;
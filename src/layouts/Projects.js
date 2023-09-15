// IMPORTING ASSETS
import Folder from "../assets/folder.svg";

/**
 * Layout to render PRojects
 * @returns {HTML} - html to render projects
 */

function Projects() {
  return (
    <div id="projects">
      <h1 className="section-heading">Projects</h1>
      <div className="tabular-medium">
        <a
          href="https://github.com/divyanshchahar/e_store"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-container">
            <img src={Folder} alt="folder icon" />
            <h2 className="sub-section-heading">E-Store</h2>
            <p>
              This was my first serious react project, I intended to make a
              fully functional e-store but I soon realised it can't be done
              without knowing some backend skills. Although I improvised with
              json-server for the time being, I plan to refactor this project
              and make it my first MERN app. Since it was my first big react
              project, it has been refactored multiple times and the code looks
              a little bit messy.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;

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
          href="https://github.com/divyanshchahar/virtual_store"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-container">
            <img src={Folder} alt="folder icon" />
            <h2 className="sub-section-heading">E-Commerce App</h2>
            <p>
              E-commerce store is a cutting-edge web application developed using
              the MERN (MongoDB, Express.js, React, Node.js) stack and organized
              as a yarn monorepo for efficient code management and scalability.
              One of the standout features of this project is the robust
              authorization and authentication system, which draws inspiration
              from the OAuth 2.0 protocol and has been entirely developed
              in-house.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;

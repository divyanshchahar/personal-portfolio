import Folder from "../assets/folder.svg";

/**
 * LAyout to render PRojects
 * @returns {HTML} - html to render projects
 */

function Projects() {
  return (
    <div id="projects">
      <h1 className="section-heading">Projects</h1>
      <div className="tabular-medium">
        <a
          href="https://github.com/divyanshchahar/csscalculator"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-container">
            <img src={Folder} alt="" />
            <h2 className="sub-section-heading">CSS Calculator</h2>
            <p>
              This project has a misleading name, it is not a calculator made
              with CSS. CSS-Calcaultor is a tool to help front-end develoeprs
              write CSS code. This is the first mono-repo that I worked on. The
              front end is made with react and express is used in the back end.
            </p>
          </div>
        </a>

        <a
          href="https://github.com/divyanshchahar/job_tracking_app"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-container">
            <img src={Folder} alt="" />
            <h2 className="sub-section-heading">Appurtinity</h2>
            <p>
              It was my first react project. This is a pure front-end app
              created with the sole purpose of tracking the progress of various
              job-applications. However since code splitting was not implemented
              and the entire code was jam-packed into a single file, it soon
              became comlex and over-whelming. I plan to to refactor this
              project as a monorepo,add additional capabilities and introduce
              all the devlopement good practices.
            </p>
          </div>
        </a>

        <a
          href="https://github.com/divyanshchahar/e_store"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-container">
            <img src={Folder} alt="" />
            <h2 className="sub-section-heading">E-Store</h2>
            <p>
              This is my first serious react project, I intnded to make a fully
              functional e-store but I soon realized it can't be done without
              knowing some backend skills as well. Although I improvised with
              json-server for the time being, I plan to refactor this project
              and make it my first MERN app. Since it was my first big react
              project it has been refactored multiple times.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;

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

      {/* PROJECTS */}
      <div className="tabular-medium">
        {/* PROJECT - VIRTUAL STORE */}
        <a
          href="https://github.com/divyanshchahar/virtual_store"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-container">
            <img src={Folder} alt="folder icon" />
            <h2 className="sub-section-heading">Virtual Store</h2>
            <p>
              Virtual Store is an e-commerce app built as a yarn monorepo using
              MERN stack. Microservice architecture is implemented to provide
              authentication and authorization.
            </p>
          </div>
        </a>

        {/* PROJECT - CSS CALCULATOR*/}
        <a
          href="https://github.com/divyanshchahar/csscalculator"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-container">
            <img src={Folder} alt="folder icon" />
            <h2 className="sub-section-heading">CSS Calculator</h2>
            <p>
              Don’t be mis lead by the name, it is not a calculator made with
              CSS. CSS-Calculator is a tool to help front-end developers write
              CSS code. This is the first mono-repo that I worked on. The front
              end is made with react and express is used in the back end.
            </p>
          </div>
        </a>

        {/* PROJECT - HABIT TRACKER */}
        <a
          href="https://github.com/divyanshchahar/habit_tracker_js"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-container">
            <img src={Folder} alt="folder icon" />
            <h2 className="sub-section-heading">Habit Tracker</h2>
            <p>
              Habit Tracker is a simple web app built in JavaScript and webpack.
              As the name suggests habit tracker helps the user to keep track of
              the habits he/she wishes to keep track of. Usinng this app the
              user can program the duration (start date and end date) of the
              habits he/she wishes to pick up. Based on the user input the app
              can generate a daily to do list for the user to follow
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;

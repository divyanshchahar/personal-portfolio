// IMPORTING CUSTOM FUNCTIONALITY
import TopNavBar from "./layouts/TopNavBar";
import FrontMatter from "./components/FrontMatter";
import TechStack from "./layouts/TechStack";
import GetInTouch from "./layouts/GetInTouch";
import Projects from "./layouts/Projects";
import AboutMe from "./layouts/AboutMe";

// IMPORTING STYLESHEETS
import "./App.css";

function App() {
  return (
    <>
      <TopNavBar />
      <FrontMatter />
      <AboutMe />
      <Projects />
      <TechStack />
      <GetInTouch />
    </>
  );
}

export default App;

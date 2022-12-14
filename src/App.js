// IMPORTING CUSTOM FUNCTIONALITY
import TopNavBar from "./layouts/TopNavBar";
import FrontMatter from "./components/FrontMatter";
import TechStack from "./layouts/TechStack";

// IMPORTING STYLESHEETS
import "./App.css";

function App() {
  return (
    <>
      <TopNavBar />
      <FrontMatter />
      <TechStack />
    </>
  );
}

export default App;

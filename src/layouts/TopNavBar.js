// IMPORTING CUSTOM FUNCTIONALITY
import Branding from "../components/Branding";
import MenuButton from "../components/MenuButton";

// IMPORTING REACT FUNCTIONALITY
import { useState } from "react";
import { Link } from "react-scroll";

/**
 * Layout to render Top Navigation Bar
 * @returns {HTML} - returns HTML for top nav bar
 */
function TopNavBar() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <div className="top-nav-bar">
        <Branding />
        <MenuButton params={[isVisible, setIsVisible]} />
        <div className="nav-bar-links">
          <Link className="nav-link" to="about-me" smooth={true}>
            About Me
          </Link>

          <Link className="nav-link" to="projects" smooth={true}>
            Projects
          </Link>

          <Link className="nav-link" to="tech-stack" smooth={true}>
            Tech Stack
          </Link>

          <Link className="nav-link" to="get-in-touch" smooth={true}>
            Get in Touch
          </Link>
        </div>
      </div>

      {isVisible ? (
        <div className="nav-bar-links-mobile">
          <Link className="nav-link-mobile" to="about-me" smooth={true}>
            About Me
          </Link>

          <Link className="nav-link-mobile" to="projects" smooth={true}>
            Projects
          </Link>

          <Link className="nav-link-mobile" to="tech-stack" smooth={true}>
            Tech Stack
          </Link>

          <Link className="nav-link-mobile" to="get-in-touch" smooth={true}>
            Get in Touch
          </Link>
        </div>
      ) : null}
    </>
  );
}

export default TopNavBar;

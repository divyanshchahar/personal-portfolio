import { useState } from "react";
import Branding from "../components/Branding";
import MenuButton from "../components/MenuButton";

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
          <div className="nav-link">About Me</div>
          <div className="nav-link">Projects</div>
          <div className="nav-link">Tech Stack</div>
          <div className="nav-link">Blog</div>
          <div className="nav-link">Get in Touch</div>
        </div>
      </div>
      {isVisible ? (
        <div className="nav-bar-links-mobile">
          <div className="nav-link-mobile">About Me</div>
          <div className="nav-link-mobile">Projects</div>
          <div className="nav-link-mobile">Tech Stack</div>
          <div className="nav-link-mobile">Blog</div>
          <div className="nav-link-mobile">Get in Touch</div>
        </div>
      ) : null}
    </>
  );
}

export default TopNavBar;

//IMPORTING ASSETS
import MyPicture from "../assets/image_dp.jpeg";

// IMPORTING CUSTOM FUNCTIONALITY
import FrontMatterLinks from "../components/FrontMatterLinks";

/**
 * Function to render front matter
 * @returns {HTML} - returns HTML for rendering front matter
 */

function FrontMatter() {
  return (
    <div className="front-matter">
      <div className="front-matter-1">
        <p>Hi, My name is</p>
        <p className="text-name">Divyansh Chahar</p>
        <p>
          <span>I am a </span>{" "}
          <span className="text-front-end">MERN Stack Developer</span>
        </p>
        <FrontMatterLinks />
      </div>
      <div className="front-matter-2">
        <img src={MyPicture} alt="" />
      </div>
    </div>
  );
}

export default FrontMatter;

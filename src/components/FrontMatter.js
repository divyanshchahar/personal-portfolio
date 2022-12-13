import FrontMatterLinks from "./FrontMatterLinks";

import MyPicture from "../assets/image_dp.jpeg";

function FrontMatter() {
  return (
    <div className="front-matter">
      <div className="front-matter-1">
        <p>Hi, My name is</p>
        <p className="text-name">Divyansh Chahar</p>
        <p>
          <span>I am a </span>{" "}
          <span className="text-front-end">Front End Developer</span>
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

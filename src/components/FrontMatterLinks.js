// IMPORTING ASSETS
import LinkedInIcon from "../assets/linkedin.svg";
import TwitterIcon from "../assets/twitter.svg";
import GithubIcon from "../assets/github.svg";
import HashnodeIcon from "../assets/hashnode.svg";

/**
 * Componenet to render links(images) on the front matter
 * @returns {HTML} - HTML for rendering links(images)
 */
function FrontMatterLinks() {
  return (
    <div className="front-matter-links">
      <a
        href="https://www.linkedin.com/in/divyanshchahar/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={LinkedInIcon} alt="linked icon" />
      </a>

      <img src={TwitterIcon} alt="" />
      <img src={GithubIcon} alt="" />
      <img src={HashnodeIcon} alt="" />
    </div>
  );
}

export default FrontMatterLinks;

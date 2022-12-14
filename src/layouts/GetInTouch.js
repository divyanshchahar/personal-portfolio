import Schedule from "../assets/schedule.svg";
import Email from "../assets/email.svg";

/**
 * Function to render get in touch section
 * @returns {HTML} returns HTML to render get in touch content
 */

function GetInTouch() {
  return (
    <>
      <h1 className="section-heading">Get in Touch</h1>

      <div className="tabular-small">
        <div className="tabular-small-container">
          <div className="tabular-small-image">
            <img src={Schedule} alt="" />
          </div>
          <p>Schedule face to face appointment with me</p>
        </div>

        <div className="tabular-small-container">
          <div className="tabular-small-image">
            <img src={Email} alt="" />
          </div>
          <p>divyanshchahar@outlook.com</p>
        </div>
      </div>
    </>
  );
}

export default GetInTouch;

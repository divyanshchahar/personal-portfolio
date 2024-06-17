import styles from './AboutMeLayout.module.css';
import SectionHeadingComponent from '../components/SectionHeadingComponent';
/**
 * Function to render about me section
 * @returns {HTML} - returns html for rendering about me section
 */

function AboutMe() {
	return (
		<div id="about-me" className={styles.container}>
			<SectionHeadingComponent headingText="About Me" />

			<p>
				I have advanced degrees in aerospace engineering (Sometimes I like to
				tell people I am a rocket Scientist 🚀). I get satisfaction and joy from
				creating things, or should I say engineering solutions to a problem. I
				have been writing code from a long time either for some university
				project or just for fun. I decided to try techy things and enrolled in
				an AI/ML course and that’s how my journey with tech started. I
				discovered web development and liked it more than AI/ML. Since then I
				have been teaching myself frontend development ⚛️.
			</p>
			<br></br>
			<p>
				I have transitioned from the messy code I wrote for my side projects to
				code that is more readable and clean. I have learned to write
				docstrings, unit tests and ventured into the world of design patterns. I
				have good grasp on frontend and am starting to learn the backend stuff
				and aligning my learning path to become a MERN developer. I believe in
				small daily improvements and try to learn new things daily.
			</p>
			<br></br>
			<p>
				In my free times I love to read books 📙 or try to figure out how can I
				bring to life some batman tech. Some days its unfinished projects but
				most of the days its batman tech that gets me out of bed.
			</p>
			{/* </div> */}
		</div>
	);
}

export default AboutMe;

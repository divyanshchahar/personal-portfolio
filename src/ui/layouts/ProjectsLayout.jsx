// IMPORTING ASSETS
import SectionHeadingComponent from '../components/SectionHeadingComponent';
import ProjectCardLayout from './ProjectCardLayout';
import styles from './ProjectsLayout.module.css';

/**
 * Layout to render PRojects
 * @returns {HTML} - html to render projects
 */

const EcomChildren = () => {
	return (
		<>
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
		</>
	);
};

function Projects() {
	return (
		<div id="projects">
			<SectionHeadingComponent headingText="Project" />

			<div className={styles['flex-container']}>
				<ProjectCardLayout projectName="E-Commerce-App">
					<EcomChildren />
				</ProjectCardLayout>
			</div>
		</div>
	);
}

export default Projects;

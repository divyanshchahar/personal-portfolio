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
		<p>
			This is description. This is description. This is description. This is
			description. This is description .This is description. This is
			description. This is description. This is description. This is
			description. This is description. This is description. This is
			description. This is description. This is description .This is
			description. This is description. This is description. This is
			description. This is description. This is description. This is
			description. This is description. This is description. This is description
			.This is description. This is description. This is description. This is
			description. This is description. This is description. This is
			description. This is description. This is description. This is description
			.This is description. This is description. This is description. This is
			description. This is description. This is description. This is
			description. This is description. This is description. This is description
			.This is description. This is description. This is description. This is
			description. This is description
		</p>
	);
};

function Projects() {
	return (
		<div id="projects">
			<SectionHeadingComponent headingText="Project" />

			<div className={styles['flex-container']}>
				<ProjectCardLayout projectName="E-Commerce-App">
					{/* <p>This is description</p> */}
					<EcomChildren />
				</ProjectCardLayout>

				<ProjectCardLayout projectName="E-Commerce-App">
					{/* <p>This is description</p> */}
					<EcomChildren />
				</ProjectCardLayout>

				<ProjectCardLayout projectName="E-Commerce-App">
					{/* <p>This is description</p> */}
					<EcomChildren />
				</ProjectCardLayout>
			</div>
		</div>
	);
}

export default Projects;

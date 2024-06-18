import React from 'react';
import AboutMeLayout from '../layouts/AboutMeLayout';
import FrontMatterLayout from '../layouts/FrontMatterLayout';
import GetinTouchLayout from '../layouts/GetInTouchLayout';
import ProjectsLayout from '../layouts/ProjectsLayout';
import TechStack from '../layouts/TechStackLayout';
import TopNavBar from '../layouts/TopNavBar';
import styles from './HomePage.module.css';

function HomePage() {
	return (
		<>
			<TopNavBar />

			<div className={styles.container}>
				<FrontMatterLayout />

				<AboutMeLayout />

				<ProjectsLayout />

				<TechStack />

				<GetinTouchLayout />
			</div>
		</>
	);
}

export default HomePage;

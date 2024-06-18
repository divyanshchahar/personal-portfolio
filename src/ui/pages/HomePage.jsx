import React from 'react';
import AboutMeLayout from '../layouts/AboutMeLayout';
import FrontMatterLayout from '../layouts/FrontMatterLayout';
import GetinTouchLayout from '../layouts/GetInTouchLayout';
import ProjectsLayout from '../layouts/ProjectsLayout';
import TechStack from '../layouts/TechStackLayout';
import TopNavBarLayout from '../layouts/TopNavBarLayout';
import styles from './HomePage.module.css';

function HomePage() {
	return (
		<>
			<TopNavBarLayout />

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

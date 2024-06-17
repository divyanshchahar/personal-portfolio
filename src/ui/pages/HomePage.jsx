import React from 'react';
import TopNavBar from '../layouts/TopNavBar';
import FrontMatter from '../layouts/FrontMatter';
import AboutMe from '../layouts/AboutMe';
import Projects from '../layouts/Projects';
import TechStack from '../layouts/TechStack';
import GetinTouch from '../layouts/GetInTouch';
import styles from './HomePage.module.css';

function HomePage() {
	return (
		<>
			<TopNavBar />

			<div className={styles.container}>
				<FrontMatter />
				<AboutMe />
				<Projects />
				<TechStack />
				<GetinTouch />
			</div>
		</>
	);
}

export default HomePage;

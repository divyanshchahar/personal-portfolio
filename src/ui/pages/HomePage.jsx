import React from 'react';
import TopNavBar from '../layouts/TopNavBar';
import FrontMatter from '../layouts/FrontMatter';
import AboutMe from '../layouts/AboutMe';
import Projects from '../layouts/Projects';
import TechStack from '../layouts/TechStack';
import GetinTouch from '../layouts/GetInTouch';

function HomePage() {
	return (
		<>
			<TopNavBar />
			<FrontMatter />
			<AboutMe />
			<Projects />
			<TechStack />
			<GetinTouch />
		</>
	);
}

export default HomePage;

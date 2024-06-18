// IMPORTING ASSETS
import ReactIcon from '../../assets/react_icon.svg';
import Css3Icon from '../../assets/css3_icon.svg';
import GitIcon from '../../assets/git_icon.svg';
import Html5Icon from '../../assets/html5_icon.svg';
import JavaScriptIcon from '../../assets/javascript_icon.svg';
import NpmIcon from '../../assets/npm_icon.svg';
import YarnIcon from '../../assets/yarn_icon.svg';
import GithubIcon from '../../assets/github_icon.svg';
import IconLinkComponent from '../components/IconLinkComponent';
import SectionHeadingComponent from '../components/SectionHeadingComponent';
import styles from './TechStackLayout.module.css';

function TechStack() {
	return (
		<div id="tech-stack">
			<SectionHeadingComponent headingText="My Tech Stack" />
			<div className={styles.tabular}>
				<IconLinkComponent
					icon={ReactIcon}
					linkAddress="https://www.react.dev"
					altTag="react-webiste"
				/>

				<IconLinkComponent
					icon={JavaScriptIcon}
					linkAddress="https://www.javascript.com/"
					altTag="javascript-website"
				/>

				<IconLinkComponent
					icon={NpmIcon}
					linkAddress="https://www.npmjs.com/"
					altTag="npm-website"
				/>

				<IconLinkComponent
					icon={YarnIcon}
					linkAddress="https://yarnpkg.com/"
					altTag="yarn-website"
				/>

				<IconLinkComponent
					icon={Html5Icon}
					linkAddress="https://html.com/"
					altTag="html-website"
				/>

				<IconLinkComponent
					icon={Css3Icon}
					linkAddress="https://www.w3schools.com/css/"
					altTag="css3-website"
				/>

				<IconLinkComponent
					icon={GitIcon}
					linkAddress="https://git-scm.com/"
					altTag="git-website"
				/>

				<IconLinkComponent
					icon={GithubIcon}
					linkAddress="https://github.com/"
					altTag="github-website"
				/>
			</div>
		</div>
	);
}

export default TechStack;

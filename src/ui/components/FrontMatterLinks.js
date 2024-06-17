import GithubIcon from '../../assets/github_icon.svg';
import HashnodeIcon from '../../assets/hashnode_icon.svg';
import LinkedInIcon from '../../assets/linkedin_icon.svg';
import TwitterIcon from '../../assets/twitter_icon.svg';
import IconLinkComponent from './IconLinkComponent';

/**
 * Componenet to render links(images) on the front matter
 * @returns {HTML} - HTML for rendering links(images)
 */
function FrontMatterLinks() {
	return (
		<div className="front-matter-links">
			<IconLinkComponent
				icon={LinkedInIcon}
				linkAddress="https://www.linkedin.com/in/divyanshchahar/"
				altTag="linkedin"
			/>

			<IconLinkComponent
				icon={TwitterIcon}
				linkAddress="https://twitter.com/DivyanshChahar"
				altTag="twitter"
			/>

			<IconLinkComponent
				icon={GithubIcon}
				linkAddress="https://github.com/divyanshchahar"
				altTag="github"
			/>

			<IconLinkComponent
				icon={HashnodeIcon}
				linkAddress="https://divyanshchahar.hashnode.dev/"
				altTag="hashnode"
			/>
		</div>
	);
}

export default FrontMatterLinks;

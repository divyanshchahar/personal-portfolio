//IMPORTING ASSETS
import GithubIcon from '../../assets/github_icon.svg';
import HashnodeIcon from '../../assets/hashnode_icon.svg';
import MyPicture from '../../assets/image_dp.jpeg';
import LinkedInIcon from '../../assets/linkedin_icon.svg';
import TwitterIcon from '../../assets/twitter_icon.svg';
import AvatarComponent from '../components/AvatarComponent';
import IconLinkComponent from '../components/IconLinkComponent';
import styles from './FrontMatterLayout.module.css';

/**
 * Function to render front matter
 * @returns {HTML} - returns HTML for rendering front matter
 */

function FrontMatterLayout() {
	return (
		<div className={styles.container}>
			{/* LEFT SIDE */}
			<AvatarComponent picture={MyPicture} altTag="profile-picture" />

			{/* RIGHT SIDE */}

			<div className={styles['left-column']}>
				<p className={styles.name}>Divyansh Chahar</p>

				<p className={styles.skill}>MERN Stack Developer</p>

				{/* EXTERNAL LINKS */}

				<div className={styles['link-container']}>
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
			</div>
		</div>
	);
}

export default FrontMatterLayout;

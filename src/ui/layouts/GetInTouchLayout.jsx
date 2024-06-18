import EmailIcon from '../../assets/email_icon.svg';
import IconLinkComponent from '../components/IconLinkComponent';
import SectionHeadingComponent from '../components/SectionHeadingComponent';
import styles from './AboutMeLayout.module.css';

/**
 * Function to render get in touch section
 * @returns {HTML} returns HTML to render get in touch content
 */

function GetInTouchLayout() {
	return (
		<div id="get-in-touch" className={styles.container}>
			<SectionHeadingComponent headingText="Get in Touch" />

			<div style={{ margin: 'auto', width: 'fit-content' }}>
				<IconLinkComponent
					icon={EmailIcon}
					linkAddress="mailto:divyanshchahar@outlook.com"
					altTag="email"
				/>
			</div>
		</div>
	);
}

export default GetInTouchLayout;

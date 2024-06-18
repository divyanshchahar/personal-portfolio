import FolderIcon from '../../assets/folder.svg';
import CardHeadingComponent from '../components/CardHeadingComponent';
import styles from './ProjectCardLayout.module.css';

function ProjectCardLayout({ projectName, children }) {
	return (
		<div className={styles.container}>
			<CardHeadingComponent headingText="E-Commerce App" />
			{children}
		</div>
	);
}

export default ProjectCardLayout;

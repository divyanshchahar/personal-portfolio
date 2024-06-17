import styles from './SectionHeadingComponent.module.css';

function SectionHeadingComponent({ headingText }) {
	return <h2 className={styles.heading}>{headingText}</h2>;
}

export default SectionHeadingComponent;

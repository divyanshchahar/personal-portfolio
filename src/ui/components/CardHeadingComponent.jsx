import styles from './CardHeadingComponent.module.css';

function CardHeadingComponent({ headingText }) {
	return <h3 className={styles['card-heading']}>{headingText}</h3>;
}

export default CardHeadingComponent;

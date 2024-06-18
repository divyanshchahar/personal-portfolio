import styles from './IconButtonComponent.module.css';

/**
 * Function to render menu button
 * @param {array} args - array comprised of `stateVar` and `stateFunc` i.e. state variable and state function respectively
 * @returns
 */

function MenuButton({ icon, clickHandler = () => {} }) {
	return (
		<button className={styles.container} onClick={clickHandler}>
			<img src={icon} alt="" />
		</button>
	);
}

export default MenuButton;

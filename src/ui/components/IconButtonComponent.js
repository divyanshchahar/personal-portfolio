/**
 * Function to render menu button
 * @param {array} args - array comprised of `stateVar` and `stateFunc` i.e. state variable and state function respectively
 * @returns
 */

function MenuButton({ icon, clickHandler }) {
	return (
		<div className="menu-button" onClick={clickHandler}>
			<img src={icon} alt="" />
		</div>
	);
}

export default MenuButton;

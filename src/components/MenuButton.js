// IMPORTING ASSETS
import MenuIcon from "../assets/menu_icon.svg";

/**
 * Function to render menu button
 * @param {array} args - array comprised of `stateVar` and `stateFunc` i.e. state variable and state function respectively
 * @returns
 */

function MenuButton(args) {
  const [stateVar, stateFunc] = args.params;
  return (
    <div className="menu-button" onClick={() => stateFunc(!stateVar)}>
      <img src={MenuIcon} alt="" />
    </div>
  );
}

export default MenuButton;

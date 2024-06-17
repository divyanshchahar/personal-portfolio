import MenuIcon from '../../assets/menu_icon.svg';
import Branding from '../components/Branding';
import IconButtonComponent from '../components/IconButtonComponent';

// IMPORTING REACT FUNCTIONALITY
import { useState } from 'react';
import { Link } from 'react-scroll';

/**
 * Layout to render Top Navigation Bar
 * @returns {HTML} - returns HTML for top nav bar
 */
function TopNavBar() {
	const [isVisible, setIsVisible] = useState(false);

	const toggleDropDown = () => {
		setIsVisible(!isVisible);
	};
	return (
		<>
			<div className="top-nav-bar-container">
				<div className="top-nav-bar">
					<Branding />
					{/* <MenuButton params={[isVisible, setIsVisible]} /> */}
					<IconButtonComponent icon={MenuIcon} clickHandler={toggleDropDown} />
				</div>

				<div className="nav-bar-links">
					<Link className="nav-link" to="about-me" smooth={true} offset={-60}>
						About Me
					</Link>

					<Link className="nav-link" to="projects" smooth={true} offset={-60}>
						Projects
					</Link>

					<Link className="nav-link" to="tech-stack" smooth={true} offset={-60}>
						Tech Stack
					</Link>

					<Link
						className="nav-link"
						to="get-in-touch"
						smooth={true}
						offset={-60}
					>
						Get in Touch
					</Link>
				</div>

				{/* only for mobile */}
				{isVisible ? (
					<div className="nav-bar-links-mobile">
						<Link className="nav-link-mobile" to="about-me" smooth={true}>
							About Me
						</Link>

						<Link className="nav-link-mobile" to="projects" smooth={true}>
							Projects
						</Link>

						<Link className="nav-link-mobile" to="tech-stack" smooth={true}>
							Tech Stack
						</Link>

						<Link className="nav-link-mobile" to="get-in-touch" smooth={true}>
							Get in Touch
						</Link>
					</div>
				) : null}
			</div>
		</>
	);
}

export default TopNavBar;

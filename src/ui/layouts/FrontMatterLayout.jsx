//IMPORTING ASSETS
import MyPicture from '../../assets/image_dp.jpeg';
import AvatarComponent from '../components/AvatarComponent';

// IMPORTING CUSTOM FUNCTIONALITY
import FrontMatterLinks from '../components/FrontMatterLinks';

/**
 * Function to render front matter
 * @returns {HTML} - returns HTML for rendering front matter
 */

function FrontMatterLayout() {
	return (
		<div className="front-matter">
			<div className="front-matter-1">
				<p>Hi, My name is</p>

				<p className="text-name">Divyansh Chahar</p>

				<p>
					<span>I am a </span>

					<span className="text-front-end">MERN Stack Developer</span>
				</p>

				<FrontMatterLinks />
			</div>

			<AvatarComponent picture={MyPicture} altTag="profile-picture" />
		</div>
	);
}

export default FrontMatterLayout;

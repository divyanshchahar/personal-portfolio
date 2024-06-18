import React from 'react';

function IconLinkComponent({ linkAddress, icon, altTag }) {
	return (
		<a href={linkAddress}>
			<img src={icon} alt={altTag} />
		</a>
	);
}

export default IconLinkComponent;

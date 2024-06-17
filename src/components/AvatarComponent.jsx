import style from './AvatarComponent.module.css';

function AvatarComponent({ picture, altTag = '' }) {
	return (
		<div className={style.container}>
			<img src={picture} alt={altTag} />
		</div>
	);
}

export default AvatarComponent;

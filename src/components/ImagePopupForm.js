import React from 'react';

function ImagePopupForm(props) {

	return (
		<div className= "popup popup_type_image popup__open">
			<figure className="popup__container popup__container_image">
				<button className="popup__close popup__close_image" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
				<img className="popup__img" src={props.link} alt={`Изображение места: ${props.link}`}/>
				<figcaption className="popup__caption"></figcaption>
			</figure>
		</div>
	);
}

export default ImagePopupForm;
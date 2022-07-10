import React from 'react';

function ImagePopupForm({onClose, initialCards}) {
	return (
		<div className= "popup popup_type_image popup__open">
			{initialCards.map((itm) => (
				<figure className="popup__container popup__container_image">
					<button className="popup__close popup__close_image" type="button" aria-label="Закрыть" 
					//вешаем слушетель на кнопку который вызывает функцию onClose из props она в свою очередь закрывает popup
					onClick={onClose}></button>
					<img className="popup__img" src={initialCards} alt={`Изображение места: ${initialCards.link}`}/>
					<figcaption className="popup__caption"></figcaption>
				</figure>
			))}
		</div>
	);
}

export default ImagePopupForm;
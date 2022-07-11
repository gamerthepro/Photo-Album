import React from 'react';

function ImagePopupCommentForm({onClose, items}) {

	return (
		<div className= "popup popup_type_image popup__open">
			{items.map((items) => (
				<figure className="popup__container popup__container_image">
					<button className="popup__close popup__close_image" type="button" aria-label="Закрыть" 
					//вешаем слушетель на кнопку который вызывает функцию onClose из props она в свою очередь закрывает popup
					onClick={onClose}></button>
					<img className="popup__img" src={items.link} alt={`Изображение места: ${items.link}`}/>
					<figcaption className="popup__caption"></figcaption>
				</figure>
			))}
		</div>
	);
}

export default ImagePopupCommentForm;
import React from 'react';

function ImagePopupCommentForm({onClose, items}) {
	//при помощи хука useState передаем данные из input в title
	const [addComment, setAddComment] = React.useState('')

	const onChangeComment = (event) => {
		setAddComment(event.target.value)
	}

	return (
		<div className= "popup popup_type_image popup__open">
			{items.map((items) => (
				<figure key={items.link} className="popup__container popup__container_image">
					<button className="popup__close popup__close_image" type="button" aria-label="Закрыть" 
					//вешаем слушетель на кнопку который вызывает функцию onClose из props она в свою очередь закрывает popup
					onClick={onClose}></button>
					<img className="popup__img" src={items.link} alt={`Изображение места: ${items.link}`}/>
					<div className="popup__comment">
						<title className="popup__title">{addComment}</title>
						<input className="popup__input" onChange={onChangeComment}></input>
					</div>
				</figure>
			))}
		</div>
	);
}

export default ImagePopupCommentForm;
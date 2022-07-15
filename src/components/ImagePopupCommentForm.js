import React from 'react';

function ImagePopupCommentForm({onClose, items}) {
	//при помощи хука передаем данные из input в title
	const [showComment, setShowComment] = React.useState('')



	// отправляем данные на сервер
	React.useEffect(() => {
		commitPush(showComment)
	}, []);

	const commitPush = (showComment) => {
		if (showComment !== '') {
			fetch("https://62c81bb08c90491c2caeccc3.mockapi.io/comments", {
				method: 'POST', // нужно указать метод запроса
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({comment: showComment})
			})
			.then(res => {
				res.json(showComment);
			})
		}
	}

	const buttonClick = (e) => {
		e.preventDefault(e);
		commitPush();
	}

	const onInputChange = (e) => {
		setShowComment(e.target.value)
	}

	return (
		<div className= "popup popup_type_image popup__open">
			{items.map((items) => (
				<div key={items.link} className="popup__container popup__container_image">
					<button className="popup__close popup__close_image" type="button" aria-label="Закрыть" 
					//вешаем слушетель на кнопку который вызывает функцию onClose из props она в свою очередь закрывает popup
					onClick={onClose}></button>
					<img className="popup__img" src={items.link} alt={`Изображение места: ${items.link}`}/>
					<div className="popup__comment">
						<title className="popup__title"></title>
						<input className="popup__input" 
						type="text" 
						minLength="0"
						maxLength="500"
						autoComplete="off"
						name="Comment"
						placeholder="добавить коментарий"
						noValidate
						required
						onChange={onInputChange}
						></input>
						<div className="popup__buttons">
							<button className="popup__button popup__button_cancel">отменить</button>
							<button className="popup__button popup__button_add" onClick={buttonClick}>добавить</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default ImagePopupCommentForm;
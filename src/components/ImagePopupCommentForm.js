import React from 'react';

function ImagePopupCommentForm({onClose, items}) {
	//При помощи этого хука передаём данные на сервер
	const [onComment, setOnComment] = React.useState([])

	//при помощи этого хука передаём данные(комментарии) в Doom
	// const [showComments, setShowComments] = React.useState([])

	React.useEffect(() => {
		commitPush()// отправляем данные на сервер
		// commitAdd()
	}, []);

	

	const commitPush = (onComment) => {
		if (onComment !== '') {
			fetch("https://62c81bb08c90491c2caeccc3.mockapi.io/comments", {
				method: 'POST', // нужно указать метод запроса
				headers: { "Content-Type": "application/json" },//указываем в каком виде досжна выглядеть структура данных
				body: JSON.stringify(onComment)//переводим JSON формат в строку(так как всее данные по API запросам отправляються в JSON формате)
			})
			.then(res => {
				if (res.ok) {
					return res.json(onComment);
				} return console.log('данные не отправились на сервер')//улавливаем ошибку если данные не отправились на сервер
			})
		}
	}

	// const commitAdd = () => {
	// 	fetch("https://62c81bb08c90491c2caeccc3.mockapi.io/comments")
	// 		.then((res) => {
	// 			return res.json();
	// 		})
	// 		.then((json) =>{
	// 			setShowComments(json)
	// 			console.log(json)
	// 		});
	// }

	//слушатель кнопки "отправить" на клик
	const buttonClick = (e) => {
		e.preventDefault(e);
		commitPush(onComment);
		// commitAdd()
		setOnComment([{}])//очищаем input (value)
	}

	//передаём value(данные из input) в 
	const onInputChange = (e) => {
		setOnComment([{
			comment: e.target.value,
			key: e.target.id
		}])
	}

	return (
		<div className= "popup popup_type_image popup__open">
			{items.map((items) => (
				<div key={items.link} className="popup__container popup__container_image">
					<button className="popup__close popup__close_image" type="button" aria-label="Закрыть" 
					//вешаем слушетель на кнопку который вызывает функцию onClose из props она в свою очередь закрывает popup
					onClick={onClose}></button>
					<img className="popup__img" src={items.link} alt={`Изображение места: ${items.link}`}/>
					<div className="popup__form">
						<ul className="popup__title">
							<li className="popup__title"></li>
						</ul>
						<input className="popup__input" 
						type="text" 
						id={items.link}
						minLength="0"
						maxLength="500"
						autoComplete="off"
						name="Comment"
						placeholder="добавить коментарий"
						noValidate
						required
						value={Object.comment}
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
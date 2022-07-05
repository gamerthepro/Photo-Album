import React from 'react';
import { initialCards } from './utils/Initial-сards'

class Card extends React.Component {
	constructor(props) {
		super(props);
		this._coment = props.coment;
		this._link = props.link;
	}
	_getTemplate() {
		const cardElement = document.querySelector('.element-cards').content.querySelector('.element').cloneNode(true);
		
		return cardElement;
	}
	generateCard() {
		// Запишем разметку в приватное поле _element. 
		// Так у других элементов появится доступ к ней.
		this._element = this._getTemplate();
	
		// Добавим данные
		this._element.querySelector('.element__image').src = this._link;
		this._element.querySelector('.element__title').textContent = this._coment;
		
		// Вернём элемент наружу
		return this._element;
	} 
}

initialCards.forEach((item) => {

	// Создадим экземпляр карточки
	const card = new Card(item.link, item.coment);

	// Создаём карточку и возвращаем наружу
	const cardElement = card.generateCard();
	
	// Добавляем в DOM
	document.querySelector('.elements__contener').append(cardElement);

	return(
		<section className='element-cards'>
			<li className='element'>
				<img className='element__image' src='https://images.unsplash.com/photo-1536755017284-ad9a59d7e957?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9yayUyMG5pZ2h0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='Фото в ленте mesto'/>
				<div className='element__block'>
					<h2 className='element__title'>
					</h2>
				</div>
			</li>
		</section>
	)
}); 


export default Card; 
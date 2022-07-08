import React from 'react';
import Card from './Card';
// import { initialCards } from './utils/Initial-сards' //Локальная база данных

function Main(props) {
	//при помощи хука useState передаем данные в компонент Cards
	const [initialCards, isInitialCards] = React.useState([])

	//используем конструкцию React.useEffect(() => {запрос на сервер}, []); - что бы запрос выполнялся один.
	React.useEffect(() => {
		fetch("https://62c81bb08c90491c2caeccc3.mockapi.io/initialCards")
			.then((res) => {
				return res.json();
			})
			.then((json) =>{
				isInitialCards(json)
			});
	}, []);

	return (
		<body className='page'>
			<div className='page__container'>
				<main className='content page__content'>
					<div className='elements'>
						<ul className='elements__contener' onClick={props.onClickCard}>
						{initialCards.map((itm) => (
							<Card
							//прокидываем данные в Card при помощи props
							link={itm.link}		
							/>))}
						</ul>
					</div>
				</main>
			</div>
		</body>
	);
}

export default Main;
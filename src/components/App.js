import React from 'react';	
import ImagePopupForm from './ImagePopupForm';
import Card from './Card';
// import { initialCards } from './utils/Initial-сards' //Локальная база данных

function App() {
	//при помощи хука useState передаем данные в компонент Cards
	const [initialCards, isInitialCards] = React.useState([])

	//при помощи хука useState передаем данные (false) или (true)
	const [popupOpen, isPopupOpen] = React.useState(false);

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
						<ul className='elements__contener' >
						{initialCards.map((itm) => (
							<Card
							//прокидываем данные в Card при помощи props
							link={itm.link}	
							onClickCard={() => isPopupOpen(true)}	
							/>))}
						</ul>
					</div>
				</main>
			</div>
			{
			//задаем условие при котором будет открываться или закрываться popup в зависимости от состояния хука useState
			popupOpen ? <ImagePopupForm
			initialCards={initialCards}
			onClose={() =>  isPopupOpen(false)}
			/> : null
			}
		</body>
	);
}

export default App;
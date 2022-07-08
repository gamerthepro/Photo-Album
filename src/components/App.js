import React from 'react';
import Main from './Main';
import ImagePopupForm from './ImagePopupForm';

function App() {
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

	//при помощи хука useState передаем данные (false) или (true)
	const [popupOpen, isPopupOpen] = React.useState(false);

	return (
		<>
		<Main
			initialCards={initialCards}
			onClickCard={() => isPopupOpen(true)}
		/>
		{
		//задаем условие при котором будет открываться или закрываться popup в зависимости от состояния хука useState
		popupOpen ? <ImagePopupForm
			initialCards={initialCards}
			onClose={() =>  isPopupOpen(false)}
		/> : null
		}
		</>
	)
}

export default App;
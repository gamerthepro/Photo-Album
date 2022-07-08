import React from 'react';
import Main from './Main';
import ImagePopupForm from './ImagePopupForm';

function App() {
	//при помощи хука useState передаем данные (false) или (true)
	const [popupOpen, isPopupOpen] = React.useState(false);

	return (
		<>
		<Main
			onClickCard={() => isPopupOpen(true)}
		/>
		{
		//задаем условие при котором будет открываться или закрываться popup в зависимости от состояния хука useState
		popupOpen ? <ImagePopupForm
			onClose={() =>  isPopupOpen(false)}
		/> : null
		}
		</>
	)
}

export default App;
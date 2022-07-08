import React from 'react';
import Main from './Main';
import ImagePopupForm from './ImagePopupForm';

function App() {
	const [popupOpen, isPopupOpen] = React.useState(false);

	return (
		<>
		<Main
			onClickCard={() => isPopupOpen(true)}
		/>
		{popupOpen ? <ImagePopupForm
			onClose={() =>  isPopupOpen(false)}
		/> : null
		}
		</>
	)
}

export default App;
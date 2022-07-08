import React from 'react';
import Card from './Card';
// import { initialCards } from './utils/Initial-сards'

function Main(props) {
	const [initialCards, isInitialCards] = React.useState([])
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
import React from 'react';
import Card from './Card';
import { initialCards } from './utils/Initial-сards'

function Main() {
	return (
		<body className='page'>
			<div className='page__container'>
				<main className='content page__content'>
					<div className='elements'>
						<ul className='elements__contener'>
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
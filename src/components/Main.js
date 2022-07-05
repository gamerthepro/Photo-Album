import React from 'react';
import Card from './Card';

function Main(props) {
	return (
		<body className='page'>
			<div className='page__container'>
				<main className='content page__content'>
					<div className='elements'>
						<ul className='elements__contener'>
						{props.cards.map(item =>
							<Card/>)}
						</ul>
					</div>
				</main>
			</div>
		</body>
	);
}

export default Main;
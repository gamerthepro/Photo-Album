import React from 'react';

function Card(props) {
	return(
		<section className='element-cards'>
			<li className='element'>
				<img className='element__image' src={props.link} alt='картинка'/>
				<div className='element__block'>
					<h2 className='element__title'>{props.coment}
					</h2>
				</div>
			</li>
		</section>
	)
}; 


export default Card; 
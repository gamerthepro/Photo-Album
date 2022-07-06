import React from 'react';

function Card(props) {
	return(
		<section className='element-cards'>
			<li className='element'>
				<img className='element__image' src={props.link} alt='картинка'/>
			</li>
		</section>
	)
}; 


export default Card; 
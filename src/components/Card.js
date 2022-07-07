import React from 'react';

function Card(props) {
	const [isAdd, setIsAdd] = React.useState(false);

	const onClickLike = () => setIsAdd(!isAdd);
	
	return(
		<section className='element-cards'>
			<li className='element'>
				<img className='element__image' src={props.link} alt='картинка'/>
				<div onClick={onClickLike} className={isAdd ? 'element__like element__like_on' : 'element__like element__like_off'}></div>
			</li>
		</section>
	)
}; 


export default Card; 
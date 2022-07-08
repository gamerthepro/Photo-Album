import React from 'react';

function Card(props) {
	//при помощи хука useState передаем данные (false) или (true)
	const [isAdd, setIsAdd] = React.useState(false);

	const onClickLike = () => setIsAdd(!isAdd);
	
	return(
		<section className='element-cards'>
			<li className='element'>
				<img className='element__image' 
				//вытаскиваем данные из props
				src={props.link} alt='картинка'/>
				<div onClick={onClickLike} 
				//в зависимости от состояния хука useState присваиваем соответсвующую картинку(Like)
				className={isAdd ? 'element__like element__like_on' : 'element__like element__like_off'}></div>
			</li>
		</section>
	)
}; 


export default Card; 
import React from 'react';

function Card({link, onClickCard}) {
	//при помощи хука useState передаем данные (false) или (true)
	const [isAdd, setIsAdd] = React.useState(false);

	const onClickLike = () => setIsAdd(!isAdd);
	
	const handleClick = () => {
		onClickCard({link})
	}

	return(
		<section className='element-cards'>
			<li className='element'>
				<img className='element__image'
				//открываем Popup при нажатии на картинку
				onClick={handleClick}
				//вытаскиваем данные из props
				src={link} alt='картинка'/>
				<ul className='elements__card'>
					<li className='element__comments'/>
					<li 
					//в зависимости от состояния хука useState присваиваем соответсвующую картинку(Like) 
					onClick={onClickLike} className={isAdd ? 'element__like element__like_on' : 'element__like element__like_off'}/>
				</ul>
			</li>
		</section>
	)
}; 


export default Card; 
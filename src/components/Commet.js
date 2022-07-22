import React from 'react';

function Comment({comment, key}) {
	console.log(comment)

	return (
		<section className='comment'>
			<title className='comment__title'>
			{comment}
			</title>
		</section>
	)
}

export default Comment;
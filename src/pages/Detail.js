import React from 'react';

const Detail = ({ isAnouncement }) => {
	return (
		<main
			className={`container container-main ${isAnouncement ? 'isAnounce' : ''}`}
		>
			<div>detail</div>;
		</main>
	);
};

export default Detail;

import React from 'react';
import { Container } from 'react-bootstrap';
import './../styles/pages-styles/NotFoundPage.css';

const NotFoundPage = () => {
	return (
		<div className="NotFoundPage">
			<Container className="text-center mt-5">
				<div className="not-found-title">404</div>
				<div className="not-found-sub-title pb-5">Страница не найдена</div>
			</Container>
		</div>
	);
};

export default NotFoundPage;

import React from 'react';
import OrderSubmission from '../components/order_submission/OrderSubmission';

// -------Вынес всю логику в отдельный компонент (папка components) (саму логику нужно будет дописать как будет готов эндпоинт на бэке)----------------

const OrderSubmissionPage = () => {
	return (
		<div className="OrderSubmission">
			<OrderSubmission />
		</div>
	);
};

export default OrderSubmissionPage;

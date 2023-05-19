import React from 'react';
import OrderSubmission from '../components/order_submission/OrderSubmission';
import { isOrderSending } from '../hooks/IsLoggedIn';
import OrderSubmissionSuccess from '../components/order_submission/OrderSubmissionSuccess';

// -------Вынес всю логику в отдельный компонент (папка components) (саму логику нужно будет дописать как будет готов эндпоинт на бэке)----------------

const OrderSubmissionPage = () => {
	const isOrderSend = !!isOrderSending();

	return <div>{isOrderSend ? <OrderSubmissionSuccess /> : <OrderSubmission />}</div>;
};

export default OrderSubmissionPage;

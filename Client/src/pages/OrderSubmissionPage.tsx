import React from 'react';
import OrderSubmission from '../components/order_submission/OrderSubmission';
import { isOrderSending } from '../hooks/IsLoggedIn';
import OrderSubmissionSuccess from '../components/order_submission/OrderSubmissionSuccess';

const OrderSubmissionPage = () => {
	const isOrderSend = !!isOrderSending();

	return <div>{isOrderSend ? <OrderSubmissionSuccess /> : <OrderSubmission />}</div>;
};

export default OrderSubmissionPage;

import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { isOrderSending } from '../../hooks/IsLoggedIn';

const OrderSubmissionSuccess = () => {
	const isOrderSend = isOrderSending();
	// const styles = {
	// 	color: 'red'
	// };
	return (
		<Container className="text-center pt-5">
			<Row className="mb-3">
				<h3>Вы успешно отправили заказ!</h3>
			</Row>
			<Row>
				<h4>
					Ваш номер отслеживания: <span className="text-danger">{isOrderSend}</span>
				</h4>
			</Row>
		</Container>
	);
};

export default OrderSubmissionSuccess;

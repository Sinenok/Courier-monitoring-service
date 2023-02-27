import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import OrderTitle from './Order';
import OrderInfo from './OrderInfo';
import OrderList from './OrderList';
import CourierTrackingMap from './CourierTrackingMap';

function Body() {
	// postOrderInfo property:
	const sender = 'Название магазина';
	const recipient = 'ФИО клиента';
	const deliveryAddress = 'Адрес доставки';
	const plannedDeliveryDate = 'Дата доставки';
	const amountPayable = 'Цена покупки';
	const paymentMethod = 'Карта/наличные';

	// OrderList property
	const quantityProducts = 1;
	const productDescription = 'Описание товара';
	const shippingCost = 'Цена';
	const totalPrice = 'Цена товара + дотставки';
	return (
		<Container className="py-3">
			<Row className="justify-content-center mb-3">
				<Col md="10" className="p-0">
					<OrderTitle />
				</Col>
			</Row>
			<Row className="justify-content-center mb-3">
				<Col md="5" className="p-0 me-1">
					<OrderInfo
						postOrderInfo={{
							sender: `${sender}`,
							recipient: `${recipient}`,
							deliveryAddress: `${deliveryAddress}`,
							plannedDeliveryDate: `${plannedDeliveryDate}`,
							amountPayable: `${amountPayable}`,
							paymentMethod: `${paymentMethod}`
						}}
					/>
				</Col>
				<Col md="5" className="p-0">
					<OrderList
						postOrderList={{
							quantity: `${quantityProducts} товар(а/ов)`,
							description: `${productDescription}`,
							shippingCost: `${shippingCost}`,
							totalPrice: `${totalPrice}`
						}}
					/>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col md="10" className="p-0">
					<CourierTrackingMap />
				</Col>
			</Row>
		</Container>
	);
}

export default Body;

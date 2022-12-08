import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Order from './Order';
import OrderInfo from './OrderInfo';
import OrderList from './OrderList';
import Map from './Map';
import ExampleRestApi from './ExampleRestApi';

function Body() {
	// type postType = {
	// 	Sender: string;
	// 	Recipient: string;
	// 	DeliveryAddress: string;
	// 	PlannedDeliveryDate: string;
	// 	AmountPayable: string;
	// 	PaymentMethod: string;
	// };
	return (
		<Container className="py-3">
			<Row className="justify-content-center mb-3">
				<Col md="10" className="p-0">
					<Order />
				</Col>
			</Row>
			<Row className="justify-content-center mb-3">
				<Col md="5" className="p-0 me-1">
					<OrderInfo
						post={{
							Sender: 'Название магазина',
							Recipient: 'ФИО клиента',
							DeliveryAddress: 'Адрес',
							PlannedDeliveryDate: 'Дата',
							AmountPayable: 'Цена покупки',
							PaymentMethod: 'Карта/нал'
						}}
					/>
				</Col>
				<Col md="5" className="p-0">
					<OrderList
						post2={{
							Quantity: '1 товар',
							Description: 'Описание товара',
							ShippingCost: 'Цена',
							TotalPrice: 'Цена товара + дотсавки'
						}}
					/>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col md="10" className="p-0">
					<Map />
				</Col>
			</Row>
			<ExampleRestApi />
		</Container>
	);
}

export default Body;

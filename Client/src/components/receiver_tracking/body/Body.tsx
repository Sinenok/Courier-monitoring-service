import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import OrderTitle from './../OrderTitle';
import OrderInfo from './../OrderInfo';
import OrderList from './../OrderList';
import CourierTrackingMap from './../courier_tracking_map/CourierTrackingMap';
import { getsOrderInfo } from '../../../hooks/IsLoggedIn';
import { IOrderInfo, IOrderList, IOrderMap, IOrderTitle } from './types';

function Body() {
	const isOrderInfoIn = getsOrderInfo();

	const orderInfo: IOrderInfo = {
		sender: isOrderInfoIn.senderName,
		senderAddress: isOrderInfoIn.senderAddress,
		recipient: isOrderInfoIn.receiverName,
		deliveryAddress: isOrderInfoIn.receiverAddress,
		plannedDeliveryDate: 'Дата доставки',
		shippingCost: isOrderInfoIn.deliveryCost,
		paymentMethod: isOrderInfoIn.paymentMethod
	};

	const orderList: IOrderList = {
		productWeight: isOrderInfoIn.productWeight,
		productDescription: isOrderInfoIn.productDescription,
		amountPayable: isOrderInfoIn.productCost,
		totalPrice: isOrderInfoIn.deliveryCost + isOrderInfoIn.productCost
	};

	const orderTitle: IOrderTitle = {
		orderStatus: isOrderInfoIn.orderStatus
	};
	const orderMap: IOrderMap = {
		trackNumber: isOrderInfoIn.trackNumber,
		orderStatus: isOrderInfoIn.orderStatus
	};
	return (
		<Container className="py-3">
			<Row className="justify-content-center mb-3">
				<Col md="10" className="p-0">
					<OrderTitle {...orderTitle} />
				</Col>
			</Row>
			<Row className="justify-content-center mb-3">
				<Col md="5" className="p-0 me-1">
					<OrderInfo {...orderInfo} />
				</Col>
				<Col md="5" className="p-0">
					<OrderList {...orderList} />
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col md="10" className="p-0">
					<CourierTrackingMap {...orderMap} />
				</Col>
			</Row>
		</Container>
	);
}

export default Body;

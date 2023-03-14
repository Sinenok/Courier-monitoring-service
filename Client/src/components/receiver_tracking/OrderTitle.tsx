import React, { FC } from 'react';
import { Row, Card, Button } from 'react-bootstrap';
import { IOrderTitle } from './body/types';

const OrderTitle: FC<IOrderTitle> = ({ orderNumber, orderStatus }) => (
	<Card className="text-center bg-light">
		<Card.Header as="h4">
			Заказ №{' '}
			<a className="text-danger" href="#OrderNumber">
				{orderNumber}
			</a>
			. Статус доставки{' '}
			<a className="text-danger" href="#OrderStatus">
				{orderStatus}
			</a>
		</Card.Header>
		<Card.Body>
			<Row className="col-11 gy-3 m-auto mb-3">
				<Button variant="secondary">Помощь</Button>
				<Button variant="secondary">Оценка доставки</Button>
				<Button variant="secondary">Информация о курьере</Button>
			</Row>
		</Card.Body>
	</Card>
);

export default OrderTitle;

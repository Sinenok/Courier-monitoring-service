import React, { FC } from 'react';
import { Row, Card, Button } from 'react-bootstrap';
import { IOrderTitle } from './body/types';

const OrderTitle: FC<IOrderTitle> = ({ orderStatus }) => (
	<Card className="text-center bg-light">
		<Card.Header as="h4">
			Статус заказа:{' '}
			<span className="text-danger">
				{orderStatus === 0 ? (
					<span>Создан</span>
				) : orderStatus === 1 ? (
					<span>Принят курьером</span>
				) : orderStatus === 2 ? (
					<span>Выполняется</span>
				) : (
					<span>Завершен</span>
				)}
			</span>
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

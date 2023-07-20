import React, { FC, useState } from 'react';
import { Row, Card, Button } from 'react-bootstrap';
import { IOrderTitle } from './body/types';
import Popup from '../popup/Popup';
import './../../styles/component-styles/receiver-tracking-styles/OrderTitle.css';

const OrderTitle: FC<IOrderTitle> = ({ orderStatus }) => {
	const [showPopup, setShowPopup] = useState(false);

	const togglePopup = () => {
		setShowPopup(!showPopup);
	};
	return (
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
					<Button onClick={togglePopup} variant="secondary" disabled={orderStatus !== 3}>
						{' '}
						Оценка доставки
					</Button>
					<Popup show={showPopup} handleClose={togglePopup} />
					{/* <Button variant="secondary">Информация о курьере</Button> */}
				</Row>
			</Card.Body>
		</Card>
	);
};

export default OrderTitle;

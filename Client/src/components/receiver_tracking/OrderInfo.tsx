import React from 'react';
import { Card } from 'react-bootstrap';

const OrderInfo = (props: any) => {
	return (
		<Card className="bg-light">
			<Card.Header className="text-center" as="h4">
				Информация о заказе
			</Card.Header>
			<Card.Body>
				<Card.Text>
					Отправитель:{' '}
					<a className="text-primary" href="#">
						{props.postOrderInfo.sender}
					</a>
				</Card.Text>
				<Card.Text>
					Получатель:{' '}
					<a className="text-primary" href="#">
						{props.postOrderInfo.recipient}
					</a>
				</Card.Text>
				<Card.Text>
					Адрес доставки:{' '}
					<a className="text-primary" href="#">
						{props.postOrderInfo.deliveryAddress}
					</a>
				</Card.Text>
				<Card.Text>
					Плановая дата доставки:{' '}
					<a className="text-primary" href="#">
						{props.postOrderInfo.plannedDeliveryDate}
					</a>
				</Card.Text>
				<Card.Text>
					Сумма к оплате:{' '}
					<a className="text-primary" href="#">
						{props.postOrderInfo.amountPayable}
					</a>
				</Card.Text>
				<Card.Text>
					Способ оплаты:{' '}
					<a className="text-primary" href="#">
						{props.postOrderInfo.paymentMethod}
					</a>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default OrderInfo;

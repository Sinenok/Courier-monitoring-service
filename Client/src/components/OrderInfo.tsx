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
						{props.post.Sender}
					</a>
				</Card.Text>
				<Card.Text>
					Получатель:{' '}
					<a className="text-primary" href="#">
						{props.post.Recipient}
					</a>
				</Card.Text>
				<Card.Text>
					Адрес доставки:{' '}
					<a className="text-primary" href="#">
						{props.post.DeliveryAddress}
					</a>
				</Card.Text>
				<Card.Text>
					Плановая дата доставки:{' '}
					<a className="text-primary" href="#">
						{props.post.PlannedDeliveryDate}
					</a>
				</Card.Text>
				<Card.Text>
					Сумма к оплате:{' '}
					<a className="text-primary" href="#">
						{props.post.AmountPayable}
					</a>
				</Card.Text>
				<Card.Text>
					Способ оплаты:{' '}
					<a className="text-primary" href="#">
						{props.post.PaymentMethod}
					</a>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default OrderInfo;

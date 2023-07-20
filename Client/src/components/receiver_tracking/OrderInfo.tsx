import React, { FC } from 'react';
import { Card } from 'react-bootstrap';
import { IOrderInfo } from './body/types';

const OrderInfo: FC<IOrderInfo> = ({
	sender,
	senderAddress,
	recipient,
	deliveryAddress,
	plannedDeliveryDate,
	shippingCost,
	paymentMethod
}) => (
	<Card className="bg-light h-100">
		<Card.Header className="text-center" as="h4">
			Информация о заказе
		</Card.Header>
		<Card.Body>
			<Card.Text>
				Отправитель: <span className="text-primary">{sender}</span>
			</Card.Text>
			<Card.Text>
				Адрес отправителя: <span className="text-primary">{senderAddress}</span>
			</Card.Text>
			<Card.Text>
				Получатель: <span className="text-primary">{recipient}</span>
			</Card.Text>
			<Card.Text>
				Адрес доставки: <span className="text-primary">{deliveryAddress}</span>
			</Card.Text>
			<Card.Text>
				Плановая дата доставки: <span className="text-primary">{plannedDeliveryDate}</span>
			</Card.Text>
			<Card.Text>
				Стоимость доставки: <span className="text-primary">{shippingCost} рублей</span>
			</Card.Text>
			<Card.Text>
				Способ оплаты:{' '}
				<span className="text-primary">
					{paymentMethod === 0 ? (
						<span>Наличные</span>
					) : paymentMethod === 1 ? (
						<span>Карта</span>
					) : (
						<span>Онлайн</span>
					)}
				</span>
			</Card.Text>
		</Card.Body>
	</Card>
);

export default OrderInfo;

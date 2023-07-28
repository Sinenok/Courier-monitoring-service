import React, { FC } from 'react';
import { Card } from 'react-bootstrap';
import { IOrderInfo } from './body/types';
import HighlightedText from '../courier/orders_taken/HighlightedText';
import { getPaymentMethodName } from '../render_profile/behavior';

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
				Отправитель: <HighlightedText text={sender} />
			</Card.Text>
			<Card.Text>
				Адрес отправителя: <HighlightedText text={senderAddress} />
			</Card.Text>
			<Card.Text>
				Получатель: <HighlightedText text={recipient} />
			</Card.Text>
			<Card.Text>
				Адрес доставки: <HighlightedText text={deliveryAddress} />
			</Card.Text>
			<Card.Text>
				Плановая дата доставки: <HighlightedText text={plannedDeliveryDate} />
			</Card.Text>
			<Card.Text>
				Стоимость доставки: <HighlightedText text={`${shippingCost} руб`} />
			</Card.Text>
			<Card.Text>
				Способ оплаты: <HighlightedText text={getPaymentMethodName(paymentMethod)} />
			</Card.Text>
		</Card.Body>
	</Card>
);

export default OrderInfo;

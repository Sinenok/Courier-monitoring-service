import React, { FC } from 'react';
import { Card } from 'react-bootstrap';
import { IOrderInfo } from './body/types';

/**
 * Использование any перечёркивает все плюсы тайпскрипта
 *
 * Чтобы не писать props.postOrderInfo.sender, props.postOrderInfo.recipient,
 *  можно воспользоваться деструктуризацией (но полноценно это будет работать, только если убрать any и заменить настоящим типом)
 *
 *  Переписал компонент
 * -------------------------------------------------ИСПРАВЛЕНО---------------------------------------------------------------------------------
 */

const OrderInfo: FC<IOrderInfo> = ({
	sender,
	recipient,
	deliveryAddress,
	plannedDeliveryDate,
	amountPayable,
	paymentMethod
}) => (
	<Card className="bg-light">
		<Card.Header className="text-center" as="h4">
			Информация о заказе
		</Card.Header>
		<Card.Body>
			<Card.Text>
				Отправитель:{' '}
				<a className="text-primary" href="#">
					{sender}
				</a>
			</Card.Text>
			<Card.Text>
				Получатель:{' '}
				<a className="text-primary" href="#">
					{recipient}
				</a>
			</Card.Text>
			<Card.Text>
				Адрес доставки:{' '}
				<a className="text-primary" href="#">
					{deliveryAddress}
				</a>
			</Card.Text>
			<Card.Text>
				Плановая дата доставки:{' '}
				<a className="text-primary" href="#">
					{plannedDeliveryDate}
				</a>
			</Card.Text>
			<Card.Text>
				Сумма к оплате:{' '}
				<a className="text-primary" href="#">
					{amountPayable}
				</a>
			</Card.Text>
			<Card.Text>
				Способ оплаты:{' '}
				<a className="text-primary" href="#">
					{paymentMethod}
				</a>
			</Card.Text>
		</Card.Body>
	</Card>
);

export default OrderInfo;

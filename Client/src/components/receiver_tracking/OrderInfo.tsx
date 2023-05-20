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
				Отправитель:{' '}
				<a className="text-primary" href="#">
					{sender}
				</a>
			</Card.Text>
			<Card.Text>
				Адрес отправителя:{' '}
				<a className="text-primary" href="#">
					{senderAddress}
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
				Стоимость доставки:{' '}
				<a className="text-primary" href="#">
					{shippingCost} рублей
				</a>
			</Card.Text>
			<Card.Text>
				Способ оплаты:{' '}
				<a className="text-primary" href="#">
					{paymentMethod === 0 ? (
						<span>Наличные</span>
					) : paymentMethod === 1 ? (
						<span>Карта</span>
					) : (
						<span>Онлайн</span>
					)}
				</a>
			</Card.Text>
		</Card.Body>
	</Card>
);

export default OrderInfo;

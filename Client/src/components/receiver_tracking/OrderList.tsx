import React, { FC } from 'react';
import { Card } from 'react-bootstrap';
import { IOrderList } from './body/types';

/**
 * props.postOrderList можно деструктуризировать - ИСПРАВЛЕНО
 */

const OrderList: FC<IOrderList> = ({
	productWeight,
	productDescription,
	amountPayable,
	totalPrice
}) => (
	<Card className="h-100 bg-light">
		<Card.Header className="text-center" as="h4">
			Состав заказа
		</Card.Header>
		<Card.Body className="text-centers">
			<Card.Text>
				Вес товара:{' '}
				<a className="text-primary" href="#">
					{productWeight} грамм
				</a>
			</Card.Text>
			<Card.Text>
				Краткое описание:{' '}
				<a className="text-primary" href="#">
					{productDescription}
				</a>
			</Card.Text>
			<Card.Text>
				Стоимость товара:{' '}
				<a className="text-primary" href="#">
					{amountPayable} рублей
				</a>
			</Card.Text>
			<Card.Text>
				Итоговая цена:{' '}
				<a className="text-primary" href="#">
					{totalPrice} рублей
				</a>
			</Card.Text>
		</Card.Body>
	</Card>
);

export default OrderList;

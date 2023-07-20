import React, { FC } from 'react';
import { Card } from 'react-bootstrap';
import { IOrderList } from './body/types';

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
				Вес товара: <span className="text-primary">{productWeight} грамм</span>
			</Card.Text>
			<Card.Text>
				Краткое описание: <span className="text-primary">{productDescription}</span>
			</Card.Text>
			<Card.Text>
				Стоимость товара: <span className="text-primary">{amountPayable} рублей</span>
			</Card.Text>
			<Card.Text>
				Итоговая цена: <span className="text-primary">{totalPrice} рублей</span>
			</Card.Text>
		</Card.Body>
	</Card>
);

export default OrderList;

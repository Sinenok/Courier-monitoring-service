import React, { FC } from 'react';
import { Card } from 'react-bootstrap';
import { IOrderList } from './body/types';
import HighlightedText from '../courier/orders_taken/HighlightedText';

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
				Вес товара: <HighlightedText text={`${productWeight} г`} />
			</Card.Text>
			<Card.Text>
				Краткое описание: <HighlightedText text={productDescription} />
			</Card.Text>
			<Card.Text>
				Стоимость товара: <HighlightedText text={`${amountPayable} руб`} />
			</Card.Text>
			<Card.Text>
				Итоговая цена: <HighlightedText text={`${totalPrice} руб`} />
			</Card.Text>
		</Card.Body>
	</Card>
);

export default OrderList;

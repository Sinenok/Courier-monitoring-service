import React, { FC } from 'react';
import { Card } from 'react-bootstrap';
import { IOrderList } from '../../api/auth/types';

/**
 * props.postOrderList можно деструктуризировать
 */

const OrderList: FC<IOrderList> = ({
	quantityProducts,
	productDescription,
	shippingCost,
	totalPrice
}) => (
	<Card className="h-100 bg-light">
		<Card.Header className="text-center" as="h4">
			Состав заказа
		</Card.Header>
		<Card.Body className="text-centers">
			<Card.Text>
				Количество товара:{' '}
				<a className="text-primary" href="#">
					{quantityProducts}
				</a>
			</Card.Text>
			<Card.Text>
				Краткое описание:{' '}
				<a className="text-primary" href="#">
					{productDescription}
				</a>
			</Card.Text>
			<Card.Text>
				Цена доставки:{' '}
				<a className="text-primary" href="#">
					{shippingCost}
				</a>
			</Card.Text>
			<Card.Text>
				Итоговая цена:{' '}
				<a className="text-primary" href="#">
					{totalPrice}
				</a>
			</Card.Text>
		</Card.Body>
	</Card>
);

export default OrderList;

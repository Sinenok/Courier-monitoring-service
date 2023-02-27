import React from 'react';
import { Card } from 'react-bootstrap';

function OrderList(props: any) {
	return (
		<Card className="h-100 bg-light">
			<Card.Header className="text-center" as="h4">
				Состав заказа
			</Card.Header>
			<Card.Body className="text-centers">
				<Card.Text>
					Количество товара:{' '}
					<a className="text-primary" href="#">
						{props.postOrderList.quantity}
					</a>
				</Card.Text>
				<Card.Text>
					Краткое описание:{' '}
					<a className="text-primary" href="#">
						{props.postOrderList.description}
					</a>
				</Card.Text>
				<Card.Text>
					Цена доставки:{' '}
					<a className="text-primary" href="#">
						{props.postOrderList.shippingCost}
					</a>
				</Card.Text>
				<Card.Text>
					Итоговая цена:{' '}
					<a className="text-primary" href="#">
						{props.postOrderList.totalPrice}
					</a>
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default OrderList;

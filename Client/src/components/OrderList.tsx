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
						{props.post2.Quantity}
					</a>
				</Card.Text>
				<Card.Text>
					Краткое описание:{' '}
					<a className="text-primary" href="#">
						{props.post2.Description}
					</a>
				</Card.Text>
				<Card.Text>
					Цена доставки:{' '}
					<a className="text-primary" href="#">
						{props.post2.ShippingCost}
					</a>
				</Card.Text>
				<Card.Text>
					Итоговая цена:{' '}
					<a className="text-primary" href="#">
						{props.post2.TotalPrice}
					</a>
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default OrderList;

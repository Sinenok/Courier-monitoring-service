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
				{/** <span className="text-primary"> используется по всему проекту неоднократно, можно вынести в отдельный компонент  */}
				Вес товара: <span className="text-primary">{productWeight} грамм</span>
			</Card.Text>
			<Card.Text>
				Краткое описание: <span className="text-primary">{productDescription}</span>
			</Card.Text>
			<Card.Text>
				{/** слово "рублей" не будет подходить к числам, оканчивающимся на 0,1,2,3,4 */}
				Стоимость товара: <span className="text-primary">{amountPayable} рублей</span>
			</Card.Text>
			<Card.Text>
				Итоговая цена: <span className="text-primary">{totalPrice} рублей</span>
			</Card.Text>
		</Card.Body>
	</Card>
);

export default OrderList;

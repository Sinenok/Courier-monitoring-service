import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import OrderTitle from './Order';
import OrderInfo from './OrderInfo';
import OrderList from './OrderList';
import CourierTrackingMap from './CourierTrackingMap';

/**
 * Слишком большое количество констант.
 * Разумнее было бы создать по одному объекту для пропсов каждого компонента с соответствующими полями и передавать пропс целым объектом.
 * Инициализацию данных объектов логично было бы вынести в соседний файл.
 *
 * Примерная структура папки с компонентом может быть такой:
 * behavior.ts - часть с логикой. В данном случае там могли бы лежать пропсы для дочерних компонентов
 * component.tsx - чисто визуальная часть. В данном случае - извлечение пропсов из behavior.ts и JSX часть в блоке return
 * types.ts - типы, используемые в компоненте
 * index.ts - для экспорта
 *
 * Отделение логики от визуала резко повышает читабельность кода
 *  */

function Body() {
	// postOrderInfo property:
	const sender = 'Название магазина';
	const recipient = 'ФИО клиента';
	const deliveryAddress = 'Адрес доставки';
	const plannedDeliveryDate = 'Дата доставки';
	const amountPayable = 'Цена покупки';
	const paymentMethod = 'Карта/наличные';

	// OrderList property
	const quantityProducts = 1;
	const productDescription = 'Описание товара';
	const shippingCost = 'Цена';
	const totalPrice = 'Цена товара + дотставки';
	return (
		<Container className="py-3">
			<Row className="justify-content-center mb-3">
				<Col md="10" className="p-0">
					<OrderTitle />
				</Col>
			</Row>
			<Row className="justify-content-center mb-3">
				<Col md="5" className="p-0 me-1">
					<OrderInfo
						postOrderInfo={{
							sender: `${sender}`,
							recipient: `${recipient}`,
							deliveryAddress: `${deliveryAddress}`,
							plannedDeliveryDate: `${plannedDeliveryDate}`,
							amountPayable: `${amountPayable}`,
							paymentMethod: `${paymentMethod}`
						}}
					/>
				</Col>
				<Col md="5" className="p-0">
					<OrderList
						postOrderList={{
							quantity: `${quantityProducts} товар(а/ов)`,
							description: `${productDescription}`,
							shippingCost: `${shippingCost}`,
							totalPrice: `${totalPrice}`
						}}
					/>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col md="10" className="p-0">
					<CourierTrackingMap />
				</Col>
			</Row>
		</Container>
	);
}

export default Body;

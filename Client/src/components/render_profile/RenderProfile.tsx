import React, { useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { getsProfile } from '../../hooks/IsLoggedIn';
import { getOrderStatusName, getPaymentMethodName, useGetUserAllSentOrders } from './behavior';
import './../../styles/component-styles/RenderProfile.css';
import Pagination from './Pagination';
import HighlightedText from '../courier/orders_taken/HighlightedText';

const RenderProfile = () => {
	const profile = getsProfile();
	const getAllSentOrders = useGetUserAllSentOrders();

	const [currentPage, setCurrentPage] = useState(1);
	const [sentOrdersPerPage] = useState(2);
	const lastOrderIndex = currentPage * sentOrdersPerPage;
	const firstOrderIndex = lastOrderIndex - sentOrdersPerPage;
	const currentOrder = getAllSentOrders.allSentOrdersList.items.slice(
		firstOrderIndex,
		lastOrderIndex
	);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	return (
		<div>
			<Container className="text-center pt-5 mb-5">
				<h2>
					Вы успешно авторизовались, <span className="user-name">{profile}</span>!
				</h2>
			</Container>
			{getAllSentOrders.allSentOrdersList.total !== 0 ? (
				<div>
					<Container className="text-center mb-4">
						<h3>Здесь вы можете посмотреть ваш список заказов</h3>
					</Container>
					<Container className="flexxx cards-wrapper">
						{currentOrder.map((order) => (
							<Row className="cardss" key={order.orderId}>
								<Card className="cards-main bg-light">
									<Card.Header className="text-center" as="h4">
										Заказ от отправителя {order.senderName}
									</Card.Header>
									<Card.Body>
										<Card.Text>
											Отправитель: <HighlightedText text={order.senderName} />
										</Card.Text>
										<Card.Text>
											Адрес отправителя: <HighlightedText text={order.senderAddress} />
										</Card.Text>
										<Card.Text>
											Получатель: <HighlightedText text={order.receiverName} />
										</Card.Text>
										<Card.Text>
											Адрес получателя: <HighlightedText text={order.receiverAddress} />
										</Card.Text>
										<Card.Text>
											Стоимость доставки: <HighlightedText text={`${order.deliveryCost} руб`} />
										</Card.Text>
										<Card.Text>
											Способ оплаты:{' '}
											<HighlightedText text={getPaymentMethodName(order.paymentMethod)} />
										</Card.Text>
										<Card.Text>
											Стоимость товара: <HighlightedText text={`${order.productCost} руб`} />
										</Card.Text>
										<Card.Text>
											Краткое описание: <HighlightedText text={order.productDescription} />
										</Card.Text>
										<Card.Text>
											Вес товара: <HighlightedText text={`${order.productWeight} г`} />
										</Card.Text>
										<Card.Text>
											Итоговая цена:{' '}
											<HighlightedText text={`${order.deliveryCost + order.productCost} руб`} />
										</Card.Text>
										<Card.Text>
											Номер отслеживания: <HighlightedText text={order.trackNumber} />
										</Card.Text>
									</Card.Body>
									<Card.Footer className="text-center text-muted">
										Статус заказа: {getOrderStatusName(order.orderStatus)}
									</Card.Footer>
								</Card>
							</Row>
						))}
					</Container>
					<Pagination
						sentOrdersPerPage={sentOrdersPerPage}
						totalOrders={getAllSentOrders.allSentOrdersList.total}
						paginate={paginate}
					/>
				</div>
			) : (
				<div>
					<Container className="text-center p-5">
						<h3>У вас нет заказов</h3>
					</Container>
				</div>
			)}
		</div>
	);
};

export default RenderProfile;

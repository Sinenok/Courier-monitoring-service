import React, { useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { getsProfile } from '../../hooks/IsLoggedIn';
import { useGetUserAllSentOrders } from './behavior';
import './../../styles/component-styles/RenderProfile.css';
import Pagination from './Pagination';

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
	// console.log('aa', getAllSentOrders.allSentOrdersList.total);

	const getPaymentMethodName = (paymentMethod: number) => {
		if (paymentMethod === 0) {
			return 'Наличные';
		} else if (paymentMethod === 1) {
			return 'Карта';
		} else {
			return 'Онлайн';
		}
	};

	const orderProductStatus = 'Выполнен';

	const renderProfile = () => (
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
						{currentOrder.map((order, index) => (
							<Row className="cardss" key={index}>
								<Card className="cards-main bg-light">
									<Card.Header className="text-center" as="h4">
										Заказ от отправителя {order.senderName}
									</Card.Header>
									<Card.Body>
										<Card.Text>
											Отправитель: <span className="text-primary">{order.senderName}</span>
										</Card.Text>
										<Card.Text>
											Адрес отправителя: <span className="text-primary">{order.senderAddress}</span>
										</Card.Text>
										<Card.Text>
											Получатель: <span className="text-primary">{order.receiverName}</span>
										</Card.Text>
										<Card.Text>
											Адрес получателя:{' '}
											<span className="text-primary">{order.receiverAddress}</span>
										</Card.Text>
										<Card.Text>
											Стоимость доставки:{' '}
											<span className="text-primary">{order.deliveryCost} рублей</span>
										</Card.Text>
										<Card.Text>
											Способ оплаты:{' '}
											<span className="text-primary">
												{getPaymentMethodName(order.paymentMethod)}
											</span>
										</Card.Text>
										<Card.Text>
											Стоимость товара:{' '}
											<span className="text-primary">{order.productCost} рублей</span>
										</Card.Text>
										<Card.Text>
											Краткое описание:{' '}
											<span className="text-primary">{order.productDescription}</span>
										</Card.Text>
										<Card.Text>
											Вес товара: <span className="text-primary">{order.productWeight} грамм</span>
										</Card.Text>
										<Card.Text>
											Итоговая цена:{' '}
											<span className="text-primary">
												{order.deliveryCost + order.productCost} рублей
											</span>
										</Card.Text>
									</Card.Body>
									<Card.Footer className="text-center text-muted">
										Статус заказа: {orderProductStatus}
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
	return renderProfile();
};

export default RenderProfile;

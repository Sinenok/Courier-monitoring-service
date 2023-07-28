import React, { useState } from 'react';
import { getsProfile } from '../../hooks/IsLoggedIn';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { useGetActiveOrders } from './behavior';
import './../../styles/component-styles/CourierProfile.css';
import Pagination from '../render_profile/Pagination';
import { useAppDispatch } from '../../store';
import { takeOrder } from '../../store/courier/actionCreators';
import { getPaymentMethodName } from '../render_profile/behavior';
import HighlightedText from './orders_taken/HighlightedText';

const CourierProfile = () => {
	const profile = getsProfile();
	const createdOrders = 0;
	const getAllActiveOrders = useGetActiveOrders(createdOrders);

	const dispatch = useAppDispatch();
	const handleTakeOrder = (event: React.FormEvent<HTMLFormElement>, orderId: string) => {
		// event.preventDefault();
		dispatch(takeOrder({ orderId }));
	};

	const [currentPage, setCurrentPage] = useState(1);
	const [activeOrdersPerPage] = useState(2);
	const lastOrderIndex = currentPage * activeOrdersPerPage;
	const firstOrderIndex = lastOrderIndex - activeOrdersPerPage;
	const currentOrder = getAllActiveOrders.allActiveOrders.items.slice(
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
			{getAllActiveOrders.allActiveOrders.total !== 0 ? (
				<div>
					<Container className="text-center mb-4">
						<h3>Здесь вы можете посмотреть список активных заказов и взять в исполнение</h3>
					</Container>
					<Container className="flexxx cards-wrapper">
						{currentOrder.map((order) => (
							<Row className="cardss" key={order.orderId}>
								<Form onSubmit={(event) => handleTakeOrder(event, order.orderId)}>
									<Card className="cards-main bg-light">
										<Card.Header className="text-center" as="h4">
											Заказ от отправителя {order.senderName}
										</Card.Header>
										<Card.Body>
											<Card.Text>
												Номер заказа: <HighlightedText text={order.orderId} />
											</Card.Text>
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
												Вес товара: <HighlightedText text={`${order.productWeight} г`} />
											</Card.Text>
										</Card.Body>
										<Card.Footer className="">
											<Row lg="5" className="justify-content-center">
												<input type="hidden" name="orderId" value={order.orderId} />
												<Button variant="primary" type="submit">
													Взять заказ
												</Button>
											</Row>
										</Card.Footer>
									</Card>
								</Form>
							</Row>
						))}
					</Container>
					<Pagination
						sentOrdersPerPage={activeOrdersPerPage}
						totalOrders={getAllActiveOrders.allActiveOrders.total}
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

export default CourierProfile;

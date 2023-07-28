import React, { useState } from 'react';
import { useGetActiveOrders } from '../behavior';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import Pagination from '../../render_profile/Pagination';
import { useAppDispatch } from '../../../store';
import { completeOrder } from '../../../store/courier/actionCreators';
import { getPaymentMethodName } from '../../render_profile/behavior';
import HighlightedText from './HighlightedText';

const OrdersTaken = () => {
	const takenOrders = 1;
	const getAllTakenOrders = useGetActiveOrders(takenOrders);

	const dispatch = useAppDispatch();
	const handleCompleteOrder = (event: React.FormEvent<HTMLFormElement>, orderId: string) => {
		// event.preventDefault();
		dispatch(completeOrder({ orderId }));
	};

	const [currentPage, setCurrentPage] = useState(1);
	const activeOrdersPerPage = 2;
	const lastOrderIndex = currentPage * activeOrdersPerPage;
	const firstOrderIndex = lastOrderIndex - activeOrdersPerPage;
	const currentOrder = getAllTakenOrders.allActiveOrders.items.slice(
		firstOrderIndex,
		lastOrderIndex
	);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	return (
		<div>
			{getAllTakenOrders.allActiveOrders.total !== 0 ? (
				<div>
					<Container className="text-center mb-4 pt-5">
						<h3>Список взятых в исполнение заказов</h3>
					</Container>
					<Container className="flexxx cards-wrapper">
						{currentOrder.map((order) => (
							<Row className="cardss" key={order.orderId}>
								<Form onSubmit={(event) => handleCompleteOrder(event, order.orderId)}>
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
													Завершить заказ
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
						totalOrders={getAllTakenOrders.allActiveOrders.total}
						paginate={paginate}
					/>
				</div>
			) : (
				<div>
					<Container className="text-center p-5">
						<h3>У вас нет принятых заказов</h3>
					</Container>
				</div>
			)}
		</div>
	);
};

export default OrdersTaken;

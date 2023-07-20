import React, { useState } from 'react';
import { useGetActiveOrders } from '../behavior';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import Pagination from '../../render_profile/Pagination';
import { useAppDispatch } from '../../../store';
import { completeOrder } from '../../../store/courier/actionCreators';
import { getPaymentMethodName } from '../../render_profile/behavior';

const OrdersTaken = () => {
	const takenOrders = 1;
	const getAllTakenOrders = useGetActiveOrders(takenOrders);

	const dispatch = useAppDispatch();
	const handleCompleteOrder = (event: React.FormEvent<HTMLFormElement>, orderId: string) => {
		// event.preventDefault();
		dispatch(completeOrder({ orderId }));
	};

	const [currentPage, setCurrentPage] = useState(1);
	const [activeOrdersPerPage] = useState(2);
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
						{currentOrder.map((order, index) => (
							<Row className="cardss" key={index}>
								<Form onSubmit={(event) => handleCompleteOrder(event, order.orderId)}>
									<Card className="cards-main bg-light">
										<Card.Header className="text-center" as="h4">
											Заказ от отправителя {order.senderName}
										</Card.Header>
										<Card.Body>
											<Card.Text>
												Номер заказа: <span className="text-primary">{order.orderId}</span>
											</Card.Text>
											<Card.Text>
												Отправитель: <span className="text-primary">{order.senderName}</span>
											</Card.Text>
											<Card.Text>
												Адрес отправителя:{' '}
												<span className="text-primary">{order.senderAddress}</span>
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
												Вес товара:{' '}
												<span className="text-primary">{order.productWeight} грамм</span>
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

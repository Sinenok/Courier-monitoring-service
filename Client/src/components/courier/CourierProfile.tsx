import React, { useState } from 'react';
import { getsProfile } from '../../hooks/IsLoggedIn';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { useGetActiveOrders } from './behavior';
import './../../styles/component-styles/CourierProfile.css';
import Pagination from '../render_profile/Pagination';
import { useAppDispatch } from '../../store';
import { takeOrder } from '../../store/courier/actionCreators';

const CourierProfile = () => {
	const profile = getsProfile();
	const createdOrders = 0;
	const getAllActiveOrders = useGetActiveOrders(createdOrders);
	// console.log('aa', getAllActiveOrders.allActiveOrders.total);

	// const { orderId, setOrderId, handleSubmit } = useTakeOrder();
	// const [orderId, setOrderId] = useState();
	// console.log('id', orderId);
	const dispatch = useAppDispatch();
	const handleTakeOrder = (event: React.FormEvent<HTMLFormElement>, orderId: string) => {
		// event.preventDefault();
		dispatch(takeOrder({ orderId }));
		console.log('aaa', orderId);
	};
	// const flag = getsOrderId();
	// console.log('dsdsadsa', flag);

	const [currentPage, setCurrentPage] = useState(1);
	const [activeOrdersPerPage] = useState(2);
	const lastOrderIndex = currentPage * activeOrdersPerPage;
	const firstOrderIndex = lastOrderIndex - activeOrdersPerPage;
	const currentOrder = getAllActiveOrders.allActiveOrders.items.slice(
		firstOrderIndex,
		lastOrderIndex
	);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	const getPaymentMethodName = (paymentMethod: number) => {
		if (paymentMethod === 0) {
			return 'Наличные';
		} else if (paymentMethod === 1) {
			return 'Карта';
		} else {
			return 'Онлайн';
		}
	};

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
						{currentOrder.map((order, index) => (
							<Row className="cardss" key={index}>
								<Form onSubmit={(event) => handleTakeOrder(event, order.orderId)}>
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

import React, { useState } from 'react';
import { Form, Row, Col, Container, Button, InputGroup } from 'react-bootstrap';
import { useOrderSubmission, usePaymentMethods } from './behaivor';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const OrderSubmission = () => {
	const {
		senderName,
		setSenderName,
		senderAdress,
		setSenderAdress,
		receiverName,
		setReceiverName,
		receiverAdress,
		setReceiverAdress,
		handleSubmit
	} = useOrderSubmission();

	const [paymentMethod, setPaymentMethod] = useState('Online');

	const { paymentMethodList } = usePaymentMethods();

	const [deliveryCost, setDeliveryCost] = useState('0,0');
	const [productCost, setProductCost] = useState('0,0');
	const [productDescription, setProductDescription] = useState('');
	const [productWeight, setProductWeight] = useState('0,00');

	const defaultState = {
		center: [55.751574, 37.573856],
		zoom: 5
	};

	return (
		<div className="OrderSubmission">
			<Container className="text-center pt-5">
				<h1>Отправка заказа</h1>
				<YMaps>
					<Map defaultState={defaultState} width="100%" height="400px">
						<Placemark geometry={[51.684758, 37.738521]} />
					</Map>
				</YMaps>
			</Container>
			<Form onSubmit={handleSubmit}>
				<Container className="py-3">
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-3" controlId="formGroupSenderName">
							<Form.Label>ФИО отправителя</Form.Label>
							<Form.Control
								required
								name="senderName"
								type="text"
								placeholder="Введите ФИО отправителя"
								value={senderName}
								onChange={(e) => setSenderName(e.target.value)}
							/>
						</Form.Group>
					</Row>
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-3" controlId="formGroupSenderAddress">
							<Form.Label>Адрес отправителя</Form.Label>
							<Form.Control
								required
								name="senderAdress"
								type="text"
								placeholder="Введите адрес отправителя"
								value={senderAdress}
								onChange={(e) => setSenderAdress(e.target.value)}
							/>
						</Form.Group>
					</Row>
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-3" controlId="formGroupReceiverName">
							<Form.Label>ФИО получателя</Form.Label>
							<Form.Control
								required
								name="receiverName"
								type="text"
								placeholder="Введите ФИО получателя"
								value={receiverName}
								onChange={(e) => setReceiverName(e.target.value)}
							/>
						</Form.Group>
					</Row>
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-3" controlId="formGroupReceiverAddress">
							<Form.Label>Адрес получателя</Form.Label>
							<Form.Control
								required
								name="receiverAdress"
								type="text"
								placeholder="Введите адрес получателя"
								value={receiverAdress}
								onChange={(e) => setReceiverAdress(e.target.value)}
							/>
						</Form.Group>
					</Row>
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-3" controlId="formGroupDeliveryCost">
							<Form.Label>Стоимость доставки</Form.Label>
							<InputGroup>
								<Form.Control
									required
									name="deliveryCost"
									type="number"
									step="0.1"
									placeholder="Введите стоимость доставки в рублях"
									value={deliveryCost}
									onChange={(e) => setDeliveryCost(e.target.value)}
								/>
								<InputGroup.Text>{deliveryCost}</InputGroup.Text>
								<InputGroup.Text>руб</InputGroup.Text>
							</InputGroup>
						</Form.Group>
					</Row>
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-3" controlId="formGroupPaymentMethod">
							<Form.Label>Выберите метод оплаты</Form.Label>
							<Form.Select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
								{paymentMethodList.map((method, index) => {
									return (
										<option key={index} value={method.name}>
											{method.name}
										</option>
									);
								})}
							</Form.Select>
						</Form.Group>
					</Row>
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-3" controlId="formGroupProductCost">
							<Form.Label>Стоимость товара</Form.Label>
							<InputGroup>
								<Form.Control
									required
									name="productCost"
									type="number"
									step="0.1"
									placeholder="Введите стоимость товара в рублях"
									value={productCost}
									onChange={(e) => setProductCost(e.target.value)}
								/>
								<InputGroup.Text>{productCost}</InputGroup.Text>
								<InputGroup.Text>руб</InputGroup.Text>
							</InputGroup>
						</Form.Group>
					</Row>
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-3" controlId="formGroupProductDescription">
							<Form.Label>Краткое описание товара</Form.Label>
							<Form.Control
								required
								name="productDescription"
								as="textarea"
								placeholder="Введите краткое описание товара"
								value={productDescription}
								onChange={(e) => setProductDescription(e.target.value)}
							/>
						</Form.Group>
					</Row>
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-3" controlId="formGroupProductWeight">
							<Form.Label>Вес товара</Form.Label>
							<InputGroup>
								<Form.Control
									required
									name="productWeight"
									type="number"
									step="0.01"
									placeholder="Введите вес товара в кг"
									value={productWeight}
									onChange={(e) => setProductWeight(e.target.value)}
								/>
								<InputGroup.Text>{productWeight}</InputGroup.Text>
								<InputGroup.Text>кг</InputGroup.Text>
							</InputGroup>
						</Form.Group>
					</Row>
					<Row lg="5" className="justify-content-md-center mb-4">
						<Button variant="primary" type="submit">
							Отправить заказ
						</Button>
					</Row>
				</Container>
			</Form>
		</div>
	);
};

export default OrderSubmission;

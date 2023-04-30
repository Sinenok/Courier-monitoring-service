import React, { useState } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import { useOrderSubmission, usePaymentMethods } from './behaivor';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

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
	// console.log('fdsf', paymentMethodList);
	// console.log('paym: ', paymentMethod);

	const { paymentMethodList } = usePaymentMethods();

	const containerStyle = {
		width: '400px',
		height: '400px'
	};

	const center = {
		lat: -3.745,
		lng: -38.523
	};

	return (
		<div className="OrderSubmission">
			<Container className="text-center pt-5">
				<h1>Отправка заказа</h1>
			</Container>
			<Form onSubmit={handleSubmit}>
				<LoadScript googleMapsApiKey="YOUR_API_KEY">
					<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
						{/* Child components, such as markers, info windows, etc. */}
						<></>
					</GoogleMap>
				</LoadScript>
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

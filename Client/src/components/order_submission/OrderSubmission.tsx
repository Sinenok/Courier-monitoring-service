import React from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import { useOrderSubmission } from './behaivor';

const OrderSubmission = () => {
	const {
		senderFirstName,
		setSenderFirstName,
		senderAddress,
		setSenderAddress,
		receiverFirstName,
		setReceiverFirstName,
		receiverAddress,
		setReceiverAddress
	} = useOrderSubmission();
	return (
		<div className="OrderSubmission">
			<Container className="text-center pt-5">
				<h1>Отправка заказа</h1>
			</Container>
			<Form>
				<Container className="py-3">
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-3" controlId="formGroupSenderFirstName">
							<Form.Label>Имя отправителя</Form.Label>
							<Form.Control
								required
								name="senderFirstName"
								type="text"
								placeholder="Введите имя отправителя"
								value={senderFirstName}
								onChange={(e) => setSenderFirstName(e.target.value)}
							/>
						</Form.Group>
					</Row>
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-3" controlId="formGroupSenderAddress">
							<Form.Label>Адрес отправителя</Form.Label>
							<Form.Control
								required
								name="senderAddress"
								type="text"
								placeholder="Введите адрес отправителя"
								value={senderAddress}
								onChange={(e) => setSenderAddress(e.target.value)}
							/>
						</Form.Group>
					</Row>
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-3" controlId="formGroupReceiverFirstName">
							<Form.Label>Имя получателя</Form.Label>
							<Form.Control
								required
								name="receiverFirstName"
								type="text"
								placeholder="Введите имя получателя"
								value={receiverFirstName}
								onChange={(e) => setReceiverFirstName(e.target.value)}
							/>
						</Form.Group>
					</Row>
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-3" controlId="formGroupReceiverAddress">
							<Form.Label>Адрес получателя</Form.Label>
							<Form.Control
								required
								name="receiverAddress"
								type="text"
								placeholder="Введите адрес получателя"
								value={receiverAddress}
								onChange={(e) => setReceiverAddress(e.target.value)}
							/>
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

import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

function CheckTrackNumber() {
	return (
		<div className="CheckTrackNumber">
			<Container className="text-center pt-5">
				<h3>Для доступа к отслеживанию вашего заказа введите номер отслеживания</h3>
			</Container>
			<Form>
				<Container className="py-4">
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-3" controlId="formGroupTrackNumber">
							<Form.Label>Номер отслеживания</Form.Label>
							<Form.Control
								name="trackNumber"
								type="text"
								placeholder="Введите ваш номер отслеживания"
							/>
						</Form.Group>
					</Row>
					<Row lg="5" className="justify-content-md-center">
						<Button variant="primary" type="submit">
							Войти
						</Button>
					</Row>
				</Container>
			</Form>
		</div>
	);
}

export default CheckTrackNumber;

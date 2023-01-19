import React, { FormEvent, useState } from 'react';
// import HeaderStart from '../components/HeaderStart';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

const AuthorizationPage = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
	};

	return (
		<div className="AuthorizationPage">
			{/* <HeaderStart /> */}
			<Form onSubmit={handleSubmit}>
				<Container className="py-5">
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-3" controlId="formGroupLogin">
							<Form.Label>Логин</Form.Label>
							<Form.Control
								type="text"
								placeholder="Введите логин"
								value={login}
								onChange={(e) => setLogin(e.target.value)}
							/>
						</Form.Group>
					</Row>
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-4" controlId="formGroupPassword">
							<Form.Label>Пароль</Form.Label>
							<Form.Control
								type="password"
								placeholder="Введите пароль"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
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
};

export default AuthorizationPage;

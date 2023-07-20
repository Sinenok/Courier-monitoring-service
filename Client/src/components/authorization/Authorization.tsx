import React from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { useLogin } from './behavior';
import './../../styles/component-styles/Authorization.css';

const Authorization = () => {
	const { login, setLogin, password, setPassword, handleSubmit } = useLogin();
	return (
		<div className="Authorization">
			<Container className="text-center pt-5">
				<h2>Авторизация</h2>
			</Container>
			<Form onSubmit={handleSubmit}>
				<Container className="py-3">
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-3" controlId="formGroupLogin">
							<Form.Label>Логин</Form.Label>
							<Form.Control
								className="input"
								name="login"
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
								className="input"
								name="password"
								type="password"
								placeholder="Введите пароль"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Form.Group>
					</Row>
					<Row lg="5" className="justify-content-md-center mb-4">
						<Button variant="primary" type="submit">
							Войти
						</Button>
					</Row>
				</Container>
			</Form>
		</div>
	);
};

export default Authorization;

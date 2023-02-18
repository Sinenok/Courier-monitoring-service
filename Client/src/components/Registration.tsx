// import axios from 'axios';
import React, { useState } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import Endpoints from '../api/endpoints';
import { axiosInstance } from '../api/instance';
import { useAppDispatch } from '../store';
import { registerUser } from '../store/auth/actionCreators';

const Registration = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [login, setLogin] = useState('');
	const [mail, setMail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [phone, setPhone] = useState('');

	const dispatch = useAppDispatch();

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();

		if (password === repeatPassword) {
			dispatch(registerUser({ firstName, lastName, login, mail, password, phone }));
		} else {
			throw new Error('У вас не совпадают пароли');
		}
	};
	return (
		<div className="Registration">
			<Container className="text-center pt-5">
				<h1>Регистрация</h1>
			</Container>
			<Form onSubmit={handleSubmit}>
				<Container className="py-3">
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-3" controlId="formGroupFirstName">
							<Form.Label>Имя</Form.Label>
							<Form.Control
								/*required*/ name="firstName"
								type="text"
								placeholder="Введите имя"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</Form.Group>
					</Row>
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-3" controlId="formGroupLastName">
							<Form.Label>Фамилия</Form.Label>
							<Form.Control
								/*required*/ name="lastName"
								type="text"
								placeholder="Введите фамилию"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>
						</Form.Group>
					</Row>
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-3" controlId="formGroupLogin">
							<Form.Label>Логин</Form.Label>
							<Form.Control
								required
								name="login"
								type="text"
								placeholder="Введите логин"
								value={login}
								onChange={(e) => setLogin(e.target.value)}
							/>
						</Form.Group>
					</Row>
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-3" controlId="formGroupMail">
							<Form.Label>Email</Form.Label>
							<Form.Control
								/*required*/ name="mail"
								type="email"
								placeholder="Введите email"
								value={mail}
								onChange={(e) => setMail(e.target.value)}
							/>
						</Form.Group>
					</Row>
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-3" controlId="formGroupPassword">
							<Form.Label>Пароль</Form.Label>
							<Form.Control
								required
								name="password"
								type="password"
								placeholder="Введите пароль"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Form.Group>
					</Row>
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-3" controlId="formGroupRepassword">
							<Form.Label>Повтор пароля</Form.Label>
							<Form.Control
								required
								name="repassword"
								type="password"
								placeholder="Повторите пароль"
								value={repeatPassword}
								onChange={(e) => setRepeatPassword(e.target.value)}
							/>
						</Form.Group>
					</Row>
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-4" controlId="formGroupPhone">
							<Form.Label>Телефон</Form.Label>
							<Form.Control
								name="phone"
								type="phone"
								placeholder="Введите номер телефона"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
						</Form.Group>
					</Row>
					<Row lg="5" className="justify-content-md-center mb-4">
						<Button variant="primary" type="submit">
							Зарегистрироваться
						</Button>
					</Row>
				</Container>
			</Form>
		</div>
	);
};

export default Registration;

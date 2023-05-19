import React from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import { useRegister } from './behaivor';
import './../../styles/component-styles/Registration.css';

// -----------------------------КАК И С АВТОРИЗАЦИЕЙ ВЫНЕС ЛОГИКУ--------------------------------------------

const Registration = () => {
	const {
		firstName,
		setFirstName,
		lastName,
		setLastName,
		login,
		setLogin,
		mail,
		setMail,
		password,
		setPassword,
		repeatPassword,
		setRepeatPassword,
		phone,
		setPhone,
		handleSubmit
	} = useRegister();
	return (
		<div className="Registration">
			<Container className="text-center pt-5">
				<h2>Регистрация</h2>
			</Container>
			<Form onSubmit={handleSubmit}>
				<Container className="py-3">
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-3" controlId="formGroupFirstName">
							<Form.Label>Имя</Form.Label>
							<Form.Control
								className="input"
								required
								name="firstName"
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
								className="input"
								required
								name="lastName"
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
								className="input"
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
								className="input"
								required
								name="mail"
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
								className="input"
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
								className="input"
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
								className="input"
								required
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

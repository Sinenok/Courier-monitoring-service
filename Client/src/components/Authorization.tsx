import React, { FormEvent, useCallback, useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

import { useAppDispatch } from '../store';
import { loginUser } from '../store/auth/actionCreators';

/**
 * В данном случае всю логику (всё, что доc:\Users\Ivan\AppData\Local\Programs\Microsoft VS Code\resources\app\out\vs\code\electron-sandbox\workbench\workbench.html return) можно вынести в файл для логики, сформировав кастомный хук.
 * https://ru.reactjs.org/docs/hooks-custom.html
 * При этом его нужно типизировать, чтобы было более удобно работать
 *
 * Для оптимизации ререндеров handleSubmit можно обернуть в useCallback https://habr.com/ru/post/529950/
 */

/** Виртуально находится в соседнем файле types.ts и не захламляет файл с визуалом  и логикой*/
interface UseloginResult {
	login: string;
	setLogin: React.Dispatch<React.SetStateAction<string>>;
	password: string;
	setPassword: React.Dispatch<React.SetStateAction<string>>;
	handleSubmit: (e: FormEvent) => void;
}

/** Виртуально находится в соседнем файле behavior.ts и не захламляет файл с визуалом */
const useLogin = (): UseloginResult => {
	const dispatch = useAppDispatch();

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = useCallback(
		(e: FormEvent) => {
			e.preventDefault();
			console.log('dsaddsadsada');
			console.log('dsadsa', login);

			dispatch(loginUser({ login, password }));
		},
		[login, password]
	);
	console.log('login', login);

	return {
		login,
		setLogin,
		password,
		setPassword,
		handleSubmit
	};
};

const Authorization = () => {
	const { login, setLogin, password, setPassword, handleSubmit } = useLogin();
	return (
		<div className="Authorization">
			<Container className="text-center pt-5">
				<h1>Авторизация</h1>
			</Container>
			<Form onSubmit={handleSubmit}>
				<Container className="py-3">
					<Row className="justify-content-md-center">
						<Form.Group lg="5" as={Col} className="mb-3" controlId="formGroupLogin">
							<Form.Label>Логин</Form.Label>
							<Form.Control
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
								name="password"
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

export default Authorization;

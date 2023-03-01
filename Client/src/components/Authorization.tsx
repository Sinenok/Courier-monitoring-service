import React, { FormEvent, useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

import { useAppDispatch } from '../store';
import { loginUser } from '../store/auth/actionCreators';

/** 
 * В данном случае всю логику (всё, что до return) можно вынести в файл для логики, сформировав кастомный хук.
 * https://ru.reactjs.org/docs/hooks-custom.html
 * При этом его нужно типизировать, чтобы было более удобно работать
 *
 * Для оптимизации handleSubmit можно обернуть в useCallback
 */

/** Виртуально находится в соседнем файле types.ts и не захламляет файл с визуалом  и логикой*/
interface UseloginResult {
	login: string,
		setLogin: React.Dispatch<React.SetStateAction<string >>;
		password: string,
		setPassword: React.Dispatch<React.SetStateAction<string >>;
		handleSubmit: (e: FormEvent) => void
}

/** Виртуально находится в соседнем файле behavior.ts и не захламляет файл с визуалом */
const useLogin = (): UseloginResult => {
	const dispatch = useAppDispatch();

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
	
		dispatch(loginUser({ login, password }));
	}

	return {
		login,
		setLogin,
		password,
		setPassword,
		handleSubmit
	}
}

const Authorization = () => {
	
	const {login, setLogin, password, setPassword, handleSubmit} = useLogin()

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

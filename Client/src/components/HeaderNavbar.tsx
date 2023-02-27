import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IRootState } from '../store';

function HeaderNavbar() {
	const isLoggedIn = useSelector((state: IRootState) => !!state.auth.authData.accessToken);
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand as={Link} to={'/'}>
					Название сервиса отслеживания
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link className="me-lg-5" as={Link} to={'/authorization'}>
							Авторизация
						</Nav.Link>
						{!isLoggedIn && (
							<Nav.Link as={Link} to={'/registration'}>
								Регистрация
							</Nav.Link>
						)}
						{isLoggedIn && (
							<Nav.Link as={Link} to={'/receivertracking'}>
								Информация о заказе
							</Nav.Link>
						)}
						{isLoggedIn && (
							<Nav.Link as={Link} to={'/ordersubmission'}>
								Отправить заказ
							</Nav.Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default HeaderNavbar;

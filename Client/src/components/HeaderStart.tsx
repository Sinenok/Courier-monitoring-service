import React, { FC } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

function HeaderStart() {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="/authorization">Название сервиса отслеживания</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link className="me-lg-5" href="/authorization">
							Авторизация
						</Nav.Link>
						<Nav.Link href="/authorization">Регистрация</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default HeaderStart;

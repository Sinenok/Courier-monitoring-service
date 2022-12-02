import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Header() {
	return (
		<Navbar bg="light">
			<Container fluid>
				<Navbar.Brand>Название сервиса отслеживания</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Navbar.Text>
						Здравствуйте,{' '}
						<a className="text-primary" href="#login">
							Имя пользователя
						</a>
						!
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;

import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UnregisteredUserNav = () => {
	return (
		<>
			<Nav.Link className="nav-link" as={Link} to={'/registration'}>
				Регистрация
			</Nav.Link>
			<Nav.Link className="nav-link" as={Link} to={'/authorization'}>
				Авторизация
			</Nav.Link>
		</>
	);
};

export default UnregisteredUserNav;

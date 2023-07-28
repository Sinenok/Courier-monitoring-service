import React, { FC } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { INavRole } from './types';

const CourierNav: FC<INavRole> = ({ profile }) => {
	return (
		<>
			<Nav.Link className="nav-link" as={Link} to={'/orderstaken'}>
				Принятые заказы
			</Nav.Link>
			{profile ? (
				<div className="user-nav-wrap">
					<Navbar.Text className="text">Здравствуйте,</Navbar.Text>
					<Nav.Link className="nav-link-user" as={Link} to={'/authorization'}>
						{profile}
					</Nav.Link>
				</div>
			) : null}
		</>
	);
};

export default CourierNav;

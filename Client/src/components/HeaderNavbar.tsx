import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getsProfile, getsProfileRole, isLogged } from '../hooks/IsLoggedIn';
import './../styles/component-styles/HeaderNavbar.css';
import imgMainLogo from './../img/logo/logoNav.png';
import UnregisteredUserNav from './navbar_roles/UnregisteredUserNav';
import UserNav from './navbar_roles/UserNav';
import CourierNav from './navbar_roles/CourierNav';
import AdminNav from './navbar_roles/AdminNav';

function HeaderNavbar() {
	const isLoggedIn = isLogged();
	const profile = getsProfile();
	const userRole = getsProfileRole();

	return (
		<div className="HeaderNavbar">
			<Navbar className="navbar" bg="dark" variant="dark" expand="lg">
				<Container className="navbar-wrap">
					<Navbar.Brand as={Link} to={'/'}>
						<img className="logo-img" src={imgMainLogo} alt="" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="nav-text ms-auto">
							<Nav.Link className="nav-link" as={Link} to={'/receivertracking'}>
								Информация о заказе
							</Nav.Link>
							{!isLoggedIn ? (
								<UnregisteredUserNav />
							) : userRole === 'User' ? (
								<UserNav profile={profile} />
							) : userRole === 'Courier' ? (
								<CourierNav profile={profile} />
							) : userRole === 'Admin' ? (
								<AdminNav profile={profile} />
							) : null}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default HeaderNavbar;

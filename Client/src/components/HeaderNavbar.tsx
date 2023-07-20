import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getsProfile, getsProfileRole, isLogged } from '../hooks/IsLoggedIn';
import './../styles/component-styles/HeaderNavbar.css';
import imgMainLogo from './../img/logo/logoNav.png';

/**
 * Условие isLoggedIn можно объединить, используя тернарный оператор
 * Переписал
 */

function HeaderNavbar() {
	const isLoggedIn = isLogged();
	const profile = getsProfile();
	const userRole = getsProfileRole();

	/** очень много тернарных операторов
	 * куски кода в тернарниках можно вынести в отдельные компоненты для читаемости
	 */

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
								<>
									<Nav.Link className="nav-link" as={Link} to={'/registration'}>
										Регистрация
									</Nav.Link>
									<Nav.Link className="nav-link" as={Link} to={'/authorization'}>
										Авторизация
									</Nav.Link>
								</>
							) : isLoggedIn && userRole === 'User' ? (
								<>
									<Nav.Link className="nav-link" as={Link} to={'/ordersubmission'}>
										Отправить заказ
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
							) : isLoggedIn && userRole === 'Courier' ? (
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
							) : isLoggedIn && userRole === 'Admin' ? (
								<>
									<Nav.Link className="nav-link" as={Link} to={'/allorders'}>
										Панель администрирования заказами
									</Nav.Link>
									<Nav.Link className="nav-link" as={Link} to={'/ordersubmission'}>
										Отправить заказ
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
							) : null}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default HeaderNavbar;

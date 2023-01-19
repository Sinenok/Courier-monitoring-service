import React from 'react';
// import ReceiverTrackingPage from './pages/ReceiverTrackingPage';
// import HeaderStart from './components/HeaderStart';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AuthorizationPage from './pages/AuthorizationPage';
import ReceiverTrackingPage from './pages/ReceiverTrackingPage';
import Main from './pages/Main';
import { Container, Navbar, Nav } from 'react-bootstrap';

function App() {
	return (
		<Router>
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
							<Nav.Link as={Link} to={'/receivertracking'}>
								Регистрация
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/authorization" element={<AuthorizationPage />} />
				<Route path="/receivertracking" element={<ReceiverTrackingPage />} />
				{/* <ReceiverTrackingPage /> */}
				{/* <HeaderStart /> */}
			</Routes>
		</Router>
	);
}

export default App;

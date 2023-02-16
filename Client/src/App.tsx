import React from 'react';
// import ReceiverTrackingPage from './pages/ReceiverTrackingPage';
import HeaderStart from './components/HeaderStart';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthorizationPage from './pages/AuthorizationPage';
import RegistrationPage from './pages/RegistrationPage';
import ReceiverTrackingPage from './pages/ReceiverTrackingPage';
import Main from './pages/Main';
import { useSelector } from 'react-redux';
import { IRootState } from './store';
// import { Container, Navbar, Nav } from 'react-bootstrap';

function App() {
	const isLoggedIn = useSelector((state: IRootState) => !!state.auth.authData.accessToken);
	return (
		<Router>
			<HeaderStart />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/authorization" element={<AuthorizationPage />} />
				<Route
					path="/receivertracking"
					element={isLoggedIn ? <ReceiverTrackingPage /> : <Navigate to="/" />}
				/>
				<Route
					path="/registration"
					element={!isLoggedIn ? <RegistrationPage /> : <Navigate to="/" />}
				/>
				{/* <ReceiverTrackingPage /> */}
				{/* <HeaderStart /> */}
			</Routes>
		</Router>
	);
}

export default App;

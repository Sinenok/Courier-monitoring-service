import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthorizationPage from './pages/AuthorizationPage';
import RegistrationPage from './pages/RegistrationPage';
import ReceiverTrackingPage from './pages/ReceiverTrackingPage';
import Main from './pages/Main';
import { useSelector } from 'react-redux';
import { IRootState } from './store';
import OrderSubmissionPage from './pages/OrderSubmissionPage';
import HeaderNavbar from './components/HeaderNavbar';

/** Повторяющийся код с проверкой условия `isLoggedIn` нужно вынести в отдельную функцию */

function App() {
	const isLoggedIn = useSelector((state: IRootState) => !!state.auth.authData.accessToken);
	return (
		<Router>
			<HeaderNavbar />
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
				<Route
					path="/ordersubmission"
					element={isLoggedIn ? <OrderSubmissionPage /> : <Navigate to="/" />}
				/>
			</Routes>
		</Router>
	);
}

export default App;

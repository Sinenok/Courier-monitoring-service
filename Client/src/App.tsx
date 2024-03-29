import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthorizationPage from './pages/authorization-page/AuthorizationPage';
import RegistrationPage from './pages/RegistrationPage';
import ReceiverTrackingPage from './pages/ReceiverTrackingPage';
import Main from './pages/Main';
import OrderSubmissionPage from './pages/OrderSubmissionPage';
import HeaderNavbar from './components/HeaderNavbar';
import { getsProfileRole, isLogged } from './hooks/IsLoggedIn';
import Footer from './components/Footer';
import './styles/App.css';
import OrdersTakenPage from './pages/OrdersTakenPage';
import NotFoundPage from './pages/NotFoundPage';

interface PropType {
	component: React.FC;
}

const PrivateRouteUser: FC<PropType> = ({ component: Component }) => {
	const isLoggedIn = isLogged();
	const userRole = getsProfileRole();

	if (isLoggedIn && userRole === 'User') return <Component />;
	return <Navigate to="/" />;
};

const PrivateRouteCourier: FC<PropType> = ({ component: Component }) => {
	const isLoggedIn = isLogged();
	const userRole = getsProfileRole();

	if (isLoggedIn && userRole === 'Courier') return <Component />;
	return <Navigate to="/" />;
};

function App() {
	const isLoggedIn = isLogged();

	return (
		<Router>
			<div className="page">
				<HeaderNavbar />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/authorization" element={<AuthorizationPage />} />
					<Route path="/receivertracking" element={<ReceiverTrackingPage />} />
					<Route path="*" element={<NotFoundPage />} />
					<Route
						path="/registration"
						element={!isLoggedIn ? <RegistrationPage /> : <Navigate to="/" />}
					/>
					<Route
						path="/ordersubmission"
						element={<PrivateRouteUser component={OrderSubmissionPage} />}
					/>

					<Route
						path="/orderstaken"
						element={<PrivateRouteCourier component={OrdersTakenPage} />}
					/>
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;

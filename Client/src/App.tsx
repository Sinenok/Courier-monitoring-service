import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthorizationPage from './pages/AuthorizationPage';
import RegistrationPage from './pages/RegistrationPage';
import ReceiverTrackingPage from './pages/ReceiverTrackingPage';
import Main from './pages/Main';
import OrderSubmissionPage from './pages/OrderSubmissionPage';
import HeaderNavbar from './components/HeaderNavbar';
import { isLogged } from './hooks/IsLoggedIn';

/** Повторяющийся код с проверкой условия `isLoggedIn` нужно вынести в отдельный компонент
 * Переписал ту часть, где требуется isLoggedIn = true
 */

interface PropType {
	component: React.FC;
}

const PrivateRoute: FC<PropType> = ({ component: Component }) => {
	const isLoggedIn = isLogged();

	if (isLoggedIn) return <Component />;
	return <Navigate to="/" />;
};

function App() {
	// const isLoggedIn = useSelector((state: IRootState) => !!state.auth.authData.accessToken);
	const isLoggedIn = isLogged();

	return (
		<Router>
			<HeaderNavbar />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/authorization" element={<AuthorizationPage />} />
				<Route
					path="/receivertracking"
					element={<PrivateRoute component={ReceiverTrackingPage} />}
				/>
				<Route
					path="/registration"
					element={!isLoggedIn ? <RegistrationPage /> : <Navigate to="/" />}
				/>
				<Route path="/ordersubmission" element={<PrivateRoute component={OrderSubmissionPage} />} />
			</Routes>
		</Router>
	);
}

export default App;

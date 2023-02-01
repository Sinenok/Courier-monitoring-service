import React from 'react';
// import ReceiverTrackingPage from './pages/ReceiverTrackingPage';
import HeaderStart from './components/HeaderStart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthorizationPage from './pages/AuthorizationPage';
import ReceiverTrackingPage from './pages/ReceiverTrackingPage';
import Main from './pages/Main';
// import { Container, Navbar, Nav } from 'react-bootstrap';

function App() {
	return (
		<Router>
			<HeaderStart />
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

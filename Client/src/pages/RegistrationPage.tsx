import React from 'react';
import RegisterAccess from '../components/RegisterAccess';
import Registration from '../components/registration/Registration';
import { isRegisterLoad, isRegistered } from '../hooks/IsLoggedIn';
import { Container, Spinner } from 'react-bootstrap';

const RegistrationPage = () => {
	const isRegisteredIn = isRegistered();
	const isLoad = isRegisterLoad();

	return (
		<div>
			{isRegisteredIn && !isLoad ? (
				<RegisterAccess />
			) : !isRegisteredIn && !isLoad ? (
				<Registration />
			) : (
				<Container className="text-center pt-5 mb-5">
					<Spinner animation="border" variant="primary" />
				</Container>
			)}
		</div>
	);
};

export default RegistrationPage;

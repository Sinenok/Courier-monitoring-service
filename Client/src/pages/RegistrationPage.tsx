import React from 'react';
import RegisterAccess from '../components/RegisterAccess';
import Registration from '../components/registration/Registration';
import { isRegistered } from '../hooks/IsLoggedIn';

/** RenderProfile - в отдельный компонент - ИСПРАВЛЕНО */
const RegistrationPage = () => {
	const isRegisteredIn = isRegistered();
	return <div>{isRegisteredIn ? <RegisterAccess /> : <Registration />}</div>;
};

export default RegistrationPage;

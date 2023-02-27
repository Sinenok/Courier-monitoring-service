import React from 'react';
import { useSelector } from 'react-redux';
import Registration from '../components/Registration';
import { IRootState } from '../store';

const RegistrationPage = () => {
	const isLoggedIn = useSelector((state: IRootState) => state.auth.registrData.isRegistered);

	const renderProfile = () => <div>Вы успешно зарегистрировались</div>;
	return <div>{isLoggedIn ? renderProfile() : <Registration />}</div>;
};

export default RegistrationPage;

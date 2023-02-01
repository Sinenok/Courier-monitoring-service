import React from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Authorization from './../components/Authorization';

const AuthorizationPage = () => {
	const isLoggedIn = useSelector((state: IRootState) => !!state.auth.authData.accessToken);
	return (
		<div>
			<h1>dsadsada</h1>
			{isLoggedIn ? <div>Вы успешно авторизовались</div> : <Authorization />}
		</div>
	);
};

export default AuthorizationPage;

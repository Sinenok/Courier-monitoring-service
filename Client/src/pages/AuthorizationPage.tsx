import React from 'react';
import { useSelector } from 'react-redux';
import { IRootState, useAppDispatch } from '../store';
import { logoutUser } from '../store/auth/actionCreators';
import Authorization from './../components/Authorization';

const AuthorizationPage = () => {
	const dispatch = useAppDispatch();
	const isLoggedIn = useSelector((state: IRootState) => !!state.auth.authData.accessToken);

	const renderProfile = () => (
		<div>
			Вы успешно авторизовались
			<button onClick={() => dispatch(logoutUser())}>Logout</button>
		</div>
	);
	return <div>{isLoggedIn ? renderProfile() : <Authorization />}</div>;
};

export default AuthorizationPage;

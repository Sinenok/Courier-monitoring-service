import React from 'react';
import { useSelector } from 'react-redux';
import { IRootState, useAppDispatch } from '../store';
import { getProfile, logoutUser } from '../store/auth/actionCreators';
import Authorization from './../components/Authorization';

const AuthorizationPage = () => {
	const dispatch = useAppDispatch();

	const profile = useSelector((state: IRootState) => state.auth.profileData.profile);
	const isLoggedIn = useSelector((state: IRootState) => !!state.auth.authData.accessToken);

	const renderProfile = () => (
		<div>
			<div>Вы успешно авторизовались, {profile}</div>
			<button onClick={() => dispatch(logoutUser())}>Logout</button>
			<button onClick={() => dispatch(getProfile())}>Update profile</button>
		</div>
	);
	return <div>{isLoggedIn ? renderProfile() : <Authorization />}</div>;
};

export default AuthorizationPage;

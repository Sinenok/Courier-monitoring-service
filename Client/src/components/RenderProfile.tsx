import React from 'react';
import { getsProfile } from '../hooks/IsLoggedIn';
import { useAppDispatch } from '../store';
import { getProfile, logoutUser } from '../store/auth/actionCreators';

const RenderProfile = () => {
	const dispatch = useAppDispatch();
	const profile = getsProfile();
	const renderProfile = () => (
		<div>
			<div>Вы успешно авторизовались, {profile}</div>
			<button onClick={() => dispatch(logoutUser())}>Logout</button>
			<button onClick={() => dispatch(getProfile())}>Update profile</button>
		</div>
	);
	return renderProfile();
};

export default RenderProfile;

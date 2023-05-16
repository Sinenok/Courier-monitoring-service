import React from 'react';
import { getsProfile } from '../hooks/IsLoggedIn';
import { useAppDispatch } from '../store';
import { getProfile, logoutUser } from '../store/auth/actionCreators';
import { Container } from 'react-bootstrap';

const RenderProfile = () => {
	const dispatch = useAppDispatch();
	const profile = getsProfile();
	const renderProfile = () => (
		<div>
			<Container className="text-center pt-5 mb-5">
				<h3>Вы успешно авторизовались, {profile}</h3>
				<button onClick={() => dispatch(logoutUser())}>Logout</button>
				<button onClick={() => dispatch(getProfile())}>Update profile</button>
			</Container>
		</div>
	);
	return renderProfile();
};

export default RenderProfile;

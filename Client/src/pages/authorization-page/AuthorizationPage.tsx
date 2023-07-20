import React from 'react';
import { getsProfileRole, isLogged } from '../../hooks/IsLoggedIn';
import Authorization from './../../components/authorization/Authorization';
import RenderProfile from '../../components/render_profile/RenderProfile';
import CourierProfile from '../../components/courier/CourierProfile';

const AuthorizationPage = () => {
	const isLoggedIn = isLogged();
	const userRole = getsProfileRole();
	return (
		<div>
			{!isLoggedIn ? (
				<Authorization />
			) : isLoggedIn && userRole === 'User' ? (
				<RenderProfile />
			) : isLoggedIn && userRole === 'Courier' ? (
				<CourierProfile />
			) : null}
		</div>
	);
};

export default AuthorizationPage;

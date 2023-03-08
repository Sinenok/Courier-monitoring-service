import React from 'react';
import { useSelector } from 'react-redux';
import { IRootState, useAppDispatch } from '../store';
import { getProfile, logoutUser } from '../store/auth/actionCreators';
import Authorization from './../components/Authorization';

/**
 * RenderProfile необходмо вынести в отдельный компонент
 * Во-первых, это повысить читабельность, т.к. запись renderProfile() : <Authorization /> выглядит неочевидной
 * Во-вторых, это повысит оптимизацию, т.к. инициализация компонента внутри тела другого компонента - антипаттерн.
 * https://levelup.gitconnected.com/code-review-avoid-declaring-react-component-inside-parent-component-1768a645f523
 */

/**
 * В разделе store (или при увеличении размера приложения в отдельном module store)
 * полезно создавать папку/файл с селекторами для переиспользования селекторов.
 * Также это позволит избежать бойлерплейт кода типа state.auth...
 * Полезная библиотека для этого - reselect
 * https://www.npmjs.com/package/reselect
 */

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

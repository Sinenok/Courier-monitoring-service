import React from 'react';
import { getsProfileRole, isLogged } from '../../hooks/IsLoggedIn';
import Authorization from './../../components/authorization/Authorization';
import RenderProfile from '../../components/render_profile/RenderProfile';
import CourierProfile from '../../components/courier/CourierProfile';

/**
 * RenderProfile необходмо вынести в отдельный компонент
 * Во-первых, это повысить читабельность, т.к. запись renderProfile() : <Authorization /> выглядит неочевидной
 * Во-вторых, это повысит оптимизацию, т.к. инициализация компонента внутри тела другого компонента - антипаттерн.
 * https://levelup.gitconnected.com/code-review-avoid-declaring-react-component-inside-parent-component-1768a645f523
 * ---------------------------------ИСПРАВЛЕНО-----------------------------------------------------------------------------------------------------
 */
/**
 * В разделе store (или при увеличении размера приложения в отдельном module store)
 * полезно создавать папку/файл с селекторами для переиспользования селекторов.
 * Также это позволит избежать бойлерплейт кода типа state.auth...
 * Полезная библиотека для этого - reselect
 * https://www.npmjs.com/package/reselect
 */

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
			) : isLoggedIn && userRole === 'Admin' ? (
				<div>dsadddd</div>
			) : null}
		</div>
	);
};

export default AuthorizationPage;

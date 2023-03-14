import React from 'react';
import RenderProfile from '../../components/RenderProfile';
import { isLogged } from '../../hooks/IsLoggedIn';
import Authorization from './../../components/authorization/Authorization';

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
	return <div>{isLoggedIn ? <RenderProfile /> : <Authorization />}</div>;
};

export default AuthorizationPage;

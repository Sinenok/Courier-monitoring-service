import axios from 'axios';
import { store } from '../store';
import { getAccessToken } from '../store/auth/actionCreators';
import Endpoints from './endpoints';

export const axiosInstance = axios.create({});

const urlsSkipAuth = [
	Endpoints.AUTH.LOGIN,
	Endpoints.AUTH.REFRESH,
	Endpoints.AUTH.LOGOUT,
	Endpoints.AUTH.REGISTER,

	Endpoints.ORDER.CREATE,
	Endpoints.ORDER.PAYMENT,
	Endpoints.ORDER.ORDERINFO
];

/**
 * Необходимо избегать изменений параметров функций, т.к. это влечёт побочные эффекты.
 * См. статью про чистые функции
 * https://habr.com/ru/post/437512/
 *
 * Особенно осторожным нужно быть с изменением объектов (не только параметров функций, а вообще),
 * поскольку в JS объект представляет собой ссылку на область памяти.
 * Изменяя параметр `config`, мы влияем на него не только внутри данной функции, но и за её пределами.
 * Про копирование объектов см. https://learn.javascript.ru/object-copy
 *
 *  Переписал
 */

axiosInstance.interceptors.request.use(async (config) => {
	if (config.url && urlsSkipAuth.includes(config.url)) {
		return config;
	}
	const accessToken = await store.dispatch(getAccessToken());
	// console.warn('asdasd', accessToken);
	if (accessToken) {
		const autharization = `Bearer ${accessToken}`;
		config.headers.Authorization = autharization;
	}
	return config;
});

// ---------------------TO DO for refresh-token--------------------
// axiosInstance.interceptors.response.use(
// 	(response) => response,
// 	(error: AxiosError) => {
// 		const isLoggedIn = !!store.getState().auth.authData.accessToken;

// 		if (
// 			error.response?.status === 401 &&
// 			isLoggedIn &&
// 			error.request.url !== Endpoints.AUTH.LOGOUT
// 		) {
// 			store.dispatch(logoutUser());
// 		}

// 		throw error;
// 	}
// );

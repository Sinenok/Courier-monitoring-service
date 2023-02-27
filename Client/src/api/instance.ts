import axios from 'axios';
import { store } from '../store';
import { getAccessToken } from '../store/auth/actionCreators';
import Endpoints from './endpoints';

export const axiosInstance = axios.create({});

const urlsSkipAuth = [
	Endpoints.AUTH.LOGIN,
	Endpoints.AUTH.REFRESH,
	Endpoints.AUTH.LOGOUT,
	Endpoints.AUTH.REGISTER
];

axiosInstance.interceptors.request.use(async (config) => {
	if (config.url && urlsSkipAuth.includes(config.url)) {
		return config;
	}

	const accessToken = await store.dispatch(getAccessToken());

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
// 			// store.dispatch(logoutUser());
// 		}

// 		throw error;
// 	}
// );

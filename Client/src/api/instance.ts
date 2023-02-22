import axios, { AxiosError } from 'axios';
import { store } from '../store';
import { getAccessToken, logoutUser } from '../store/auth/actionCreators';
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
	console.log('accessTokenda', accessToken);

	if (accessToken) {
		const autharization = `Bearer ${accessToken}`;
		console.log('autharization', autharization);

		config.headers.Authorization = autharization;
		console.log('dsadsadsadsadsadsdasdsadsdas', config.headers.Authorization);
	}

	return config;
});

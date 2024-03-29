import { Dispatch } from '@reduxjs/toolkit';
import api from '../../api';
import { ILoginRequest, IRegisterResponce } from '../../api/auth/types';
import {
	loginStart,
	loginSucess,
	loginFailure,
	logoutSuccess,
	registrationStart,
	registrationSucess,
	registrationFailure,
	loadProfileStart,
	loadProfileSucess,
	loadProfileFailure
} from './authReducer';
import { history } from '../../utils/history';
// import { AxiosPromise } from 'axios';
import { store } from '..';

/**
 * Асинхронные запросы при использовании redux toolkit необходимо осуществлять через createAsyncThunk или, более свежий вариант, RTK Query
 * Технически тот вариант, который используется, допустим, но сейчас так никто не пишет
 * https://redux-toolkit.js.org/api/createAsyncThunk
 */

export const loginUser =
	(data: ILoginRequest) =>
	async (dispatch: Dispatch<any>): Promise<void> => {
		try {
			dispatch(loginStart());

			const res = await api.auth.login(data);

			dispatch(loginSucess(res.data.accessToken));
			sessionStorage.setItem('token', res.data.accessToken);
			dispatch(getProfile());
		} catch (e: any) {
			console.error('Error responce.data: ', e);

			dispatch(loginFailure(e.response.data));
		}
	};

export const logoutUser =
	() =>
	async (dispatch: Dispatch): Promise<void> => {
		try {
			await api.auth.logout();

			dispatch(logoutSuccess());

			history.push('/');
		} catch (e) {
			console.error(e);
		}
	};
export const getProfile =
	() =>
	async (dispatch: Dispatch<any>): Promise<void> => {
		try {
			dispatch(loadProfileStart());

			const res = await api.auth.getProfile();
			dispatch(loadProfileSucess({ name: res.data.name, role: res.data.role }));

			sessionStorage.setItem('userName', res.data.name);
			sessionStorage.setItem('role', res.data.role);
		} catch (e: any) {
			console.error(e);

			dispatch(loadProfileFailure(e.message));
		}
	};

// переменная для хранения запроса токена (для избежания race condition)
// let refreshTokenRequest: AxiosPromise<ILoginResponse> | null = null;

export const getAccessToken = () => (): string | null => {
	try {
		const accessToken = store.getState().auth.authData.accessToken;
		return accessToken;

		// if (refreshTokenRequest === null) {
		// refreshTokenRequest = api.auth.refreshToken();
		// console.warn('refreshTokenRequest', refreshTokenRequest);
		// }

		// const res = await refreshTokenRequest;

		// refreshTokenRequest = null;

		// dispatch(loginSucess(res.data.accessToken));

		// return res.data.accessToken;
	} catch (e) {
		console.error(e);

		return null;
	}
};

export const registerUser =
	(data: IRegisterResponce) =>
	async (dispatch: Dispatch): Promise<void> => {
		try {
			dispatch(registrationStart());

			await api.auth.register(data);

			dispatch(registrationSucess());
		} catch (e: any) {
			console.error(e.response.data);

			dispatch(registrationFailure(e.response.data));
		}
	};

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
import { store } from '..';

export const loginUser =
	(data: ILoginRequest) =>
	async (dispatch: Dispatch<any>): Promise<void> => {
		try {
			dispatch(loginStart());

			console.log('before', document.cookie);
			const res = await api.auth.login(data);
			console.log('after', document.cookie);
			console.log('data', res);

			dispatch(loginSucess(res.data.accessToken));
			dispatch(getProfile());
		} catch (e: any) {
			console.error('Error responce.data: ', e.response.data);
			console.error('Error: ', e);

			dispatch(loginFailure(e.response.data)); // был e.message
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
			console.log('profile ', res);

			dispatch(loadProfileSucess(res.data));
		} catch (e: any) {
			console.error(e);

			dispatch(loadProfileFailure(e.message));
		}
	};

// переменная для хранения запроса токена (для избежания race condition)
// let refreshTokenRequest: AxiosPromise<ILoginResponse> | null = null;

export const getAccessToken =
	() =>
	(dispatch: Dispatch<any>): string | null => {
		try {
			// if (refreshTokenRequest === null) {
			// 	console.log('qqqqq');
			// 	refreshTokenRequest = api.auth.refreshToken();
			// }

			// const res = await refreshTokenRequest;
			// console.log('token', res);
			// refreshTokenRequest = null;

			// dispatch(loginSucess(res.data.accessToken));

			// return res.data.accessToken;

			const accessToken = store.getState().auth.authData.accessToken;
			return accessToken;
		} catch (e) {
			console.error(e);

			return null;
		}
	};

export const registerUser =
	(data: IRegisterResponce) =>
	async (dispatch: Dispatch): Promise<void> => {
		try {
			console.log('data 1:', data);

			dispatch(registrationStart());

			await api.auth.register(data);
			// console.log('data reg: ', res);

			dispatch(registrationSucess());
			// console.log('bbb', res.data.isRegistered);
			// console.log('aaaa', dispatch(registrationSucess(res.data.isRegistered)));
		} catch (e: any) {
			console.error(e.response.data);
			console.log('e', e);

			dispatch(registrationFailure(e.response.data)); // был e.message
		}
	};

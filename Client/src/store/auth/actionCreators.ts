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

			const res = await api.auth.login(data);

			dispatch(loginSucess(res.data.accessToken));
			dispatch(getProfile());
		} catch (e: any) {
			console.error('Error responce.data: ', e.response.data);

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
			dispatch(registrationStart());

			await api.auth.register(data);

			dispatch(registrationSucess());
		} catch (e: any) {
			console.error(e.response.data);

			dispatch(registrationFailure(e.response.data));
		}
	};

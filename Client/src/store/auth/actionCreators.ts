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
	registrationFailure
} from './authReducer';
import { history } from '../../utils/history';

export const loginUser =
	(data: ILoginRequest) =>
	async (dispatch: Dispatch): Promise<void> => {
		try {
			dispatch(loginStart());

			const res = await api.auth.login(data);
			console.log('data', res);

			dispatch(loginSucess(res.data.accessToken));
			// dispatch(getProfile())
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

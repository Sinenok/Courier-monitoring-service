import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, initialState } from './types';

/** Интерфейс AuthState и начальный стейт для читаемости лучше вынести в отдельный файл и импортировать */
// ------------------------------ИСПРАВИЛ---------------------------------------------------------------------------

export const authReducer = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginStart: (state): AuthState => ({
			...state,
			authData: {
				...state.authData,
				isLoading: true
			}
		}),
		loginSucess: (state, action: PayloadAction<string>): AuthState => ({
			...state,
			authData: {
				...state.authData,
				accessToken: action.payload,
				isLoading: false,
				error: null
			}
		}),
		loginFailure: (state, action: PayloadAction<string>): AuthState => ({
			...state,
			authData: {
				...state.authData,
				isLoading: false,
				error: action.payload
			}
		}),
		loadProfileStart: (state): AuthState => ({
			...state,
			profileData: {
				...state.profileData,
				isLoading: true
			}
		}),
		loadProfileSucess: (state, action: PayloadAction<string>): AuthState => ({
			...state,
			profileData: {
				...state.profileData,
				profile: action.payload,
				isLoading: false,
				error: null
			}
		}),
		loadProfileFailure: (state, action: PayloadAction<string>): AuthState => ({
			...state,
			profileData: {
				...state.profileData,
				isLoading: false,
				error: action.payload
			}
		}),
		logoutSuccess: (): AuthState => initialState,

		registrationStart: (state): AuthState => ({
			...state,
			registrData: {
				...state.registrData,
				isLoading: true
			}
		}),
		registrationSucess: (state): AuthState => ({
			...state,
			registrData: {
				...state.registrData,
				isLoading: false,
				isRegistered: true,
				error: null
			}
		}),
		registrationFailure: (state, action: PayloadAction<string>): AuthState => ({
			...state,
			registrData: {
				...state.registrData,
				isLoading: false,
				error: action.payload
			}
		})
	}
});

export const {
	loadProfileStart,
	loadProfileSucess,
	loadProfileFailure,
	loginStart,
	loginSucess,
	loginFailure,
	logoutSuccess,

	registrationStart,
	registrationSucess,
	registrationFailure
} = authReducer.actions;

export default authReducer.reducer;

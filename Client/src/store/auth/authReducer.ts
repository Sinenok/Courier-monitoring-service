import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, initialState } from './types';

export const authReducer = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginStart: (state: AuthState): AuthState => ({
			...state,
			authData: {
				...state.authData,
				isLoading: true
			}
		}),
		loginSucess: (state: AuthState, action: PayloadAction<string>): AuthState => ({
			...state,
			authData: {
				...state.authData,
				accessToken: action.payload,
				isLoading: false,
				error: null
			}
		}),
		loginFailure: (state: AuthState, action: PayloadAction<string>): AuthState => ({
			...state,
			authData: {
				...state.authData,
				isLoading: false,
				error: action.payload
			}
		}),
		loadProfileStart: (state: AuthState): AuthState => ({
			...state,
			profileData: {
				...state.profileData,
				isLoading: true
			}
		}),
		loadProfileSucess: (
			state: AuthState,
			action: PayloadAction<{ name: string; role: string }>
		): AuthState => ({
			...state,
			profileData: {
				...state.profileData,
				profileName: action.payload.name,
				profileRole: action.payload.role,
				isLoading: false,
				error: null
			}
		}),
		loadProfileFailure: (state: AuthState, action: PayloadAction<string>): AuthState => ({
			...state,
			profileData: {
				...state.profileData,
				isLoading: false,
				error: action.payload
			}
		}),
		logoutSuccess: (): AuthState => initialState,

		registrationStart: (state: AuthState): AuthState => ({
			...state,
			registrData: {
				...state.registrData,
				isLoading: true
			}
		}),
		registrationSucess: (state: AuthState): AuthState => ({
			...state,
			registrData: {
				...state.registrData,
				isLoading: false,
				isRegistered: true,
				error: null
			}
		}),
		registrationFailure: (state: AuthState, action: PayloadAction<string>): AuthState => ({
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

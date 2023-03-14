export interface AuthState {
	authData: {
		accessToken: string | null;
		isLoading: boolean;
		error: string | null;
	};
	profileData: {
		profile: string | null;
		isLoading: boolean;
		error: string | null;
	};
	registrData: {
		isLoading: boolean;
		isRegistered: boolean;
		error: string | null;
	};
}

export const initialState: AuthState = {
	authData: {
		accessToken: null,
		isLoading: false,
		error: null
	},
	profileData: {
		profile: null,
		isLoading: false,
		error: null
	},
	registrData: {
		isLoading: false,
		isRegistered: false,
		error: null
	}
};

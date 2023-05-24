export interface AuthState {
	authData: {
		accessToken: string | null;
		isLoading: boolean;
		error: string | null;
	};
	profileData: {
		profileName: string | null;
		profileRole: string | null;
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
		profileName: null,
		profileRole: null,
		isLoading: false,
		error: null
	},
	registrData: {
		isLoading: false,
		isRegistered: false,
		error: null
	}
};

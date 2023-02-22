// login
export interface ILoginRequest {
	login: string;
	password: string;
}

export interface ILoginResponse {
	accessToken: string;
}

// register
export interface IRegisterResponce {
	firstName: string;
	lastName: string;
	login: string;
	mail: string;
	password: string;
	phone: string;
}

// login
export interface ILoginRequest {
	login: string;
	password: string;
}

export interface ILoginResponse {
	accessToken: string;
}

// register
// export enum UserRole {
// 	Admin = 1,
// 	User = 0,
// 	Courier = 2
// }
export interface IRegisterResponce extends ILoginRequest {
	firstName: string;
	lastName: string;
	mail: string;
	phone: string;
	role: number;
	telegramUserName: string;
}

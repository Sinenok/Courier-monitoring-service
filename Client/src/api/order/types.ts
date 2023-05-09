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

// order
export interface IOrderCreateRequest {
	senderName: string;
	senderAdress: string;
	receiverName: string;
	receiverAdress: string;
}

export interface IOrderCreateResponce {
	trackNumber: string;
}

//paymentMethods
export interface IPaymentMethodsResponce {
	code: number;
	name: string;
	created: string;
	createdUserId: string;
	modified: null;
	modifiedUserId: null;
	id: string;
}
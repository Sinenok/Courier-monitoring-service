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

export interface IOrderInfo {
	sender: string;
	recipient: string;
	deliveryAddress: string;
	plannedDeliveryDate: string;
	amountPayable: string;
	paymentMethod: string;
}

export interface IOrderList {
	quantityProducts: number;
	productDescription: string;
	shippingCost: string;
	totalPrice: string;
}

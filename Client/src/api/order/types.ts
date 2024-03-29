// order
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

//get order
export interface IOrderInfoResponce {
	senderName: string;
	senderAddress: string;
	receiverName: string;
	receiverAddress: string;
	deliveryCost: number;
	paymentMethod: number;
	productCost: number;
	productDescription: string;
	productWeight: number;
}

export interface IOrderInfoRequest extends IOrderCreateResponce {}

// Order rate
export interface IOrderRateRequest {
	courierRating: string;
	productRating: string;
}

// order
export interface IOrderCreateRequest {
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

/**
 * IOrderCreateRequest и IOrderInfoResponce идентичны или очень похожи. Если идентичны, то тупо удалить один, если похожи, то расширить один от другого
 */

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

export interface IOrderInfoRequest {
	trackNumber: string;
}

// Order rate
export interface IOrderRateRequest {
	courierRating: string;
	productRating: string;
}

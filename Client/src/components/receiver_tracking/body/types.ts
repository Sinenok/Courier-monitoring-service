export interface IOrderInfo {
	sender: string;
	senderAddress: string;
	recipient: string;
	deliveryAddress: string;
	plannedDeliveryDate: string;
	shippingCost: number;
	paymentMethod: number;
}

export interface IOrderList {
	productWeight: string;
	productDescription: string;
	amountPayable: number;
	totalPrice: number;
}

export interface IOrderTitle {
	orderStatus: number;
}

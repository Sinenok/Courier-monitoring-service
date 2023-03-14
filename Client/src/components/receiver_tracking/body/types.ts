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

export interface IOrderTitle {
	orderNumber: number;
	orderStatus: string;
}

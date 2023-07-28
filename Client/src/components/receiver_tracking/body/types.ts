/** Похожие интерфейсы уже есть на проекте, их можно переиспользовать через extends */
// ---Где увидел - исправил

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

/** Для orderStatus тоже можно было ввести enum, чтобы не было магических чисел */
export interface IOrderTitle {
	orderStatus: number;
}

export interface IOrderMap {
	trackNumber: string;
	orderStatus: number;
}

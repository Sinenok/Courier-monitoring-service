import { IOrderInfo, IOrderList, IOrderTitle } from './types';

export const orderInfo: IOrderInfo = {
	sender: 'Название магазина',
	senderAddress: 'isOrderInfoIn.senderAddress',
	recipient: 'ФИО клиента',
	deliveryAddress: 'Адрес доставки',
	plannedDeliveryDate: 'Дата доставки',
	shippingCost: 1,
	paymentMethod: 1
};

export const orderList: IOrderList = {
	productWeight: 'isOrderInfoIn.productWeight',
	productDescription: 'Описание товара',
	amountPayable: 1,
	totalPrice: 1
};

export const orderTitle: IOrderTitle = {
	orderStatus: 1
};

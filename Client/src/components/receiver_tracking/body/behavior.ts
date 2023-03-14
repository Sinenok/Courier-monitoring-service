import { IOrderInfo, IOrderList, IOrderTitle } from './types';

export const orderInfo: IOrderInfo = {
	sender: 'Название магазина',
	recipient: 'ФИО клиента',
	deliveryAddress: 'Адрес доставки',
	plannedDeliveryDate: 'Дата доставки',
	amountPayable: 'Цена покупки',
	paymentMethod: 'Карта/наличные'
};

export const orderList: IOrderList = {
	quantityProducts: 1,
	productDescription: 'Описание товара',
	shippingCost: 'Цена',
	totalPrice: 'Цена товара + дотставки'
};

export const orderTitle: IOrderTitle = {
	orderNumber: 555,
	orderStatus: 'выполнен'
};

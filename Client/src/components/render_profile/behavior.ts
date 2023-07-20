import { useEffect, useState } from 'react';
import { ResponseData } from './types';
import { getAllUserSentOrders } from '../../store/order/actionCreators';

export const useGetUserAllSentOrders = () => {
	const [allSentOrdersList, setAllSentOrdersList] = useState<ResponseData>({
		items: [],
		total: 0
	});
	useEffect(() => {
		getAllUserSentOrders().then((data) => {
			setAllSentOrdersList(data);
		});
	}, []);

	return {
		allSentOrdersList
	};
};

/** paymentMethod также заслуживает отдельный enum  */

export const getPaymentMethodName = (paymentMethod: number) => {
	if (paymentMethod === 0) {
		return 'Наличные';
	} else if (paymentMethod === 1) {
		return 'Карта';
	} else {
		return 'Онлайн';
	}
};

export const getOrderStatusName = (orderStatus: number) => {
	if (orderStatus === 0) {
		return 'Создан';
	} else if (orderStatus === 1) {
		return 'Принят курьером';
	} else if (orderStatus === 2) {
		return 'Выполняется';
	} else {
		return 'Завершен';
	}
};

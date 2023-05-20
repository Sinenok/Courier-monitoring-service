import { Dispatch } from '@reduxjs/toolkit';
import api from '../../api';
import {
	orderSendStart,
	orderSendSucess,
	orderSendFailure,
	getOrderInfoStart,
	getOrderInfoSucess,
	getOrderInfoFailure
} from './orderReducer';
import { IOrderCreateRequest, IOrderInfoRequest } from '../../api/order/types';

export const createOrder =
	(data: IOrderCreateRequest) =>
	async (dispatch: Dispatch): Promise<void> => {
		try {
			dispatch(orderSendStart());

			const res = await api.order.orderCreate(data);
			dispatch(orderSendSucess(String(res.data))); //Убрать стринг, завернуть трэк номер на бэке в объект (аналог аксес-токен)
		} catch (e: any) {
			console.error(e.response.data);

			dispatch(orderSendFailure(e.response.data));
		}
	};

export const getPaymentMethod = async () => {
	try {
		// console.log('11');

		return (await api.order.getPaymentMethods()).data;
	} catch (e: any) {
		console.error(e);
	}
};

export const getOrderInfo =
	(data: IOrderInfoRequest) =>
	async (dispatch: Dispatch<any>): Promise<void> => {
		try {
			dispatch(getOrderInfoStart());

			const res = await api.order.getOrder(data);

			dispatch(getOrderInfoSucess(res.data));
		} catch (e: any) {
			console.error(e);
			dispatch(getOrderInfoFailure(e.response.data));
		}
	};

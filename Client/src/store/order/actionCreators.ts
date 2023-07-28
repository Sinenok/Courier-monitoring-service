import { Dispatch } from '@reduxjs/toolkit';
import api from '../../api';
import {
	orderSendStart,
	orderSendSucess,
	orderSendFailure,
	getOrderInfoStart,
	getOrderInfoSucess,
	getOrderInfoFailure,
	getOrderRateStart,
	getOrderRateSucess,
	getOrderRateFailure
} from './orderReducer';
import { IOrderInfoRequest, IOrderInfoResponce, IOrderRateRequest } from '../../api/order/types';

export const createOrder =
	(data: IOrderInfoResponce) =>
	async (dispatch: Dispatch): Promise<void> => {
		try {
			dispatch(orderSendStart());

			const res = await api.order.orderCreate(data);
			dispatch(orderSendSucess(String(res.data)));
		} catch (e: any) {
			console.error(e.response.data);

			dispatch(orderSendFailure(e.response.data));
		}
	};

export const getPaymentMethod = async () => {
	try {
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

export const getAllUserSentOrders = async () => {
	try {
		return (await api.order.getAllSentOrders()).data;
	} catch (e: any) {
		console.error(e);
	}
};

export const rateTheOrder =
	(data: IOrderRateRequest) =>
	async (dispatch: Dispatch): Promise<void> => {
		try {
			dispatch(getOrderRateStart());

			await api.order.orderRateCreate(data);
			dispatch(getOrderRateSucess());
		} catch (e: any) {
			console.error(e.response.data);

			dispatch(getOrderRateFailure(e.response.data));
		}
	};

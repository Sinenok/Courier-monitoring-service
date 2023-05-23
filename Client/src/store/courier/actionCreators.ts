import { Dispatch } from '@reduxjs/toolkit';
import api from '../../api';
import {
	takeActiveOrderStart,
	takeActiveOrderSucess,
	takeActiveOrderFailure
} from './courierReducer';
import { IOrderTakeRequest } from '../../api/courier/types';

export const takeOrder =
	(data: IOrderTakeRequest) =>
	async (dispatch: Dispatch): Promise<void> => {
		try {
			dispatch(takeActiveOrderStart());
			console.log('111');
			const res = await api.courier.orderCreate(data);
			console.log('ssss', res.data);

			dispatch(takeActiveOrderSucess(String(res.data)));
			// getAllUserActiveOrders();
			sessionStorage.setItem('orderId', String(res.data));
		} catch (e: any) {
			console.error(e.response.data);

			dispatch(takeActiveOrderFailure(e.response.data));
		}
	};

export const getAllUserActiveOrders = async () => {
	try {
		// console.log('11');

		return (await api.courier.getForCourierActiveOrders()).data;
	} catch (e: any) {
		console.error(e);
	}
};

import { Dispatch } from '@reduxjs/toolkit';
import api from '../../api';
import {
	takeActiveOrderStart,
	takeActiveOrderSucess,
	takeActiveOrderFailure,
	takeCompleteActiveOrderStart,
	takeCompleteActiveOrderSucess,
	takeCompleteActiveOrderFailure,
	getCoordinateStart,
	getCoordinateSucess,
	getCoordinateFailure
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
			// sessionStorage.setItem('orderId', String(res.data));
		} catch (e: any) {
			console.error(e.response.data);

			dispatch(takeActiveOrderFailure(e.response.data));
		}
	};

export const getAllUserActiveOrders = async (createdOrders: number) => {
	try {
		if (createdOrders === 0) {
			return (await api.courier.getForCourierActiveOrders(createdOrders)).data;
		} else if (createdOrders === 1) {
			return (await api.courier.getAcceptedCourierOrders(createdOrders)).data;
		}
	} catch (e: any) {
		console.error(e);
	}
};

export const completeOrder =
	(data: IOrderTakeRequest) =>
	async (dispatch: Dispatch): Promise<void> => {
		try {
			dispatch(takeCompleteActiveOrderStart());
			console.log('111');
			const res = await api.courier.orderComplete(data);
			console.log('ssss', res.data);

			dispatch(takeCompleteActiveOrderSucess(String(res.data)));
			// getAllUserActiveOrders();
			// sessionStorage.setItem('orderId', String(res.data));
		} catch (e: any) {
			console.error(e.response.data);

			dispatch(takeCompleteActiveOrderFailure(e.response.data));
		}
	};

// ----------------------------------Coordinate--------------------------------------------
// export const getCoordinate = async (orderId: string) => {
// 	try {
// 		return (await api.courier.getCourierCoordinate(orderId)).data;
// 	} catch (e: any) {
// 		console.error(e);
// 	}
// };
export const getCoordinate =
	(data: IOrderTakeRequest) =>
	async (dispatch: Dispatch): Promise<void> => {
		try {
			// dispatch(getCoordinateStart());
			// console.log('111');
			const res = await api.courier.getCourierCoordinate(data);
			// console.log('ssss', res.data);

			dispatch(getCoordinateSucess({ s: res.data.s, e: res.data.e }));
			// getAllUserActiveOrders();
			// sessionStorage.setItem('orderId', String(res.data));
		} catch (e: any) {
			console.error(e.response.data);

			dispatch(getCoordinateFailure(e.response.data));
		}
	};
// ----------------------------------Coordinate--------------------------------------------

import { Dispatch } from '@reduxjs/toolkit';
import api from '../../api';
import {
	takeActiveOrderStart,
	takeActiveOrderSucess,
	takeActiveOrderFailure,
	takeCompleteActiveOrderStart,
	takeCompleteActiveOrderSucess,
	takeCompleteActiveOrderFailure,
	// getCoordinateStart,
	getCoordinateSucess,
	getCoordinateFailure
} from './courierReducer';
import { IOrderTakeRequest, IOrderTakesRequest } from '../../api/courier/types';

export const takeOrder =
	(data: IOrderTakeRequest) =>
	async (dispatch: Dispatch): Promise<void> => {
		try {
			dispatch(takeActiveOrderStart());
			const res = await api.courier.orderCreate(data);

			dispatch(takeActiveOrderSucess(String(res.data)));
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
			const res = await api.courier.orderComplete(data);

			dispatch(takeCompleteActiveOrderSucess(String(res.data)));
		} catch (e: any) {
			console.error(e.response.data);

			dispatch(takeCompleteActiveOrderFailure(e.response.data));
		}
	};

// ----------------------------------Coordinate--------------------------------------------

export const getCoordinate =
	(data: IOrderTakesRequest) =>
	async (dispatch: Dispatch): Promise<void> => {
		try {
			// dispatch(getCoordinateStart());
			const res = await api.courier.getCourierCoordinate(data);

			dispatch(getCoordinateSucess({ s: res.data.s, e: res.data.e }));
		} catch (e: any) {
			console.error(e.response.data);

			dispatch(getCoordinateFailure(e.response.data));
		}
	};
// ----------------------------------Coordinate--------------------------------------------

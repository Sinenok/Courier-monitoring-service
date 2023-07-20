import Endpoints from '../endpoints';
import { axiosInstance } from '../instance';
import { AxiosPromise } from 'axios';
import {
	IGetCoordinateResponce,
	IOrderTakeRequest,
	IOrderTakeResponce,
	IOrderTakesRequest
} from './types';

export const getForCourierActiveOrders = (statusId: number): AxiosPromise => {
	return axiosInstance.get(Endpoints.COURIER.CREATEDORDERS, { params: { statusId } });
};

export const orderCreate = (params: IOrderTakeRequest): AxiosPromise<IOrderTakeResponce> => {
	return axiosInstance.post(Endpoints.COURIER.TAKEORDER, null, { params });
};

export const getAcceptedCourierOrders = (statusId: number): AxiosPromise => {
	return axiosInstance.get(Endpoints.COURIER.COURIERORDERS, { params: { statusId } });
};

export const orderComplete = (params: IOrderTakeRequest): AxiosPromise<IOrderTakeResponce> => {
	return axiosInstance.post(Endpoints.COURIER.COMPLETEORDER, null, { params });
};

export const getCourierCoordinate = (
	params: IOrderTakesRequest
): AxiosPromise<IGetCoordinateResponce> => {
	return axiosInstance.get(`${Endpoints.COURIER.COURIERCOORDINATE}/${params.trackNumber}`);
};

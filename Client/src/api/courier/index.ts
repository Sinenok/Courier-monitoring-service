import Endpoints from '../endpoints';
import { axiosInstance } from '../instance';
import { AxiosPromise } from 'axios';
import { IOrderTakeRequest, IOrderTakeResponce } from './types';

export const getForCourierActiveOrders = (): AxiosPromise => {
	return axiosInstance.get(Endpoints.COURIER.CREATEDORDERS);
};

export const orderCreate = (params: IOrderTakeRequest): AxiosPromise<IOrderTakeResponce> => {
	return axiosInstance.post(Endpoints.COURIER.TAKEORDER, null, { params });
};

import Endpoints from '../endpoints';
import { axiosInstance } from '../instance';
import {
	IOrderCreateRequest,
	IOrderCreateResponce,
	IOrderInfoRequest,
	IOrderInfoResponce,
	IOrderRateRequest
} from './types';
import { AxiosPromise } from 'axios';

export const orderCreate = (params: IOrderCreateRequest): AxiosPromise<IOrderCreateResponce> => {
	return axiosInstance.post(Endpoints.ORDER.CREATE, params);
};

export const getPaymentMethods = (): AxiosPromise => {
	return axiosInstance.get(Endpoints.ORDER.PAYMENT);
};

export const getOrder = (params: IOrderInfoRequest): AxiosPromise<IOrderInfoResponce> => {
	return axiosInstance.get(`${Endpoints.ORDER.ORDERINFO}/${params.trackNumber}`);
};

// --------------USER SENT ORDERS-----------------------------------------
export const getAllSentOrders = (): AxiosPromise => {
	return axiosInstance.get(Endpoints.ORDER.SENTORDERS);
};
// --------------USER SENT ORDERS-----------------------------------------

export const orderRateCreate = (params: IOrderRateRequest): AxiosPromise<any> => {
	return axiosInstance.post(Endpoints.ORDER.ORDERRATE, params);
};

import Endpoints from '../endpoints';
import { axiosInstance } from '../instance';
import { IOrderCreateRequest, IOrderCreateResponce } from './types';
import { AxiosPromise } from 'axios';

export const orderCreate = (params: IOrderCreateRequest): AxiosPromise<IOrderCreateResponce> => {
	return axiosInstance.post(Endpoints.ORDER.CREATE, params);
};

export const getPaymentMethods = (): AxiosPromise => {
	return axiosInstance.get(Endpoints.ORDER.PAYMENT);
};

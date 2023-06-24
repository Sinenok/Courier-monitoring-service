import Endpoints from '../endpoints';
import { axiosInstance } from '../instance';
import { AxiosPromise } from 'axios';
import { IOrderTakeRequest, IOrderTakeResponce, IOrderTakesRequest } from './types';
import { ResponseDataCoordinate } from '../../components/receiver_tracking/courier_tracking_map/types';

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
	console.log('last');

	return axiosInstance.post(Endpoints.COURIER.COMPLETEORDER, null, { params });
};

// ------------coordinate--------------
// export const getCourierCoordinate = (trackNumber: IOrderTakesRequest): AxiosPromise<any> => {
// 	return axiosInstance.post(Endpoints.COURIER.COURIERCOORDINATE, { trackNumber });
// };

export const getCourierCoordinate = (params: IOrderTakesRequest): AxiosPromise<any> => {
	return axiosInstance.get(`${Endpoints.COURIER.COURIERCOORDINATE}/${params.trackNumber}`);
};

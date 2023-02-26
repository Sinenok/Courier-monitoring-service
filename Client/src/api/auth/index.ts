import Endpoints from '../endpoints';
import { axiosInstance } from '../instance';
import { ILoginRequest, ILoginResponse, IRegisterResponce } from './types';
import { AxiosPromise } from 'axios';

export const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> =>
	axiosInstance.post(Endpoints.AUTH.LOGIN, params, { withCredentials: true });

export const refreshToken = (): AxiosPromise<ILoginResponse> =>
	axiosInstance.post(Endpoints.AUTH.REFRESH);

export const logout = (): AxiosPromise => {
	return axiosInstance.get(Endpoints.AUTH.LOGOUT);
};

export const getProfile = (): AxiosPromise => axiosInstance.get(Endpoints.AUTH.PROFILE);

export const register = (params: IRegisterResponce): AxiosPromise => {
	return axiosInstance.post(Endpoints.AUTH.REGISTER, params);
};

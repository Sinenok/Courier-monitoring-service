import Endpoints from '../endpoints';
import { axiosInstance } from '../instance';
import { ILoginRequest, ILoginResponse } from './types';
import { AxiosPromise } from 'axios';

export const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> =>
	axiosInstance.post(Endpoints.AUTH.LOGIN, params);

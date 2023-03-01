import Endpoints from '../endpoints';
import { axiosInstance } from '../instance';
import { ILoginRequest, ILoginResponse, IRegisterResponce } from './types';
import { AxiosPromise } from 'axios';

/** 
 * Апи лучше реализовывать как классы (один модуль, который плюс-минус соответствует модулю в store - один класс),
 * а не как объекты или отдельные функции, т.к. по мере добавления модулей это будет нечитаемо.
 * Сами эндпоинты можно хранить, например, внутри методов класса, но не в глобальном объекте.
 * 
 * axiosInstance также читабельнее релизовать как класс, внутри которого зашить базовый эндпоинт и прочую конфигурацию (в т.ч. интерсепторы).
 * Впоследствии класс axiosInstance можно передавать в конструкторы классов-апи.
 * 
 * Запросы нужно типизировать с дженериком, типа как на 22 строке AxiosPromise<ILoginResponse>, иначе они будут возвращать
 * AxiosPromise<any>, с чем впоследствии будет неудобно работать
 */
  

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

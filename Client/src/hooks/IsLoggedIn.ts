import { useSelector } from 'react-redux';
import { IRootState } from '../store';

// export const isLogged = () => {
// 	return useSelector((state: IRootState) => !!state.auth.authData.accessToken);
// };

// export const getsProfile = () => {
// 	return useSelector((state: IRootState) => state.auth.profileData.profile);
// };

export const isRegistered = () => {
	return useSelector((state: IRootState) => state.auth.registrData.isRegistered);
};
// !!!!
export const isRegisterLoad = () => {
	return useSelector((state: IRootState) => state.auth.registrData.isLoading);
};
// !!!
export const isOrderSending = () => {
	return useSelector((state: IRootState) => state.order.createOrderData.trackNumber);
};

export const isLogged = () => {
	useSelector((state: IRootState) => !!state.auth.authData.accessToken);
	return !!sessionStorage.getItem('token');
};

export const getsProfile = () => {
	useSelector((state: IRootState) => state.auth.profileData.profileName);
	return sessionStorage.getItem('userName');
};

export const getsProfileRole = () => {
	useSelector((state: IRootState) => state.auth.profileData.profileRole);
	return sessionStorage.getItem('role');
};

export const getsOrderInfo = () => {
	return useSelector((state: IRootState) => state.order.getOrderInfoData.order);
};

// ----------------------------------------Courier-----------------------------------------------
export const getsOrderId = () => {
	return useSelector((state: IRootState) => state.courier.takeActiveOrderData.orderId);
	// return sessionStorage.getItem('orderId');
};
export const getsCompleteOrderId = () => {
	return useSelector((state: IRootState) => state.courier.completeOrderData.orderId);
	// return sessionStorage.getItem('completeOrderId');
};
// ----------------------------------------Courier-----------------------------------------------
// -----------------------Coordinate--------------------------------------------------------
export const getsS = () => {
	return useSelector((state: IRootState) => state.courier.getCoordinate.s);
};
export const getse = () => {
	return useSelector((state: IRootState) => state.courier.getCoordinate.e);
};

export const flagCoord = () => {
	return useSelector((state: IRootState) => state.courier.getCoordinate.isLoading);
};

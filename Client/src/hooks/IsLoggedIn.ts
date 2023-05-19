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

export const isOrderSending = () => {
	return useSelector((state: IRootState) => state.order.createOrderData.trackNumber);
};

export const isLogged = () => {
	useSelector((state: IRootState) => !!state.auth.authData.accessToken);
	return !!sessionStorage.getItem('token');
};

export const getsProfile = () => {
	useSelector((state: IRootState) => state.auth.profileData.profile);
	return sessionStorage.getItem('userName');
};

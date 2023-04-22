import { useSelector } from 'react-redux';
import { IRootState } from '../store';

export const isLogged = () => {
	return useSelector((state: IRootState) => !!state.auth.authData.accessToken);
};

export const getsProfile = () => {
	return useSelector((state: IRootState) => state.auth.profileData.profile);
};

export const isRegistered = () => {
	return useSelector((state: IRootState) => state.auth.registrData.isRegistered);
};
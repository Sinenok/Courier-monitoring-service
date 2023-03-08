import { useSelector } from 'react-redux';
import { IRootState } from '../store';

export const isLogged = () => {
	return useSelector((state: IRootState) => !!state.auth.authData.accessToken);
};

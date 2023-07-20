import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../../store';
import { IUseOrderInfoResult } from './types';
import { getOrderInfo } from '../../../store/order/actionCreators';

export const useOrderInfo = (): IUseOrderInfoResult => {
	const dispatch = useAppDispatch();
	const [trackNumber, setTrackNumber] = useState('');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		dispatch(getOrderInfo({ trackNumber }));
	};

	return {
		trackNumber,
		setTrackNumber,
		handleSubmit
	};
};

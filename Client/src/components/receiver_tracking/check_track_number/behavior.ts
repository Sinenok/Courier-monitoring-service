import { FormEvent, useState } from 'react';
// import { IOrderInfoResponce } from '../../../api/order/types';
import { useAppDispatch } from '../../../store';
import { IUseOrderInfoResult } from './types';
import { getOrderInfo } from '../../../store/order/actionCreators';

export const useOrderInfo = (): IUseOrderInfoResult => {
	const dispatch = useAppDispatch();
	const [trackNumber, setTrackNumber] = useState('');
	// const [orderInfo, setOrderInfo] = useState<IOrderInfoResponce>();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		dispatch(getOrderInfo({ trackNumber }));

		// useEffect(() => {
		// 	getOrderInfo({ trackNumber }).then((data) => {
		// 		setOrderInfo(data);
		// 	});
		// }, []);
	};

	return {
		trackNumber,
		setTrackNumber,
		handleSubmit
	};
};

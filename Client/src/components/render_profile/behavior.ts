import { useEffect, useState } from 'react';
import { ResponseData } from './types';
import { getAllUserSentOrders } from '../../store/order/actionCreators';

export const useGetUserAllSentOrders = () => {
	const [allSentOrdersList, setAllSentOrdersList] = useState<ResponseData>({
		items: [],
		total: 0
	});
	useEffect(() => {
		getAllUserSentOrders().then((data) => {
			setAllSentOrdersList(data);
		});
	}, []);

	return {
		allSentOrdersList
	};
};

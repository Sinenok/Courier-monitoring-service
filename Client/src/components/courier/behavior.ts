import { useEffect, useState } from 'react';
import { ResponseDataActiveOrders } from './types';
import { getAllUserActiveOrders } from '../../store/courier/actionCreators';

export const useGetActiveOrders = (createdOrders: number) => {
	const [allActiveOrders, setAllActiveOrders] = useState<ResponseDataActiveOrders>({
		items: [],
		total: 0
	});
	useEffect(() => {
		getAllUserActiveOrders(createdOrders).then((data) => {
			setAllActiveOrders(data);
		});
	}, []);

	return {
		allActiveOrders
	};
};

import { useEffect, useState } from 'react';
import { ResponseDataActiveOrders } from './types';
import { getAllUserActiveOrders } from '../../store/courier/actionCreators';
// import { useAppDispatch } from '../../store';

export const useGetActiveOrders = () => {
	const [allActiveOrders, setAllActiveOrders] = useState<ResponseDataActiveOrders>({
		items: [],
		total: 0
	});
	useEffect(() => {
		getAllUserActiveOrders().then((data) => {
			setAllActiveOrders(data);
		});
	}, []);

	return {
		allActiveOrders
	};
};

// export const useTakeOrder = (): ITakeUserOrderResult => {
// 	const dispatch = useAppDispatch();

// 	const [orderId, setOrderId] = useState("");

// 	const handleSubmit = (e: FormEvent) => {
// 		e.preventDefault();
// 		// dispatch(loginUser({ login, password }));
// 		console.log('id' orderId);
// 	};

// 	return {
// 		orderId,
// 		setOrderId,
// 		handleSubmit
// 	};
// };

// export const handleTakeOrder = (event: FormEvent, orderId: string) => {
// 	event.preventDefault();
// 	const dispatch = useAppDispatch();
// 	// dispatch(takeOrder({ orderId }));
// 	console.log('aaa', orderId);
// };

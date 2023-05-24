import { useEffect, useState } from 'react';
import { ResponseDataCoordinate } from './types';
import { getCoordinate } from '../../../store/courier/actionCreators';

// export const useGetCoordinate = (orderId: string) => {
// 	const [coordinate, setCoordinate] = useState<ResponseDataCoordinate>({
// 		s: '',
// 		e: ''
// 	});
// 	useEffect(() => {
// 		getCoordinate(orderId).then((data) => {
// 			setCoordinate(data);
// 		});
// 	}, []);

// 	return {
// 		coordinate
// 	};
// };
// export const useGetCoordinate = (orderId: string) => {
// 	const [coordinate, setCoordinate] = useState<ResponseDataCoordinate>({
// 		s: '',
// 		e: ''
// 	});

// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			getCoordinate(orderId).then((response) => {
// 				setCoordinate(response.data);
// 			});
// 		}, 2000);

// 		return () => clearInterval(interval);
// 	}, [orderId]);

// 	return coordinate;
// };
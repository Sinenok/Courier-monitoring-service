import { useState, useCallback, FormEvent } from 'react';
import { useAppDispatch } from '../../store';
import { rateTheOrder } from '../../store/order/actionCreators';
import { IUseOrderRating } from './types';

export const useOrderRating = (): IUseOrderRating => {
	const [courierRating, setCourierRating] = useState('');
	const [productRating, setProductRating] = useState('');

	const dispatch = useAppDispatch();

	const handleSubmit = useCallback(
		(e: FormEvent) => {
			e.preventDefault();

			dispatch(
				rateTheOrder({
					courierRating,
					productRating
				})
			);
		},
		[courierRating, productRating]
	);

	return {
		courierRating,
		setCourierRating,
		productRating,
		setProductRating,
		handleSubmit
	};
};

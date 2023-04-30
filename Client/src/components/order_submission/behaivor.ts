import { useState, useEffect, useCallback, FormEvent } from 'react';
import { IUseOrderSubmissionResult } from './types';
import { useAppDispatch } from '../../store';
import { createOrder, getPaymentMethod } from '../../store/order/actionCreators';
import { IPaymentMethodsResponce } from '../../api/order/types';

export const useOrderSubmission = (): IUseOrderSubmissionResult => {
	const [senderName, setSenderName] = useState('');
	const [senderAdress, setSenderAdress] = useState('');
	const [receiverName, setReceiverName] = useState('');
	const [receiverAdress, setReceiverAdress] = useState('');

	const dispatch = useAppDispatch();

	const handleSubmit = useCallback(
		(e: FormEvent) => {
			e.preventDefault();

			dispatch(createOrder({ senderName, senderAdress, receiverName, receiverAdress }));
		},
		[senderName, senderAdress, receiverName, receiverAdress]
	);

	return {
		senderName,
		setSenderName,
		senderAdress,
		setSenderAdress,
		receiverName,
		setReceiverName,
		receiverAdress,
		setReceiverAdress,
		handleSubmit
	};
};

export const usePaymentMethods = () => {
	const [paymentMethodList, setPaymentMethodList] = useState<IPaymentMethodsResponce[]>([]);
	useEffect(() => {
		getPaymentMethod().then((data) => {
			setPaymentMethodList(data);
		});
	}, []);

	return {
		paymentMethodList
	};
};

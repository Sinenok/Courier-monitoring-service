import { useState, useEffect, useCallback, FormEvent } from 'react';
import { IUseOrderSubmissionResult } from './types';
import { useAppDispatch } from '../../store';
import { createOrder, getPaymentMethod } from '../../store/order/actionCreators';
import { IPaymentMethodsResponce } from '../../api/order/types';

export const useOrderSubmission = (): IUseOrderSubmissionResult => {
	const [senderName, setSenderName] = useState('');
	const [senderAddress, setSenderAdress] = useState('');
	const [receiverName, setReceiverName] = useState('');
	const [receiverAddress, setReceiverAdress] = useState('');

	const [deliveryCost, setDeliveryCost] = useState(0.0);
	const [paymentMethod, setPaymentMethod] = useState<number>(2);
	const [productCost, setProductCost] = useState(0.0);
	const [productDescription, setProductDescription] = useState('');
	const [productWeight, setProductWeight] = useState(0.0);

	const dispatch = useAppDispatch();

	const handleSubmit = useCallback(
		(e: FormEvent) => {
			/** Для чего везде используется preventDefault? */
			e.preventDefault();

			dispatch(
				createOrder({
					senderName,
					senderAddress,
					receiverName,
					receiverAddress,
					deliveryCost,
					paymentMethod,
					productCost,
					productDescription,
					productWeight
				})
			);
		},
		[
			senderName,
			senderAddress,
			receiverName,
			receiverAddress,
			deliveryCost,
			paymentMethod,
			productCost,
			productDescription,
			productWeight
		]
	);

	return {
		senderName,
		setSenderName,
		senderAddress,
		setSenderAdress,
		receiverName,
		setReceiverName,
		receiverAddress,
		setReceiverAdress,

		deliveryCost,
		setDeliveryCost,
		paymentMethod,
		setPaymentMethod,
		productCost,
		setProductCost,
		productDescription,
		setProductDescription,
		productWeight,
		setProductWeight,
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

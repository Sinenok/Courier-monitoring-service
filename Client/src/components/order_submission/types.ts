import React, { FormEvent } from 'react';
import { IOrderInfoResponce } from '../../api/order/types';
export interface IUseOrderSubmissionResult extends IOrderInfoResponce {
	setSenderName: React.Dispatch<React.SetStateAction<string>>;
	setSenderAdress: React.Dispatch<React.SetStateAction<string>>;
	setReceiverName: React.Dispatch<React.SetStateAction<string>>;
	setReceiverAdress: React.Dispatch<React.SetStateAction<string>>;
	setDeliveryCost: React.Dispatch<React.SetStateAction<number>>;
	setPaymentMethod: React.Dispatch<React.SetStateAction<number>>;
	setProductCost: React.Dispatch<React.SetStateAction<number>>;
	setProductDescription: React.Dispatch<React.SetStateAction<string>>;
	setProductWeight: React.Dispatch<React.SetStateAction<number>>;
	handleSubmit: (e: FormEvent) => void;
}

import React, { FormEvent } from 'react';
export interface IUseOrderSubmissionResult {
	senderName: string;
	setSenderName: React.Dispatch<React.SetStateAction<string>>;
	senderAddress: string;
	setSenderAdress: React.Dispatch<React.SetStateAction<string>>;
	receiverName: string;
	setReceiverName: React.Dispatch<React.SetStateAction<string>>;
	receiverAddress: string;
	setReceiverAdress: React.Dispatch<React.SetStateAction<string>>;
	deliveryCost: number;
	setDeliveryCost: React.Dispatch<React.SetStateAction<number>>;
	paymentMethod: number;
	setPaymentMethod: React.Dispatch<React.SetStateAction<number>>;
	productCost: number;
	setProductCost: React.Dispatch<React.SetStateAction<number>>;
	productDescription: string;
	setProductDescription: React.Dispatch<React.SetStateAction<string>>;
	productWeight: number;
	setProductWeight: React.Dispatch<React.SetStateAction<number>>;
	handleSubmit: (e: FormEvent) => void;
}

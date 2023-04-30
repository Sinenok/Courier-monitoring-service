import React, { FormEvent } from 'react';
export interface IUseOrderSubmissionResult {
	senderName: string;
	setSenderName: React.Dispatch<React.SetStateAction<string>>;
	senderAdress: string;
	setSenderAdress: React.Dispatch<React.SetStateAction<string>>;
	receiverName: string;
	setReceiverName: React.Dispatch<React.SetStateAction<string>>;
	receiverAdress: string;
	setReceiverAdress: React.Dispatch<React.SetStateAction<string>>;
	handleSubmit: (e: FormEvent) => void;
}

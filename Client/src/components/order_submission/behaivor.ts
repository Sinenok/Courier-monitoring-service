import { useState } from 'react';
import { IUseOrderSubmissionResult } from './types';

export const useOrderSubmission = (): IUseOrderSubmissionResult => {
	const [senderFirstName, setSenderFirstName] = useState('');
	const [senderAddress, setSenderAddress] = useState('');
	const [receiverFirstName, setReceiverFirstName] = useState('');
	const [receiverAddress, setReceiverAddress] = useState('');

	return {
		senderFirstName,
		setSenderFirstName,
		senderAddress,
		setSenderAddress,
		receiverFirstName,
		setReceiverFirstName,
		receiverAddress,
		setReceiverAddress
	};
};

import React, { FormEvent } from 'react';
export interface IUseOrderSubmissionResult {
	senderFirstName: string;
	setSenderFirstName: React.Dispatch<React.SetStateAction<string>>;
	senderAddress: string;
	setSenderAddress: React.Dispatch<React.SetStateAction<string>>;
	receiverFirstName: string;
	setReceiverFirstName: React.Dispatch<React.SetStateAction<string>>;
	receiverAddress: string;
	setReceiverAddress: React.Dispatch<React.SetStateAction<string>>;
	// handleSubmit: (e: FormEvent) => void;
}

import React, { FormEvent } from 'react';
export interface IUseOrderInfoResult {
	trackNumber: string;
	setTrackNumber: React.Dispatch<React.SetStateAction<string>>;
	handleSubmit: (e: FormEvent) => void;
}

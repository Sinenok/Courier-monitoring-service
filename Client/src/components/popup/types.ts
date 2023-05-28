import React, { FormEvent } from 'react';
export interface IUseOrderRating {
	courierRating: string;
	setCourierRating: React.Dispatch<React.SetStateAction<string>>;
	productRating: string;
	setProductRating: React.Dispatch<React.SetStateAction<string>>;
	handleSubmit: (e: FormEvent) => void;
}
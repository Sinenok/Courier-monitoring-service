import React, { FormEvent } from 'react';
import { IOrderRateRequest } from '../../api/order/types';
export interface IUseOrderRating extends IOrderRateRequest {
	setCourierRating: React.Dispatch<React.SetStateAction<string>>;
	setProductRating: React.Dispatch<React.SetStateAction<string>>;
	handleSubmit: (e: FormEvent) => void;
}

export interface IPopup {
	show: boolean;
	handleClose: () => void;
}

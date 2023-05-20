export interface OrderState {
	createOrderData: {
		isLoading: boolean;
		isSending: boolean;
		error: string | null;
		trackNumber: string | null;
	};
	getOrderInfoData: {
		isLoading: boolean;
		error: string | null;
		order: any | null;
	};
}

export const initialState: OrderState = {
	createOrderData: {
		isLoading: false,
		isSending: false,
		error: null,
		trackNumber: null
	},
	getOrderInfoData: {
		isLoading: false,
		error: null,
		order: null
	}
};

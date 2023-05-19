export interface OrderState {
	createOrderData: {
		isLoading: boolean;
		isSending: boolean;
		error: string | null;
		trackNumber: string | null;
	};
}

export const initialState: OrderState = {
	createOrderData: {
		isLoading: false,
		isSending: false,
		error: null,
		trackNumber: null
	}
};

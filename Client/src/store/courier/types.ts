export interface OrderState {
	takeActiveOrderData: {
		isLoading: boolean;
		isTaking: boolean;
		error: string | null;
		orderId: string | null;
	};
}

export const initialState: OrderState = {
	takeActiveOrderData: {
		isLoading: false,
		isTaking: false,
		error: null,
		orderId: null
	}
};

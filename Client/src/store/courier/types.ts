export interface OrderState {
	takeActiveOrderData: {
		isLoading: boolean;
		isTaking: boolean;
		error: string | null;
		orderId: string | null;
	};
	completeOrderData: {
		isLoading: boolean;
		isComplete: boolean;
		error: string | null;
		orderId: string | null;
	};
	getCoordinate: {
		isLoading: boolean;
		isComplete: boolean;
		error: string | null;
		s: string | null;
		e: string | null;
	};
}

export const initialState: OrderState = {
	takeActiveOrderData: {
		isLoading: false,
		isTaking: false,
		error: null,
		orderId: null
	},
	completeOrderData: {
		isLoading: false,
		isComplete: false,
		error: null,
		orderId: null
	},
	getCoordinate: {
		isLoading: false,
		isComplete: false,
		error: null,
		s: null,
		e: null
	}
};

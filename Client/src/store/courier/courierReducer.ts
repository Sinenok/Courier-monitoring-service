import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState, OrderState } from './types';

export const orderReducer = createSlice({
	name: 'courier',
	initialState,
	reducers: {
		takeActiveOrderStart: (state): OrderState => ({
			...state,
			takeActiveOrderData: {
				...state.takeActiveOrderData,
				isLoading: true
			}
		}),
		takeActiveOrderSucess: (state, action: PayloadAction<string>): OrderState => ({
			...state,
			takeActiveOrderData: {
				...state.takeActiveOrderData,
				isLoading: false,
				isTaking: true,
				error: null,
				orderId: action.payload
			}
		}),
		takeActiveOrderFailure: (state, action: PayloadAction<string>): OrderState => ({
			...state,
			takeActiveOrderData: {
				...state.takeActiveOrderData,
				isLoading: false,
				error: action.payload
			}
		})
	}
});

export const { takeActiveOrderStart, takeActiveOrderSucess, takeActiveOrderFailure } =
	orderReducer.actions;

export default orderReducer.reducer;

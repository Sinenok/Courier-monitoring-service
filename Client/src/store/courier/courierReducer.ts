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
		}),

		takeCompleteActiveOrderStart: (state): OrderState => ({
			...state,
			completeOrderData: {
				...state.completeOrderData,
				isLoading: true
			}
		}),
		takeCompleteActiveOrderSucess: (state, action: PayloadAction<string>): OrderState => ({
			...state,
			completeOrderData: {
				...state.completeOrderData,
				isLoading: false,
				isComplete: true,
				error: null,
				orderId: action.payload
			}
		}),
		takeCompleteActiveOrderFailure: (state, action: PayloadAction<string>): OrderState => ({
			...state,
			completeOrderData: {
				...state.completeOrderData,
				isLoading: false,
				error: action.payload
			}
		}),

		getCoordinateStart: (state): OrderState => ({
			...state,
			getCoordinate: {
				...state.getCoordinate,
				isLoading: true
			}
		}),
		getCoordinateSucess: (state, action: PayloadAction<{ s: string; e: string }>): OrderState => ({
			...state,
			getCoordinate: {
				...state.getCoordinate,
				isLoading: false,
				isComplete: true,
				error: null,
				s: action.payload.s,
				e: action.payload.e
			}
		}),
		getCoordinateFailure: (state, action: PayloadAction<string>): OrderState => ({
			...state,
			getCoordinate: {
				...state.getCoordinate,
				isLoading: false,
				error: action.payload
			}
		})
	}
});

export const {
	takeActiveOrderStart,
	takeActiveOrderSucess,
	takeActiveOrderFailure,

	takeCompleteActiveOrderStart,
	takeCompleteActiveOrderSucess,
	takeCompleteActiveOrderFailure,

	getCoordinateStart,
	getCoordinateSucess,
	getCoordinateFailure
} = orderReducer.actions;

export default orderReducer.reducer;

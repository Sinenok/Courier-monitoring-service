import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState, OrderState } from './types';

export const orderReducer = createSlice({
	name: 'courier',
	initialState,
	reducers: {
		/** не типизирован state, IDE выдает ошибку */
		// ИСПРАВИЛ НО ВОЗМОЖНО НЕ ПРАВИЛЬНО
		takeActiveOrderStart: (state: OrderState): OrderState => ({
			...state,
			takeActiveOrderData: {
				...state.takeActiveOrderData,
				isLoading: true
			}
		}),
		takeActiveOrderSucess: (state: OrderState, action: PayloadAction<string>): OrderState => ({
			...state,
			takeActiveOrderData: {
				...state.takeActiveOrderData,
				isLoading: false,
				isTaking: true,
				error: null,
				orderId: action.payload
			}
		}),
		takeActiveOrderFailure: (state: OrderState, action: PayloadAction<string>): OrderState => ({
			...state,
			takeActiveOrderData: {
				...state.takeActiveOrderData,
				isLoading: false,
				error: action.payload
			}
		}),

		takeCompleteActiveOrderStart: (state: OrderState): OrderState => ({
			...state,
			completeOrderData: {
				...state.completeOrderData,
				isLoading: true
			}
		}),
		takeCompleteActiveOrderSucess: (
			state: OrderState,
			action: PayloadAction<string>
		): OrderState => ({
			...state,
			completeOrderData: {
				...state.completeOrderData,
				isLoading: false,
				isComplete: true,
				error: null,
				orderId: action.payload
			}
		}),
		takeCompleteActiveOrderFailure: (
			state: OrderState,
			action: PayloadAction<string>
		): OrderState => ({
			...state,
			completeOrderData: {
				...state.completeOrderData,
				isLoading: false,
				error: action.payload
			}
		}),

		getCoordinateStart: (state: OrderState): OrderState => ({
			...state,
			getCoordinate: {
				...state.getCoordinate,
				isLoading: true
			}
		}),
		getCoordinateSucess: (
			state: OrderState,
			action: PayloadAction<{ s: string; e: string }>
		): OrderState => ({
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
		getCoordinateFailure: (state: OrderState, action: PayloadAction<string>): OrderState => ({
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

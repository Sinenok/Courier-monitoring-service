import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState, OrderState } from './types';

export const orderReducer = createSlice({
	name: 'order',
	initialState,
	reducers: {
		orderSendStart: (state: OrderState): OrderState => ({
			...state,
			createOrderData: {
				...state.createOrderData,
				isLoading: true
			}
		}),
		orderSendSucess: (state: OrderState, action: PayloadAction<string>): OrderState => ({
			...state,
			createOrderData: {
				...state.createOrderData,
				isLoading: false,
				isSending: true,
				error: null,
				trackNumber: action.payload
			}
		}),
		orderSendFailure: (state: OrderState, action: PayloadAction<string>): OrderState => ({
			...state,
			createOrderData: {
				...state.createOrderData,
				isLoading: false,
				error: action.payload
			}
		}),

		getOrderInfoStart: (state: OrderState): OrderState => ({
			...state,
			getOrderInfoData: {
				...state.getOrderInfoData,
				isLoading: true
			}
		}),
		getOrderInfoSucess: (state: OrderState, action: PayloadAction<any>): OrderState => ({
			...state,
			getOrderInfoData: {
				...state.getOrderInfoData,
				isLoading: false,
				error: null,
				order: action.payload
			}
		}),
		getOrderInfoFailure: (state: OrderState, action: PayloadAction<string>): OrderState => ({
			...state,
			getOrderInfoData: {
				...state.getOrderInfoData,
				isLoading: false,
				error: action.payload
			}
		}),

		getOrderRateStart: (state: OrderState): OrderState => ({
			...state,
			rateOrderData: {
				...state.rateOrderData,
				isLoading: true
			}
		}),
		getOrderRateSucess: (state: OrderState): OrderState => ({
			...state,
			rateOrderData: {
				...state.rateOrderData,
				error: null,
				isLoading: false,
				orderRate: true
			}
		}),
		getOrderRateFailure: (state: OrderState, action: PayloadAction<string>): OrderState => ({
			...state,
			rateOrderData: {
				...state.rateOrderData,
				isLoading: false,
				error: action.payload
			}
		})
	}
});

export const {
	orderSendStart,
	orderSendSucess,
	orderSendFailure,
	getOrderInfoStart,
	getOrderInfoSucess,
	getOrderInfoFailure,
	getOrderRateStart,
	getOrderRateSucess,
	getOrderRateFailure
} = orderReducer.actions;

export default orderReducer.reducer;

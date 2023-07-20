import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState, OrderState } from './types';

export const orderReducer = createSlice({
	name: 'order',
	initialState,
	reducers: {
		orderSendStart: (state): OrderState => ({
			...state,
			createOrderData: {
				...state.createOrderData,
				isLoading: true
			}
		}),
		orderSendSucess: (state, action: PayloadAction<string>): OrderState => ({
			...state,
			createOrderData: {
				...state.createOrderData,
				isLoading: false,
				isSending: true,
				error: null,
				trackNumber: action.payload
			}
		}),
		orderSendFailure: (state, action: PayloadAction<string>): OrderState => ({
			...state,
			createOrderData: {
				...state.createOrderData,
				isLoading: false,
				error: action.payload
			}
		}),

		getOrderInfoStart: (state): OrderState => ({
			...state,
			getOrderInfoData: {
				...state.getOrderInfoData,
				isLoading: true
			}
		}),
		getOrderInfoSucess: (state, action: PayloadAction<any>): OrderState => ({
			...state,
			getOrderInfoData: {
				...state.getOrderInfoData,
				isLoading: false,
				error: null,
				order: action.payload
			}
		}),
		getOrderInfoFailure: (state, action: PayloadAction<string>): OrderState => ({
			...state,
			getOrderInfoData: {
				...state.getOrderInfoData,
				isLoading: false,
				error: action.payload
			}
		}),

		getOrderRateStart: (state): OrderState => ({
			...state,
			rateOrderData: {
				...state.rateOrderData,
				isLoading: true
			}
		}),
		getOrderRateSucess: (state): OrderState => ({
			...state,
			rateOrderData: {
				...state.rateOrderData,
				error: null,
				isLoading: false,
				orderRate: true
			}
		}),
		getOrderRateFailure: (state, action: PayloadAction<string>): OrderState => ({
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

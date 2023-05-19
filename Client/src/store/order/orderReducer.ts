import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState, OrderState } from './types';

/** Интерфейс AuthState и начальный стейт для читаемости лучше вынести в отдельный файл и импортировать */
// ------------------------------ИСПРАВИЛ---------------------------------------------------------------------------

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
		})
	}
});

export const { orderSendStart, orderSendSucess, orderSendFailure } = orderReducer.actions;

export default orderReducer.reducer;

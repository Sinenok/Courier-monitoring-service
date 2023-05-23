import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authReducer';
import { useDispatch } from 'react-redux';

import logger from 'redux-logger';
import orderReducer from './order/orderReducer';
import courierReducer from './courier/courierReducer';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		order: orderReducer,
		courier: courierReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(...(process.env.NODE_ENV !== 'production' ? [logger] : []))
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types

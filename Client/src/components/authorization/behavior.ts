import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../store';
import { loginUser } from '../../store/auth/actionCreators';
import { IUseloginResult } from './types';

export const useLogin = (): IUseloginResult => {
	const dispatch = useAppDispatch();

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		dispatch(loginUser({ login, password }));
	};

	return {
		login,
		setLogin,
		password,
		setPassword,
		handleSubmit
	};
};

import { FormEvent, useCallback, useState } from 'react';
import { useAppDispatch } from '../../store';
import { loginUser } from '../../store/auth/actionCreators';
import { IUseloginResult } from './types';

export const useLogin = (): IUseloginResult => {
	const dispatch = useAppDispatch();

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = useCallback(
		(e: FormEvent) => {
			e.preventDefault();

			dispatch(loginUser({ login, password }));
		},
		[login, password]
	);

	return {
		login,
		setLogin,
		password,
		setPassword,
		handleSubmit
	};
};

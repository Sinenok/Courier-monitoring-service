import { FormEvent, useCallback, useState } from 'react';
import { useAppDispatch } from '../../store';
import { registerUser } from '../../store/auth/actionCreators';
import { IUseRegiserResult } from './types';

export const useRegister = (): IUseRegiserResult => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [login, setLogin] = useState('');
	const [mail, setMail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [phone, setPhone] = useState('');
	const [role, setRole] = useState('user');

	const dispatch = useAppDispatch();

	const handleSubmit = useCallback(
		(e: FormEvent) => {
			e.preventDefault();
			if (password === repeatPassword) {
				dispatch(registerUser({ firstName, lastName, login, mail, password, phone, role }));
			} else {
				/** Где будет обработана эта ошибка? */
				throw new Error('У вас не совпадают пароли');
			}
		},
		[firstName, lastName, login, mail, password, phone, repeatPassword, role]
	);

	return {
		firstName,
		setFirstName,
		lastName,
		setLastName,
		login,
		setLogin,
		mail,
		setMail,
		password,
		setPassword,
		repeatPassword,
		setRepeatPassword,
		phone,
		setPhone,
		role,
		setRole,
		handleSubmit
	};
};

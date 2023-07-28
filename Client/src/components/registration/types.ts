import React, { FormEvent } from 'react';
import { IRegisterResponce } from '../../api/auth/types';
export interface IUseRegiserResult extends IRegisterResponce {
	setFirstName: React.Dispatch<React.SetStateAction<string>>;
	setLastName: React.Dispatch<React.SetStateAction<string>>;
	setLogin: React.Dispatch<React.SetStateAction<string>>;
	setMail: React.Dispatch<React.SetStateAction<string>>;
	setPassword: React.Dispatch<React.SetStateAction<string>>;
	repeatPassword: string;
	setRepeatPassword: React.Dispatch<React.SetStateAction<string>>;
	setPhone: React.Dispatch<React.SetStateAction<string>>;
	setRole: React.Dispatch<React.SetStateAction<number>>;
	setTelegramUserName: React.Dispatch<React.SetStateAction<string>>;
	handleSubmit: (e: FormEvent) => void;
}

import React, { FormEvent } from 'react';
export interface IUseRegiserResult {
	firstName: string;
	setFirstName: React.Dispatch<React.SetStateAction<string>>;
	lastName: string;
	setLastName: React.Dispatch<React.SetStateAction<string>>;
	login: string;
	setLogin: React.Dispatch<React.SetStateAction<string>>;
	mail: string;
	setMail: React.Dispatch<React.SetStateAction<string>>;
	password: string;
	setPassword: React.Dispatch<React.SetStateAction<string>>;
	repeatPassword: string;
	setRepeatPassword: React.Dispatch<React.SetStateAction<string>>;
	phone: string;
	setPhone: React.Dispatch<React.SetStateAction<string>>;
	role: number;
	setRole: React.Dispatch<React.SetStateAction<number>>;
	telegramUserName: string;
	setTelegramUserName: React.Dispatch<React.SetStateAction<string>>;
	handleSubmit: (e: FormEvent) => void;
}

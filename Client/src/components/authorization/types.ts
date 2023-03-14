import React, { FormEvent } from 'react';
export interface IUseloginResult {
	login: string;
	setLogin: React.Dispatch<React.SetStateAction<string>>;
	password: string;
	setPassword: React.Dispatch<React.SetStateAction<string>>;
	handleSubmit: (e: FormEvent) => void;
}
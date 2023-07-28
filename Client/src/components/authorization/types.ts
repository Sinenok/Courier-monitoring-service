import React, { FormEvent } from 'react';
import { ILoginRequest } from '../../api/auth/types';
export interface IUseloginResult extends ILoginRequest {
	setLogin: React.Dispatch<React.SetStateAction<string>>;
	setPassword: React.Dispatch<React.SetStateAction<string>>;
	handleSubmit: (e: FormEvent) => void;
}

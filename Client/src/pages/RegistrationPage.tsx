// import axios from 'axios';
import { is } from 'immer/dist/internal';
import React, { useState } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Endpoints from '../api/endpoints';
import { axiosInstance } from '../api/instance';
import Registration from '../components/Registration';
import { IRootState, useAppDispatch } from '../store';
import { registerUser } from '../store/auth/actionCreators';

const RegistrationPage = () => {
	// const dispatch = useAppDispatch();
	const isLoggedIn = useSelector((state: IRootState) => state.auth.registrData.isRegistered);
	console.log('islog ', isLoggedIn);

	const renderProfile = () => (
		<div>
			Вы успешно зарегистрировались
			{/* <button onClick={() => dispatch(logoutUser())}>Logout</button> */}
		</div>
	);
	return <div>{isLoggedIn ? renderProfile() : <Registration />}</div>;
};

export default RegistrationPage;

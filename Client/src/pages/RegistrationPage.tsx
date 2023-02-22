import React from 'react';
import { useSelector } from 'react-redux';
import Registration from '../components/Registration';
import { IRootState } from '../store';

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
